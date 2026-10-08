# [ADDED] Script to inspect and safely extract all assets from the provided ZIP
import zipfile
import os
import json
import re
import io
from PIL import Image

zip_path = r'hriday banquet - Google Search/hriday banquet - Google Search.zip'
out_dir = r'extracted_assets'
os.makedirs(out_dir, exist_ok=True)

manifest = []

with zipfile.ZipFile(zip_path, 'r') as zf:
    for idx, member in enumerate(zf.infolist()):
        orig_name = member.filename
        
        # Determine clean extension
        base_clean = orig_name.split('&')[0].split('?')[0]
        ext = os.path.splitext(base_clean)[1].lower()
        if not ext:
            if 'png' in orig_name.lower():
                ext = '.png'
            elif 'jpg' in orig_name.lower() or 'jpeg' in orig_name.lower():
                ext = '.jpg'
            elif 'webp' in orig_name.lower():
                ext = '.webp'
            elif 'svg' in orig_name.lower():
                ext = '.svg'
            else:
                ext = '.bin'

        # Make safe filename
        safe_base = re.sub(r'[^a-zA-Z0-9_-]', '_', os.path.splitext(orig_name)[0])[:45]
        safe_name = f"asset_{idx:03d}_{safe_base}{ext}"
        target_path = os.path.join(out_dir, safe_name)
        
        data = zf.read(member)
        with open(target_path, 'wb') as f:
            f.write(data)

        width, height, img_format = None, None, None
        try:
            with Image.open(io.BytesIO(data)) as img:
                width, height = img.size
                img_format = img.format
        except Exception:
            pass

        manifest.append({
            'index': idx,
            'orig_name': orig_name,
            'safe_name': safe_name,
            'size': len(data),
            'width': width,
            'height': height,
            'format': img_format or ext
        })

with open(os.path.join(out_dir, 'manifest.json'), 'w', encoding='utf-8') as f:
    json.dump(manifest, f, indent=2)

print(f"Successfully extracted {len(manifest)} assets.")
valid_images = [m for m in manifest if m['width'] is not None]
print(f"Total valid image files: {len(valid_images)}")

# Filter images with substantial resolution (width >= 200 or height >= 200) and size >= 10KB
meaningful_photos = [m for m in manifest if m['width'] and (m['width'] >= 200 or m['height'] >= 200) and m['size'] >= 10000]
print(f"Found {len(meaningful_photos)} meaningful venue photos:")
for p in sorted(meaningful_photos, key=lambda x: x['size'], reverse=True):
    print(f"{p['safe_name']} | {p['width']}x{p['height']} | {p['size']/1024:.1f} KB | orig: {p['orig_name'][:65]}")
