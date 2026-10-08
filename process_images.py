# [ADDED] Professional image processing script to generate optimized web assets
import os
import shutil
from PIL import Image, ImageEnhance, ImageFilter

input_extracted = "extracted_assets"
input_official = "downloaded_official_assets"
public_img_dir = os.path.join("public", "images")
os.makedirs(public_img_dir, exist_ok=True)

# Define asset mappings: (source_path, target_stem, crop_box, quality)
tasks = [
    {
        "src": os.path.join(input_extracted, "asset_002_imgi_370_hriday-hall-moshi-pune-banquet-halls.jpg"),
        "target": "hriday-facade-night",
        "title": "Hriday Banquet Hall illuminated night facade with official signboard in Moshi",
        "enhance": True
    },
    {
        "src": os.path.join(input_extracted, "asset_001_imgi_369_hriday-hall-moshi-pune-banquet-halls.jpg"),
        "target": "hriday-main-hall-theatre",
        "title": "Air-conditioned main banquet hall theatre seating with maroon covers and carpet runner",
        "enhance": True
    },
    {
        "src": os.path.join(input_extracted, "asset_000_imgi_372_hriday-hall-moshi-pune-banquet-halls.jpg"),
        "target": "hriday-dining-hall-buffet",
        "title": "Spacious banquet dining hall with dressed round tables and illuminated buffet station",
        "enhance": True
    },
    {
        "src": os.path.join(input_extracted, "asset_003_imgi_230_ANWiy9Qgg6UOshuI-_Wox55CG0B6E0ZXMtWa.webp"),
        "target": "hriday-stage-birthday-decor",
        "title": "Custom celebration stage setup with floral arch and audio visual coordination",
        "enhance": True
    },
    {
        "src": os.path.join(input_official, "hriday-hall-hriday-hall-hall-2.jpg"),
        "target": "hriday-stage-traditional-jhula",
        "title": "Traditional ceremony stage with floral swing (jhula) and celebratory backdrop",
        "enhance": True
    },
    {
        "src": os.path.join(input_official, "hriday-hall-hriday-hall-hall-1.jpg"),
        "target": "hriday-hall-celebration-ambience",
        "title": "Main hall ambient illumination and guest seating arrangements for family events",
        "enhance": True
    },
    {
        "src": os.path.join(input_official, "hriday-hall-hriday-hall-hall-3.jpg"),
        "target": "hriday-hall-stage-perspective",
        "title": "Stage perspective looking towards the entry foyer and air-conditioning units",
        "enhance": True
    },
    {
        "src": os.path.join(input_official, "hriday-hall-hriday-hall-hall-4.jpg"),
        "target": "hriday-dining-seating-tables",
        "title": "Banquet dining seating layout with table runners and dedicated service area",
        "enhance": True
    },
    {
        "src": os.path.join(input_official, "hriday-hall-moshi-pune.jpg"),
        "target": "hriday-empty-grand-hall",
        "title": "Open hall layout showing polished vitrified flooring, false ceiling, and raised stage",
        "enhance": True
    },
    {
        "src": os.path.join(input_official, "hriday-hall-hriday-hall-hall-5.jpg"),
        "target": "hriday-stage-backdrop-setup",
        "title": "Stage backdrop and theatre seating configuration ready for guest reception",
        "enhance": True
    },
    {
        "src": os.path.join(input_extracted, "asset_021_imgi_55_ANWiy9R_HAml5vbytMniybhSBB0RYevB7wI85.jpg"),
        "target": "hriday-radha-krishna-stage",
        "title": "Ceremonial stage decoration with Radhe Krishna backdrop and plush lounge sofa",
        "enhance": True
    },
    {
        "src": os.path.join(input_extracted, "asset_024_imgi_51_ANWiy9S-RP3229Wbq4_4-Pzr5N0XB9bDVI9qF.jpg"),
        "target": "hriday-catering-traditional-thali",
        "title": "Freshly prepared vegetarian catering menu featuring curries, breads, sweets, and salad",
        "enhance": True
    },
    {
        "src": os.path.join(input_extracted, "asset_023_imgi_52_ANWiy9TQKsmK7W93G3NFjnlPQoS9OCrbYgEop.jpg"),
        "target": "hriday-dining-family-event",
        "title": "Guests enjoying celebratory meal together in the dedicated dining hall",
        "enhance": True
    }
]

print("Starting professional image optimization pipeline...")

for task in tasks:
    src_path = task["src"]
    if not os.path.exists(src_path):
        print(f"Skipping missing: {src_path}")
        continue
    
    stem = task["target"]
    with Image.open(src_path) as im:
        im = im.convert("RGB")
        w, h = im.size
        
        # Professional subtle natural tone enhancement (no AI distortion, no plastic look)
        if task.get("enhance"):
            # Subtle contrast correction
            enh_contrast = ImageEnhance.Contrast(im)
            im = enh_contrast.enhance(1.05)
            # Subtle color saturation boost for warm hospitality tones
            enh_color = ImageEnhance.Color(im)
            im = enh_color.enhance(1.04)
            # Subtle sharpness improvement
            enh_sharpness = ImageEnhance.Sharpness(im)
            im = enh_sharpness.enhance(1.1)

        # 1. Desktop full variant (max width 1600px maintaining aspect ratio)
        desktop_w = min(1600, w)
        desktop_h = int(h * (desktop_w / w))
        im_desktop = im.resize((desktop_w, desktop_h), Image.Resampling.LANCZOS)
        
        webp_path = os.path.join(public_img_dir, f"{stem}.webp")
        jpg_path = os.path.join(public_img_dir, f"{stem}.jpg")
        im_desktop.save(webp_path, "WEBP", quality=88, method=6)
        im_desktop.save(jpg_path, "JPEG", quality=88, optimize=True)

        # 2. Responsive mobile variant (max width 750px)
        mobile_w = min(750, w)
        mobile_h = int(h * (mobile_w / w))
        im_mobile = im.resize((mobile_w, mobile_h), Image.Resampling.LANCZOS)
        
        mobile_webp = os.path.join(public_img_dir, f"{stem}-mobile.webp")
        im_mobile.save(mobile_webp, "WEBP", quality=85, method=6)

        # 3. Square card thumbnail (400x400) with center crop
        min_dim = min(w, h)
        left = (w - min_dim) // 2
        top = (h - min_dim) // 2
        thumb_im = im.crop((left, top, left + min_dim, top + min_dim)).resize((400, 400), Image.Resampling.LANCZOS)
        thumb_path = os.path.join(public_img_dir, f"{stem}-thumb.webp")
        thumb_im.save(thumb_path, "WEBP", quality=85)

        print(f"Processed: {stem} -> {desktop_w}x{desktop_h} (WebP & JPG) + {mobile_w}x{mobile_h} (mobile) + 400x400 (thumb)")

# Also copy location map snippet
map_src = os.path.join(input_extracted, "asset_010_imgi_39_data_9z8IhU-2q2DAfu8uT_xqXLsBKqVRhqWH.png")
if os.path.exists(map_src):
    shutil.copy(map_src, os.path.join(public_img_dir, "hriday-map-location.png"))
    print("Copied location map pin.")

print("All real images processed successfully into public/images/!")
