# [ADDED] Check non-image files or metadata in zip
import zipfile

zip_path = r'hriday banquet - Google Search/hriday banquet - Google Search.zip'
with zipfile.ZipFile(zip_path, 'r') as zf:
    for name in zf.namelist():
        if any(name.endswith(ext) for ext in ['.html', '.htm', '.json', '.txt', '.csv', '.xml']):
            print("Found non-image:", name)
