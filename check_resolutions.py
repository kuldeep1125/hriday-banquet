# [ADDED] Check resolutions of all images in manifest
import json

with open('extracted_assets/manifest.json', 'r') as f:
    manifest = json.load(f)

images = [m for m in manifest if m.get('width')]
images_sorted = sorted(images, key=lambda m: m['width'] * m['height'], reverse=True)

print("Top 35 highest resolution images in ZIP:")
for idx, m in enumerate(images_sorted[:35]):
    print(f"{idx+1}. {m['safe_name']} | {m['width']}x{m['height']} | {m['size']/1024:.1f} KB | orig: {m['orig_name'][:75]}")
