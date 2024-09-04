import cv2
import numpy as np

# Load the image
image = cv2.imread('./resimler/hakkında.jpg.jpg')

# Check if image is loaded successfully
if image is None:
    print("Error: Could not load image.")
    exit()

# Create a darkening effect by multiplying the image with a value less than 1
# The value should be between 0 and 1, where 0 makes the image completely black, and 1 has no effect.
darkened_image = image * 0.3  # 0.3 is just an example; adjust to your preference

# Convert the float values back to unsigned 8-bit integer
darkened_image = darkened_image.astype(np.uint8)

# Display the original and darkened image
cv2.imshow('Original Image', image)
cv2.imshow('Darkened Image', darkened_image)

# Wait for a key press and close the image windows
cv2.waitKey(0)
cv2.destroyAllWindows()
