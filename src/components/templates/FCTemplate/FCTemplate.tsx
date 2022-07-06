import React from 'react';
import {StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ImageRN, ViewRN} from '../../atoms';

export const FCTemplate = React.memo(() => {
  return (
    <ViewRN style={styles.container}>
      <ViewRN style={styles.floatBtn}>
        <TouchableOpacity onPress={() => {}}>
          <ImageRN
            style={styles.images}
            source={require('../../../../public/soccer.png')}
          />
        </TouchableOpacity>
      </ViewRN>
    </ViewRN>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  images: {
    width: 60,
    height: 60,
    borderRadius: 60,
  },
  floatBtn: {
    flex: 1,
    position: 'absolute',
    bottom: 30,
    right: 20,
  },
});

export default FCTemplate;
