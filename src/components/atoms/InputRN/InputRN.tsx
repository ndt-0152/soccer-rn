import React from 'react';
import {TextInput, TextInputProps} from 'react-native';

export interface IInputRN extends TextInputProps {}

const InputRN: React.FC<IInputRN> = ({...props}) => {
  return <TextInput {...props} />;
};

export default React.memo(InputRN);
