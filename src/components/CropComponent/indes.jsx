import { useEffect, useRef, useState } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { useFicha } from "../../context/ficha.context";
import { Button } from "./styles";

export const CropComponent = () => {
  const { imageBlob, setImageBlob } = useFicha();
  const cropperRef = useRef(null);
  const [croppedImg, setCroppedImg] = useState("");
  const onCrop = () => {
    const imageElement = cropperRef?.current;
    const cropper = imageElement?.cropper;
    setCroppedImg(cropper.getCroppedCanvas().toDataURL());
  };

  return (
    <>
      <Cropper
        src={imageBlob}
        style={{ height: '300px', width: "100%" }}
        initialAspectRatio={76 / 105}
        guides={false}
        crop={onCrop}
        ref={cropperRef}
        viewMode={1}
        // guides={true}
        minCropBoxHeight={10}
        minCropBoxWidth={10}
        // background={false}
        responsive={true}
        autoCropArea={1}
        aspectRatio={76 / 105}
        checkOrientation={false}
      />
      <Button onClick={() => setImageBlob(() => croppedImg)}>Cortar</Button>
    </>
  );
};
