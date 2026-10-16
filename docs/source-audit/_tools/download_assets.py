"""Download original asset files and write a manifest.
Usage: python -I download_assets.py <index.json> <heads.json> <dest_dir>
"""
import sys, os, json, re, urllib.request, urllib.parse, hashlib, collections, concurrent.futures as cf

idx = json.load(open(sys.argv[1], encoding='utf-8'))
heads = {h[0]: h for h in json.load(open(sys.argv[2]))}
DEST = sys.argv[3]
LOGO = 'https://images.squarespace-cdn.com/content/v1/55cd8826e4b0af9801ddffe4/1573993472707-UZS7EM59TQNTW1DD7WSG/TheJuicyEffect+part+logo.png'
SOCIAL = 'https://images.squarespace-cdn.com/content/v1/55cd8826e4b0af9801ddffe4/1572067008670-LUGX0P39FLCIWXBACTIZ/Untitled+design+%284%29.png'

uses = collections.defaultdict(list)
for a in idx['assets']:
    uses[a['url']].append(a)
uses[LOGO].append(dict(url=LOGO, page='(global header)', section='header', kind='logo', alt='The Juicy Effect logo'))
uses[SOCIAL].append(dict(url=SOCIAL, page='(global)', section='meta', kind='social-share-logo', alt=''))

def category(u, us):
    kinds = {x['kind'] for x in us}
    pages = {x['page'] for x in us}
    if kinds & {'logo', 'social-share-logo'}: return 'brand'
    if kinds == {'og-image'} and all(p.startswith('/blog/') for p in pages): return 'blog'
    if all(p.startswith('/blog/') for p in pages): return 'blog'
    return 'pages'

def fname(u, ctype):
    seg = urllib.parse.unquote(u.rstrip('/').split('/')[-1])
    seg = re.sub(r'[^\w.\-() ]+', '_', seg).strip().replace(' ', '-')[:80]
    ext = {'image/jpeg': '.jpg', 'image/png': '.png', 'image/gif': '.gif', 'image/webp': '.webp'}.get(ctype or '', '')
    if not re.search(r'\.(jpe?g|png|gif|webp)$', seg, re.I): seg += ext
    h = hashlib.md5(u.encode()).hexdigest()[:6]
    return f'{h}_{seg}'

def get(u):
    ctype = heads.get(u, (u, 0, 0, None))[3]
    cat = category(u, uses[u])
    rel = f'{cat}/{fname(u, ctype)}'
    path = os.path.join(DEST, rel)
    os.makedirs(os.path.dirname(path), exist_ok=True)
    if not os.path.exists(path):
        try:
            data = urllib.request.urlopen(urllib.request.Request(u.replace('http://', 'https://'), headers={'User-Agent': 'Mozilla/5.0'}), timeout=120).read()
            open(path, 'wb').write(data)
        except Exception as e:
            return u, None, str(e)[:80]
    return u, rel, None

with cf.ThreadPoolExecutor(8) as ex:
    res = list(ex.map(get, sorted(uses)))

rows = []
for u, rel, err in res:
    us = uses[u]
    rows.append(dict(url=u, local=('source-assets/' + rel) if rel else None, error=err,
                     bytes=heads.get(u, (0, 0, 0))[2], type=heads.get(u, (0, 0, 0, None))[3],
                     kinds=sorted({x['kind'] for x in us}), pages=sorted({x['page'] for x in us}),
                     sections=sorted({x['section'] for x in us}), alts=sorted({x['alt'] for x in us if x.get('alt')})))
json.dump(rows, open(os.path.join(DEST, 'manifest.json'), 'w', encoding='utf-8'), indent=1, ensure_ascii=False)
print('ok', sum(1 for r in rows if r['local'] and not r['error']), 'errors', [r['url'] for r in rows if r['error']])
