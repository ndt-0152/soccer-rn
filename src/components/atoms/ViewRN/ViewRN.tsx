import React from 'react';
import {View, ViewProps} from 'react-native';

export interface IViewRN extends ViewProps {}

const ViewRN: React.FC<IViewRN> = ({...props}) => {
  return <View {...props} />;
};

export default React.memo(ViewRN);
