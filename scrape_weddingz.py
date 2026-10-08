# [ADDED] Script to query Weddingz page for Hriday Hall
import urllib.request
import re

url = "https://weddingz.in/pune/hriday-hall-moshi/"
headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"}
req = urllib.request.Request(url, headers=headers)

try:
    with urllib.request.urlopen(req, timeout=10) as resp:
        content = resp.read().decode('utf-8', errors='ignore')
        print(f"Weddingz fetch status: OK, size: {len(content)}")
        
        # Look for images
        images = re.findall(r'https://[^\s"\'<>]+\.(?:jpg|jpeg|png|webp)', content)
        venue_imgs = [img for img in set(images) if 'weddingz' in img.lower() and ('hriday' in img.lower() or 'venue' in img.lower() or 'upload' in img.lower())]
        print(f"Found {len(venue_imgs)} venue images on Weddingz:")
        for img in venue_imgs[:10]:
            print(img)
            
        # Look for title and description
        title = re.findall(r'<title>(.*?)</title>', content)
        if title:
            print("Title:", title[0])
except Exception as e:
    print(f"Error: {e}")
