# [ADDED] Cinematic Luxury Hospitality Grading Engine
# Re-grades authentic Hriday Hall assets to editorial luxury standards while preserving 100% reality.
import os
import cv2
import numpy as np
from PIL import Image

output_dir = os.path.join("public", "images")
dist_dir = os.path.join("dist", "images")
os.makedirs(output_dir, exist_ok=True)
os.makedirs(dist_dir, exist_ok=True)

# Curated authentic tasks
tasks = [
    {
        "src": os.path.join("extracted_assets", "asset_002_imgi_370_hriday-hall-moshi-pune-banquet-halls.jpg"),
        "stem": "hriday-facade-night",
        "target_w": 2048,
        "warmth": 1.04,     # Night facade: rich warm amber illumination against deep navy night
        "contrast": 1.15,
        "bloom_strength": 0.12,
        "vignette": 0.85
    },
    {
        "src": os.path.join("extracted_assets", "asset_001_imgi_369_hriday-hall-moshi-pune-banquet-halls.jpg"),
        "stem": "hriday-main-hall-theatre",
        "target_w": 2048,
        "warmth": 1.03,     # Main ceremonial hall: rich royal maroon seating & warm ceiling glow
        "contrast": 1.18,
        "bloom_strength": 0.08,
        "vignette": 0.90
    },
    {
        "src": os.path.join("extracted_assets", "asset_000_imgi_372_hriday-hall-moshi-pune-banquet-halls.jpg"),
        "stem": "hriday-dining-hall-buffet",
        "target_w": 2048,
        "warmth": 1.05,     # Dining floor: warm appetizing banquet lighting
        "contrast": 1.15,
        "bloom_strength": 0.08,
        "vignette": 0.90
    },
    {
        "src": os.path.join("extracted_assets", "asset_003_imgi_230_ANWiy9Qgg6UOshuI-_Wox55CG0B6E0ZXMtWa.webp"),
        "stem": "hriday-stage-birthday-decor",
        "target_w": 2048,
        "warmth": 1.02,     # Pastel celebratory stage: clean, vibrant color separation
        "contrast": 1.12,
        "bloom_strength": 0.07,
        "vignette": 0.92
    },
    {
        "src": os.path.join("downloaded_official_assets", "hriday-hall-hriday-hall-hall-2.jpg"),
        "stem": "hriday-stage-traditional-jhula",
        "target_w": 1920,
        "warmth": 1.05,     # Traditional cultural swing: warm marigold, gold and brass tones
        "contrast": 1.16,
        "bloom_strength": 0.09,
        "vignette": 0.88
    },
    {
        "src": os.path.join("downloaded_official_assets", "hriday-hall-hriday-hall-hall-1.jpg"),
        "stem": "hriday-hall-celebration-ambience",
        "target_w": 1920,
        "warmth": 1.04,     # Celebration hall ambiance
        "contrast": 1.15,
        "bloom_strength": 0.08,
        "vignette": 0.88
    },
    {
        "src": os.path.join("downloaded_official_assets", "hriday-hall-hriday-hall-hall-3.jpg"),
        "stem": "hriday-hall-stage-perspective",
        "target_w": 1920,
        "warmth": 1.03,     # Stage perspective
        "contrast": 1.14,
        "bloom_strength": 0.07,
        "vignette": 0.90
    },
    {
        "src": os.path.join("downloaded_official_assets", "hriday-hall-hriday-hall-hall-4.jpg"),
        "stem": "hriday-dining-seating-tables",
        "target_w": 1920,
        "warmth": 1.04,     # Banquet seating tables
        "contrast": 1.14,
        "bloom_strength": 0.07,
        "vignette": 0.90
    },
    {
        "src": os.path.join("downloaded_official_assets", "hriday-hall-hriday-hall-hall-5.jpg"),
        "stem": "hriday-stage-backdrop-setup",
        "target_w": 1920,
        "warmth": 1.04,     # Reception backdrop setup
        "contrast": 1.15,
        "bloom_strength": 0.08,
        "vignette": 0.88
    },
    {
        "src": os.path.join("downloaded_official_assets", "hriday-hall-moshi-pune.jpg"),
        "stem": "hriday-empty-grand-hall",
        "target_w": 1440,
        "warmth": 1.03,     # Grand hall architecture & polished flooring
        "contrast": 1.16,
        "bloom_strength": 0.08,
        "vignette": 0.90
    }
]

def apply_cinematic_hospitality_grade(img_bgr, target_w, warmth=1.04, contrast=1.15, bloom_strength=0.08, vignette_min=0.88):
    h, w = img_bgr.shape[:2]
    
    # 1. Bilateral Denoising - Edge Preserving
    denoised = cv2.bilateralFilter(img_bgr, d=7, sigmaColor=35, sigmaSpace=35)
    
    # 2. Lanczos4 High-Order Upscaling to master resolution
    target_h = int(h * (target_w / w))
    upscaled = cv2.resize(denoised, (target_w, target_h), interpolation=cv2.INTER_LANCZOS4)
    
    # 3. Dynamic Range & Local Contrast in LAB space
    lab = cv2.cvtColor(upscaled, cv2.COLOR_BGR2LAB)
    l, a, b = cv2.split(lab)
    clahe = cv2.createCLAHE(clipLimit=1.6, tileGridSize=(8, 8))
    l = clahe.apply(l)
    graded_lab = cv2.merge((l, a, b))
    graded_bgr = cv2.cvtColor(graded_lab, cv2.COLOR_LAB2BGR)
    
    # 4. Filmic S-Curve in float32: lifts matte blacks to ~8, deepens lower-mids, compresses highlights
    img_f = graded_bgr.astype(np.float32) / 255.0
    
    # Filmic S-curve transfer function
    # x' = 3x^2 - 2x^3 (classic smoothstep), blended with original
    smooth = img_f * img_f * (3.0 - 2.0 * img_f)
    img_f = img_f * (1.0 - (contrast - 1.0) * 1.5) + smooth * ((contrast - 1.0) * 1.5)
    
    # Matte black lift: prevents harsh digital zero clipping, gives velvety deep shadows
    img_f = np.clip(img_f * 0.97 + 0.03, 0.0, 1.0)
    
    # 5. Split-Toning & Atmospheric Warmth:
    # Enhance Red & Green in highlights (warm gold/amber), keep deep shadows cool/neutral
    b_ch = img_f[:, :, 0]
    g_ch = img_f[:, :, 1]
    r_ch = img_f[:, :, 2]
    
    # Highlight mask (areas with brightness > 0.4)
    luma = 0.299 * r_ch + 0.587 * g_ch + 0.114 * b_ch
    warm_mask = np.clip((luma - 0.25) / 0.75, 0.0, 1.0)
    
    # Warm shift: boost red & slight green, subtly cool shadows to avoid yellow haze
    r_ch = np.clip(r_ch * (1.0 + (warmth - 1.0) * 1.8 * warm_mask), 0.0, 1.0)
    g_ch = np.clip(g_ch * (1.0 + (warmth - 1.0) * 0.8 * warm_mask), 0.0, 1.0)
    b_ch = np.clip(b_ch * (1.0 - (warmth - 1.0) * 0.5 * warm_mask), 0.0, 1.0)
    
    img_f = np.stack([b_ch, g_ch, r_ch], axis=2)
    
    # 6. Highlight Bloom / Soft Candlelight Glow
    # Extract bright lights (> 0.75) and apply wide blur
    bright_mask = np.clip((luma - 0.75) / 0.25, 0.0, 1.0)
    bright_only = (img_f * bright_mask[:, :, None] * 255.0).astype(np.uint8)
    bloom_blur = cv2.GaussianBlur(bright_only, (0, 0), sigmaX=target_w * 0.02)
    bloom_f = bloom_blur.astype(np.float32) / 255.0
    img_f = np.clip(img_f + bloom_f * bloom_strength, 0.0, 1.0)
    
    # 7. Subtle Optical Vignette
    # Smooth radial falloff from center to corners (vignette_min at corners)
    Y, X = np.ogrid[:target_h, :target_w]
    center_y, center_x = target_h / 2.0, target_w / 2.0
    dist_from_center = np.sqrt(((X - center_x) / center_x) ** 2 + ((Y - center_y) / center_y) ** 2)
    vignette = 1.0 - (1.0 - vignette_min) * (dist_from_center / np.sqrt(2)) ** 2
    vignette = np.clip(vignette, vignette_min, 1.0)[:, :, None]
    img_f = img_f * vignette
    
    # 8. Multi-Scale Unsharp Masking for Architectural & Fabric Crispness
    img_u8 = (img_f * 255.0).astype(np.uint8)
    fine_blur = cv2.GaussianBlur(img_u8, (0, 0), sigmaX=1.2)
    sharpened = cv2.addWeighted(img_u8, 1.35, fine_blur, -0.35, 0)
    
    # Structural clarity (broad unsharp)
    broad_blur = cv2.GaussianBlur(sharpened, (0, 0), sigmaX=15.0)
    clarity = cv2.addWeighted(sharpened, 1.15, broad_blur, -0.15, 0)
    clarity = np.clip(clarity, 0, 255).astype(np.uint8)
    
    return clarity, target_w, target_h

print("Running Cinematic Luxury Hospitality Photographic Grading...")

for task in tasks:
    src_path = task["src"]
    if not os.path.exists(src_path):
        print(f"Skipping missing: {src_path}")
        continue
        
    stem = task["stem"]
    target_w = task["target_w"]
    
    img_bgr = cv2.imread(src_path)
    if img_bgr is None:
        pil_im = Image.open(src_path).convert("RGB")
        img_bgr = cv2.cvtColor(np.array(pil_im), cv2.COLOR_RGB2BGR)
        
    graded_bgr, hd_w, hd_h = apply_cinematic_hospitality_grade(
        img_bgr,
        target_w=target_w,
        warmth=task["warmth"],
        contrast=task["contrast"],
        bloom_strength=task["bloom_strength"],
        vignette_min=task["vignette"]
    )
    
    graded_rgb = cv2.cvtColor(graded_bgr, cv2.COLOR_BGR2RGB)
    pil_master = Image.fromarray(graded_rgb)
    
    # Save to both public/images and dist/images
    for target_dir in [output_dir, dist_dir]:
        # 1. Master 2K / Full HD
        pil_master.save(os.path.join(target_dir, f"{stem}.webp"), "WEBP", quality=95, method=6)
        pil_master.save(os.path.join(target_dir, f"{stem}.jpg"), "JPEG", quality=95, optimize=True)
        
        # 2. Desktop 1280px
        std_w = min(1280, hd_w)
        std_h = int(hd_h * (std_w / hd_w))
        pil_std = pil_master.resize((std_w, std_h), Image.Resampling.LANCZOS)
        pil_std.save(os.path.join(target_dir, f"{stem}-1280.webp"), "WEBP", quality=93, method=6)
        pil_std.save(os.path.join(target_dir, f"{stem}-1280.jpg"), "JPEG", quality=93, optimize=True)
        
        # 3. Tablet 1024px
        tab_w = min(1024, hd_w)
        tab_h = int(hd_h * (tab_w / hd_w))
        pil_tab = pil_master.resize((tab_w, tab_h), Image.Resampling.LANCZOS)
        pil_tab.save(os.path.join(target_dir, f"{stem}-1024.webp"), "WEBP", quality=91, method=6)
        pil_tab.save(os.path.join(target_dir, f"{stem}-1024.jpg"), "JPEG", quality=91, optimize=True)
        
        # 4. Mobile 768px
        mob_w = min(768, hd_w)
        mob_h = int(hd_h * (mob_w / hd_w))
        pil_mob = pil_master.resize((mob_w, mob_h), Image.Resampling.LANCZOS)
        pil_mob.save(os.path.join(target_dir, f"{stem}-mobile.webp"), "WEBP", quality=89, method=6)
        pil_mob.save(os.path.join(target_dir, f"{stem}-mobile.jpg"), "JPEG", quality=89, optimize=True)
        
        # 5. Square Thumbnail 500x500
        thumb_size = 500
        w_orig, h_orig = pil_master.size
        min_edge = min(w_orig, h_orig)
        left = (w_orig - min_edge) // 2
        top = (h_orig - min_edge) // 2
        pil_cropped = pil_master.crop((left, top, left + min_edge, top + min_edge))
        pil_thumb = pil_cropped.resize((thumb_size, thumb_size), Image.Resampling.LANCZOS)
        pil_thumb.save(os.path.join(target_dir, f"{stem}-thumb.webp"), "WEBP", quality=89, method=6)
        pil_thumb.save(os.path.join(target_dir, f"{stem}-thumb.jpg"), "JPEG", quality=89, optimize=True)
        
    print(f"Cinematically Graded {stem}: {hd_w}x{hd_h}")

print("Cinematic Luxury Grading Complete for all 10 authentic venue assets.")
