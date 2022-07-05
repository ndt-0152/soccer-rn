import React from 'react';
import {Text, TextProps} from 'react-native';

export interface ITextField extends TextProps {}

const TextField: React.FC<ITextField> = ({...props}) => {
  return <Text {...props} />;
};

export default React.memo(TextField);
