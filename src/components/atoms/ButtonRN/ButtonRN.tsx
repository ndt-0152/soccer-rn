import React from 'react';
import {Button, ButtonProps} from 'react-native';

export interface IButtonRN extends ButtonProps {}

const ButtonRN: React.FC<IButtonRN> = ({...props}) => {
  return <Button {...props} />;
};

export default React.memo(ButtonRN);
