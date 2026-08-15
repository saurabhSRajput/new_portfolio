import cv2
import os

video_path = 'c:/Users/vaish/Downloads/New-folder-main/New-folder-main/src/assets/hero-video/swap_animation.mp4'
output_dir = 'c:/Users/vaish/Downloads/New-folder-main/New-folder-main/src/assets/hero-video/'

cap = cv2.VideoCapture(video_path)

if not cap.isOpened():
    print("Error opening video stream or file")

frame_count = 1
while(cap.isOpened()):
    ret, frame = cap.read()
    if ret == True:
        # Format the frame number with leading zeros (e.g., 001, 002... 240)
        filename = f'ezgif-frame-{frame_count:03d}.jpg'
        out_path = os.path.join(output_dir, filename)
        
        cv2.imwrite(out_path, frame)
        frame_count += 1
        
        # Stop at 240 just in case the video is longer
        if frame_count > 240:
            break
    else:
        break

cap.release()
print(f"Successfully extracted {frame_count - 1} frames.")
