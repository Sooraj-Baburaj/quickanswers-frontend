import Image from "next/image";
import React from "react";

const Images = ({
  src,
  quality,
  priority = false,
  aspectRatio,
  size = "100vw",
  className,
  ...props
}) => {
  return (
    <div
      className={`w-full relative ${className}`}
      style={{ aspectRatio: aspectRatio }}
    >
      <Image
        src={src}
        quality={quality}
        priority={priority}
        fill
        objectFit="cover"
        {...props}
      />
    </div>
  );
};

export default Images;
