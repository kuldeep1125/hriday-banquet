# [ADDED] Find all high-res photos across zip and downloaded official assets
import os
import glob
from PIL import Image

print("--- EXAMINING ALL ASSETS WITH WIDTH >= 500 OR HEIGHT >= 500 ---")
all_files = glob.glob("extracted_assets/*.*") + glob.glob("downloaded_official_assets/*.*")

found = []
for f in all_files:
    if f.endswith('.json') or f.endswith('.bin') or f.endswith('.svg') or f.endswith('.py'):
        continue
    try:
        with Image.open(f) as im:
            w, h = im.size
            if w >= 500 or h >= 500:
                found.append({
                    "path": f,
                    "filename": os.path.basename(f),
                    "width": w,
                    "height": h,
                    "size_kb": os.path.getsize(f) / 1024,
                    "format": im.format
                })
    except Exception:
        pass

# Sort by pixel area
found = sorted(found, key=lambda x: x["width"] * x["height"], reverse=True)

for i, item in enumerate(found):
    print(f"{i+1:2d}. {item['filename'][:55]:<55} | {item['width']}x{item['height']} | {item['size_kb']:.1f} KB | {item['format']}")
