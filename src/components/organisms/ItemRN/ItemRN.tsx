import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {TextRN, ViewRN} from '../../atoms';
import {ItemClub} from '../../molecules';

export interface IItemRN {
  uriHome: string;
  uriAway: string;
  nameHome: string;
  nameAway: string;
  calendar: string;
  onPress?: () => void;
  onLongPress?: () => void;
}

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: 'lightblue',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dashed: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  description: {
    justifyContent: 'center',
    flexDirection: 'row',
    paddingTop: 5,
  },
  takePlace: {
    fontWeight: 'bold',
  },
});

const ItemRN: React.FC<IItemRN> = ({
  uriAway,
  uriHome,
  nameAway,
  nameHome,
  calendar,
  onPress,
  onLongPress,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onPress}
      onLongPress={onLongPress}>
      <ViewRN style={styles.scroll}>
        <ViewRN style={styles.container}>
          <ItemClub uri={uriHome} name={nameHome} />
          <TextRN style={styles.dashed}>vs</TextRN>
          <ItemClub uri={uriAway} name={nameAway} />
        </ViewRN>
        <ViewRN style={styles.description}>
          <TextRN style={styles.takePlace}>
            This match will take place at {calendar}
          </TextRN>
        </ViewRN>
      </ViewRN>
    </TouchableOpacity>
  );
};

export default React.memo(ItemRN);
