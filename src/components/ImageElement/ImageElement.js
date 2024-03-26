import React from "react";
import { placeLocation } from "../../_const";

const ImageElement = ({ width, image, alt }) => {
  return <img width="100%" src={image} alt={alt} />;
};

export default ImageElement;
