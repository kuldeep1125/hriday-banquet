# [REFACTORED] Professional Full HD & 2K Image Enhancement and Multi-Resolution Pipeline
import os
import cv2
import numpy as np
from PIL import Image

input_extracted = "extracted_assets"
input_official = "downloaded_official_assets"
output_dir = os.path.join("public", "images")
os.makedirs(output_dir, exist_ok=True)

# [ADDED] Curated high-value authentic venue photographs to be processed to Full HD & 2K
pipeline_tasks = [
    {
        "src": os.path.join(input_extracted, "asset_002_imgi_370_hriday-hall-moshi-pune-banquet-halls.jpg"),
        "stem": "hriday-facade-night",
        "target_w": 2048,
        "category": "facade",
        "title": "Hriday Banquet Hall illuminated night facade with official signboard in Moshi",
        "denoise_strength": 3,
        "clahe_clip": 1.5,
        "sharpen_strength": 0.35
    },
    {
        "src": os.path.join(input_extracted, "asset_001_imgi_369_hriday-hall-moshi-pune-banquet-halls.jpg"),
        "stem": "hriday-main-hall-theatre",
        "target_w": 2048,
        "category": "hall",
        "title": "Air-conditioned main banquet hall theatre seating with maroon covers and carpet runner",
        "denoise_strength": 3,
        "clahe_clip": 1.6,
        "sharpen_strength": 0.40
    },
    {
        "src": os.path.join(input_extracted, "asset_000_imgi_372_hriday-hall-moshi-pune-banquet-halls.jpg"),
        "stem": "hriday-dining-hall-buffet",
        "target_w": 2048,
        "category": "dining",
        "title": "Spacious banquet dining hall with dressed round tables and illuminated buffet station",
        "denoise_strength": 3,
        "clahe_clip": 1.6,
        "sharpen_strength": 0.35
    },
    {
        "src": os.path.join(input_extracted, "asset_003_imgi_230_ANWiy9Qgg6UOshuI-_Wox55CG0B6E0ZXMtWa.webp"),
        "stem": "hriday-stage-birthday-decor",
        "target_w": 2048,
        "category": "stage",
        "title": "Custom celebration stage setup with floral arch and audio visual coordination",
        "denoise_strength": 3,
        "clahe_clip": 1.4,
        "sharpen_strength": 0.35
    },
    {
        "src": os.path.join(input_official, "hriday-hall-hriday-hall-hall-2.jpg"),
        "stem": "hriday-stage-traditional-jhula",
        "target_w": 1920,
        "category": "stage",
        "title": "Traditional ceremony stage with floral swing (jhula) and celebratory backdrop",
        "denoise_strength": 4,
        "clahe_clip": 1.8,
        "sharpen_strength": 0.42
    },
    {
        "src": os.path.join(input_official, "hriday-hall-hriday-hall-hall-1.jpg"),
        "stem": "hriday-hall-celebration-ambience",
        "target_w": 1920,
        "category": "hall",
        "title": "Main hall ambient illumination and guest seating arrangements for family events",
        "denoise_strength": 4,
        "clahe_clip": 1.8,
        "sharpen_strength": 0.42
    },
    {
        "src": os.path.join(input_official, "hriday-hall-hriday-hall-hall-3.jpg"),
        "stem": "hriday-hall-stage-perspective",
        "target_w": 1920,
        "category": "hall",
        "title": "Stage perspective looking towards the entry foyer and air-conditioning units",
        "denoise_strength": 4,
        "clahe_clip": 1.8,
        "sharpen_strength": 0.42
    },
    {
        "src": os.path.join(input_official, "hriday-hall-hriday-hall-hall-4.jpg"),
        "stem": "hriday-dining-seating-tables",
        "target_w": 1920,
        "category": "dining",
        "title": "Banquet dining seating layout with table runners and dedicated service area",
        "denoise_strength": 4,
        "clahe_clip": 1.8,
        "sharpen_strength": 0.42
    },
    {
        "src": os.path.join(input_official, "hriday-hall-hriday-hall-hall-5.jpg"),
        "stem": "hriday-stage-backdrop-setup",
        "target_w": 1920,
        "category": "stage",
        "title": "Stage backdrop and theatre seating configuration ready for guest reception",
        "denoise_strength": 4,
        "clahe_clip": 1.8,
        "sharpen_strength": 0.42
    },
    {
        "src": os.path.join(input_official, "hriday-hall-moshi-pune.jpg"),
        "stem": "hriday-empty-grand-hall",
        "target_w": 1440,
        "category": "hall",
        "title": "Open hall layout showing polished vitrified flooring, false ceiling, and raised stage",
        "denoise_strength": 4,
        "clahe_clip": 2.0,
        "sharpen_strength": 0.45
    }
]

def enhance_image(img_bgr, target_w, denoise_strength=3, clahe_clip=1.6, sharpen_strength=0.35):
    """
    [ADDED] Multi-stage photographic restoration:
    1. Edge-preserving bilateral filter to suppress compression noise while retaining edge sharpness.
    2. LAB color-space CLAHE to enhance local dynamic range, reveal shadow details, and protect highlights.
    3. High-precision Lanczos4 interpolation for crisp, artifact-free upscaling.
    4. Unsharp masking to accentuate architectural lines, chandeliers, and fabric textures.
    """
    h, w = img_bgr.shape[:2]
    
    # Stage 1: Bilateral denoising
    denoised = cv2.bilateralFilter(img_bgr, d=7, sigmaColor=30, sigmaSpace=30)
    
    # Stage 2: Dynamic range enhancement in LAB
    lab = cv2.cvtColor(denoised, cv2.COLOR_BGR2LAB)
    l_channel, a_channel, b_channel = cv2.split(lab)
    
    clahe = cv2.createCLAHE(clipLimit=clahe_clip, tileGridSize=(8, 8))
    cl = clahe.apply(l_channel)
    
    enhanced_lab = cv2.merge((cl, a_channel, b_channel))
    color_balanced = cv2.cvtColor(enhanced_lab, cv2.COLOR_LAB2BGR)
    
    # Stage 3: High-order Lanczos4 upscaling
    target_h = int(h * (target_w / w))
    upscaled = cv2.resize(color_balanced, (target_w, target_h), interpolation=cv2.INTER_LANCZOS4)
    
    # Stage 4: Unsharp masking
    gaussian = cv2.GaussianBlur(upscaled, (0, 0), sigmaX=1.5)
    sharpened = cv2.addWeighted(upscaled, 1.0 + sharpen_strength, gaussian, -sharpen_strength, 0)
    sharpened = np.clip(sharpened, 0, 255).astype(np.uint8)
    
    return sharpened, target_w, target_h

print(f"Executing Full HD & 2K Multi-Resolution Enhancement for {len(pipeline_tasks)} venue images...")

for task in pipeline_tasks:
    src_path = task["src"]
    if not os.path.exists(src_path):
        print(f"Warning: source file missing: {src_path}")
        continue
    
    stem = task["stem"]
    target_w = task["target_w"]
    
    # Read source image
    img_bgr = cv2.imread(src_path)
    if img_bgr is None:
        pil_im = Image.open(src_path).convert("RGB")
        img_bgr = cv2.cvtColor(np.array(pil_im), cv2.COLOR_RGB2BGR)

    enhanced_bgr, hd_w, hd_h = enhance_image(
        img_bgr,
        target_w=target_w,
        denoise_strength=task["denoise_strength"],
        clahe_clip=task["clahe_clip"],
        sharpen_strength=task["sharpen_strength"]
    )
    
    enhanced_rgb = cv2.cvtColor(enhanced_bgr, cv2.COLOR_BGR2RGB)
    pil_master = Image.fromarray(enhanced_rgb)
    
    # [ADDED] 1. Master Full HD / 2K Files (WebP quality=94, JPEG quality=94)
    master_webp = os.path.join(output_dir, f"{stem}.webp")
    master_jpg = os.path.join(output_dir, f"{stem}.jpg")
    pil_master.save(master_webp, "WEBP", quality=94, method=6)
    pil_master.save(master_jpg, "JPEG", quality=94, optimize=True)
    
    # [ADDED] 2. Desktop Standard 1280px variant
    std_w = min(1280, hd_w)
    std_h = int(hd_h * (std_w / hd_w))
    pil_std = pil_master.resize((std_w, std_h), Image.Resampling.LANCZOS)
    pil_std.save(os.path.join(output_dir, f"{stem}-1280.webp"), "WEBP", quality=92, method=6)
    pil_std.save(os.path.join(output_dir, f"{stem}-1280.jpg"), "JPEG", quality=92, optimize=True)

    # [ADDED] 3. Tablet Standard 1024px variant
    tab_w = min(1024, hd_w)
    tab_h = int(hd_h * (tab_w / hd_w))
    pil_tab = pil_master.resize((tab_w, tab_h), Image.Resampling.LANCZOS)
    pil_tab.save(os.path.join(output_dir, f"{stem}-1024.webp"), "WEBP", quality=90, method=6)
    pil_tab.save(os.path.join(output_dir, f"{stem}-1024.jpg"), "JPEG", quality=90, optimize=True)

    # [ADDED] 4. Mobile 768px variant
    mob_w = min(768, hd_w)
    mob_h = int(hd_h * (mob_w / hd_w))
    pil_mob = pil_master.resize((mob_w, mob_h), Image.Resampling.LANCZOS)
    pil_mob.save(os.path.join(output_dir, f"{stem}-mobile.webp"), "WEBP", quality=88, method=6)
    pil_mob.save(os.path.join(output_dir, f"{stem}-mobile.jpg"), "JPEG", quality=88, optimize=True)

    # [ADDED] 5. Square Card Thumbnail 500x500 (Center crop with crisp detail)
    thumb_size = 500
    w_orig, h_orig = pil_master.size
    min_edge = min(w_orig, h_orig)
    left = (w_orig - min_edge) // 2
    top = (h_orig - min_edge) // 2
    right = left + min_edge
    bottom = top + min_edge
    pil_cropped = pil_master.crop((left, top, right, bottom))
    pil_thumb = pil_cropped.resize((thumb_size, thumb_size), Image.Resampling.LANCZOS)
    pil_thumb.save(os.path.join(output_dir, f"{stem}-thumb.webp"), "WEBP", quality=88, method=6)
    pil_thumb.save(os.path.join(output_dir, f"{stem}-thumb.jpg"), "JPEG", quality=88, optimize=True)

    print(f"Generated HD assets for {stem}: {hd_w}x{hd_h} master, 1280px, 1024px tablet, 768px mobile, 500px thumb")

print("All Full HD multi-resolution venue assets successfully generated.")
