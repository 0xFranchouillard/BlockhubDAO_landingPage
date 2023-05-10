from PIL import Image
def png_to_jpg(imagefrom, to):
    with Image.open(imagefrom) as img:
        new_img = Image.new('RGB', img.size, color='#060606')
        new_img.paste(img, mask=img.split()[3])
        new_img.save(to, 'JPEG')

png_to_jpg('public/PepeSilver.png', 'public/PepeSilver.jpg')
png_to_jpg('public/PepePurple.png', 'public/PepePurple.jpg')
if __name__ == '__main__':
    pass