import React from 'react';
import {StyleSheet} from 'react-native';
import {ViewRN} from '../../atoms';
// import {CardRN} from '../../organisms';

export const ClubTemplate = React.memo(() => {
  return <ViewRN style={styles.container}>{/* <CardRN /> */}</ViewRN>;
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
});

export default ClubTemplate;
