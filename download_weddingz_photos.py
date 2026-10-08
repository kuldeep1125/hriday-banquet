# [ADDED] Download authentic images from Weddingz and inspect their resolutions
import urllib.request
import os
from PIL import Image

urls = [
    "https://media.weddingz.in/photologue/images/hriday-hall-hriday-hall-hall-1.jpg",
    "https://media.weddingz.in/photologue/images/hriday-hall-hriday-hall-hall.jpg",
    "https://media.weddingz.in/photologue/images/hriday-hall-hriday-hall-hall-2.jpg",
    "https://media.weddingz.in/photologue/images/hriday-hall-moshi-pune.jpg",
    "https://media.weddingz.in/photologue/images/hriday-hall-hriday-hall-hall-5.jpg",
    "https://media.weddingz.in/photologue/images/hriday-hall-hriday-hall-hall-3.jpg",
    "https://media.weddingz.in/photologue/images/hriday-hall-hriday-hall-hall-4.jpg"
]

out_dir = "downloaded_official_assets"
os.makedirs(out_dir, exist_ok=True)

headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"}

for u in urls:
    filename = os.path.basename(u)
    save_path = os.path.join(out_dir, filename)
    req = urllib.request.Request(u, headers=headers)
    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
            data = resp.read()
            with open(save_path, 'wb') as f:
                f.write(data)
            with Image.open(save_path) as img:
                print(f"Downloaded {filename}: {img.size[0]}x{img.size[1]}, {len(data)/1024:.1f} KB")
    except Exception as e:
        print(f"Failed {u}: {e}")
