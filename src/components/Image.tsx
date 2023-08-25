import React from "react";
import { URL } from "../hooks/urls";

interface ImageProps {
  src?: string;
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
  original?: boolean;
}

const Image: React.FC<ImageProps> = ({ src, alt, className, style, original }) => {
  const ImgUrl = original ? `${URL.full_image}${src}` : `${URL.thumbnail_image}${src}`;

  return <img src={ImgUrl} alt={alt} className={`image-container ${original ? "full" : ""}`} style={style} />;
};

export default Image;
