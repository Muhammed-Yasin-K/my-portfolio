import os
import sys

try:
    from rembg import remove
    from PIL import Image
except ImportError:
    print("rembg or Pillow not installed. Installing...")
    os.system(f"{sys.executable} -m pip install \"rembg[cpu]\" pillow --quiet")
    from rembg import remove
    from PIL import Image

input_path = "public/avatar.jpg"
output_path = "public/avatar_nobg.png"

print("Processing image...")
input_image = Image.open(input_path)
output_image = remove(input_image)
output_image.save(output_path)
print("Background removed successfully.")
