export const getCroppedImg = (imageSrc, croppedAreaPixels) => {
  const createImage = (url) =>
    new Promise((resolve, reject) => {
      const image = new Image();
      image.src = url;
      image.onload = () => resolve(image);
      image.onerror = (error) => reject(error);
    });

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  return createImage(imageSrc).then((image) => {
    const { width, height } = croppedAreaPixels;
    canvas.width = width;
    canvas.height = height;

    ctx.drawImage(
      image,
      croppedAreaPixels.x,
      croppedAreaPixels.y,
      croppedAreaPixels.width,
      croppedAreaPixels.height,
      0,
      0,
      width,
      height
    );

    return new Promise((resolve) => {
      canvas.toBlob((blob) => {
        const fileUrl = URL.createObjectURL(blob);
        resolve(fileUrl);
      }, "image/jpeg");
    });
  });
};
