import Image from "next/image";
import React from "react";

const Images = ({
  src,
  quality,
  priority = false,
  aspectRatio,
  size = "100vw",
  classNames,
  ...reset
}) => {
  return (
    <div
      className={`w-full relative ${classNames}`}
      style={{ aspectRatio: aspectRatio }}
    >
      <Image
        src={src}
        quality={quality}
        priority={priority}
        fill
        objectFit="cover"
        {...reset}
      />
    </div>
  );
};

export default Images;
