import React from 'react';
import {Image, ImageProps} from 'react-native';

export interface IImageRN extends ImageProps {}

const ImageRN: React.FC<IImageRN> = ({...props}) => {
  return <Image {...props} />;
};

export default React.memo(ImageRN);
