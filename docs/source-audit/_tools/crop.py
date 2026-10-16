import sys
from PIL import Image
src, prefix, h = sys.argv[1], sys.argv[2], int(sys.argv[3])
im = Image.open(src).convert('RGB'); W, H = im.size
# trim trailing uniform area
px = im.load()
last = H
for y in range(H-1, 0, -20):
    row = [px[x, y] for x in range(0, W, 40)]
    if len(set(row)) > 1: last = min(H, y + 40); break
n = 0
for top in range(0, last, h):
    im.crop((0, top, W, min(top+h, last))).save(f'{prefix}-{n:02d}.png'); n += 1
print(W, H, 'content to', last, 'parts', n)
