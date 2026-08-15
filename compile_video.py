import cv2
import glob
import os

img_array = []
frames = []

# Fetch the images in sorted order based on the frame number (001 to 240)
for filename in glob.glob('c:/Users/vaish/Downloads/New-folder-main/New-folder-main/src/assets/hero-video/ezgif-frame-*.jpg'):
    frames.append(filename)

frames.sort()

for filename in frames:
    img = cv2.imread(filename)
    if img is not None:
        height, width, layers = img.shape
        size = (width,height)
        img_array.append(img)
    else:
        print("Could not read:", filename)

if img_array:
    out = cv2.VideoWriter('c:/Users/vaish/Downloads/New-folder-main/New-folder-main/src/assets/hero-video/original_animation.mp4',cv2.VideoWriter_fourcc(*'mp4v'), 30, size)
    
    for i in range(len(img_array)):
        out.write(img_array[i])
    out.release()
    print("Video saved to src/assets/hero-video/original_animation.mp4")
else:
    print("No images found to compile.")
