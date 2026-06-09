#!/usr/bin/env python3
"""Generate app icons without PIL: dark background, amber walking route
with stop nodes. Writes PNGs to ../icons/."""
import os, struct, zlib

OUT = os.path.join(os.path.dirname(__file__), "..", "icons")

BG_TOP = (26, 29, 38)
BG_BOT = (16, 18, 24)
AMBER = (217, 164, 65)
NODE_FILL = (20, 22, 28)
WHITE = (232, 230, 224)

# route polyline in unit coords (x, y from top-left)
PATH = [(0.20, 0.80), (0.46, 0.62), (0.36, 0.42), (0.66, 0.30), (0.78, 0.20)]
NODES = [(0.20, 0.80), (0.36, 0.42), (0.78, 0.20)]


def dist_to_seg(px, py, ax, ay, bx, by):
    dx, dy = bx - ax, by - ay
    if dx == dy == 0:
        return ((px - ax) ** 2 + (py - ay) ** 2) ** 0.5
    t = max(0.0, min(1.0, ((px - ax) * dx + (py - ay) * dy) / (dx * dx + dy * dy)))
    cx, cy = ax + t * dx, ay + t * dy
    return ((px - cx) ** 2 + (py - cy) ** 2) ** 0.5


def make(size, path):
    line_w = size * 0.040
    node_r = size * 0.075
    ring_w = size * 0.022
    rows = []
    for y in range(size):
        t = y / size
        bg = tuple(int(BG_TOP[i] + (BG_BOT[i] - BG_TOP[i]) * t) for i in range(3))
        row = bytearray()
        row.append(0)  # filter: none
        for x in range(size):
            px, py = x + 0.5, y + 0.5
            col = bg
            # route line
            d = min(dist_to_seg(px, py, PATH[i][0] * size, PATH[i][1] * size,
                                PATH[i + 1][0] * size, PATH[i + 1][1] * size)
                    for i in range(len(PATH) - 1))
            if d < line_w:
                col = AMBER
            # nodes (drawn over the line)
            for nx, ny in NODES:
                dn = ((px - nx * size) ** 2 + (py - ny * size) ** 2) ** 0.5
                if dn < node_r - ring_w:
                    col = NODE_FILL
                elif dn < node_r:
                    col = AMBER
            # top node gets a white centre dot (the "you are here")
            nx, ny = NODES[-1]
            dn = ((px - nx * size) ** 2 + (py - ny * size) ** 2) ** 0.5
            if dn < node_r * 0.38:
                col = WHITE
            row += bytes(col)
        rows.append(bytes(row))

    raw = b"".join(rows)
    def chunk(tag, data):
        c = struct.pack(">I", len(data)) + tag + data
        return c + struct.pack(">I", zlib.crc32(tag + data) & 0xFFFFFFFF)
    png = (b"\x89PNG\r\n\x1a\n"
           + chunk(b"IHDR", struct.pack(">IIBBBBB", size, size, 8, 2, 0, 0, 0))
           + chunk(b"IDAT", zlib.compress(raw, 9))
           + chunk(b"IEND", b""))
    with open(path, "wb") as f:
        f.write(png)
    print(f"wrote {path} ({len(png)} bytes)")


os.makedirs(OUT, exist_ok=True)
make(512, os.path.join(OUT, "icon-512.png"))
make(192, os.path.join(OUT, "icon-192.png"))
make(180, os.path.join(OUT, "apple-touch-icon.png"))
make(32, os.path.join(OUT, "favicon-32.png"))
