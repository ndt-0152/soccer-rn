import React from 'react';
import {StyleSheet} from 'react-native';
import {ImageRN, TextRN, ViewRN} from '../../atoms';

export interface IItemClub {
  size?: number;
  uri: string;
  name: string;
}

const ItemClub: React.FC<IItemClub> = ({size = 50, uri, name}) => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    imageSize: {
      width: size,
      height: size,
    },
    text: {
      color: 'coral',
      fontWeight: 'bold',
    },
  });
  return (
    <ViewRN style={styles.container}>
      <ImageRN
        style={styles.imageSize}
        source={{
          uri,
        }}
      />
      <TextRN style={styles.text}>{name}</TextRN>
    </ViewRN>
  );
};

export default React.memo(ItemClub);
