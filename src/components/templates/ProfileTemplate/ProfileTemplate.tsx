import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ImageRN, TextRN, ViewRN} from '../../atoms';

const IMAGE = 100;

export const ProfileTemplate: React.FC = React.memo(() => {
  return (
    <ScrollView style={styles.container}>
      <ViewRN style={styles.header}>
        <ImageRN
          source={{
            uri: 'https://previews.123rf.com/images/yupiramos/yupiramos1610/yupiramos161005146/63681963-avatar-man-smiling-wearing-sunglasses-and-travel-suitcases-over-white-background-vector-illustration.jpg',
          }}
          style={styles.avatar}
        />
        <ViewRN style={styles.leftBox}>
          <TextRN style={styles.name}>NDT</TextRN>
          <TextRN style={styles.desName}>@ndt0152</TextRN>
        </ViewRN>
      </ViewRN>
      <ViewRN style={styles.subDes}>
        <Icon name="place" size={16} />
        <ViewRN style={styles.leftBox}>
          <TextRN style={styles.desName}>Manchester, London</TextRN>
        </ViewRN>
      </ViewRN>
      <ViewRN style={styles.subDes}>
        <Icon name="phone" size={16} />
        <ViewRN style={styles.leftBox}>
          <TextRN style={styles.desName}>0982259870</TextRN>
        </ViewRN>
      </ViewRN>
      <ViewRN style={styles.subDes}>
        <Icon name="email" size={16} />
        <ViewRN style={styles.leftBox}>
          <TextRN style={styles.desName}>ndt@gmail.com</TextRN>
        </ViewRN>
      </ViewRN>
      <ViewRN style={styles.statistic}>
        <TextRN style={styles.matches}>12</TextRN>
        <TextRN style={styles.desName}>Matches</TextRN>
      </ViewRN>
    </ScrollView>
  );
});

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: 'white',
  },
  avatar: {
    width: IMAGE,
    height: IMAGE,
    borderRadius: 100,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
  },
  matches: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
  },
  desName: {
    fontWeight: '400',
    color: '#757575',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
  },
  leftBox: {
    paddingLeft: 15,
    justifyContent: 'center',
  },
  subDes: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
  },
  statistic: {
    paddingVertical: 25,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'lightgrey',
  },
});

export default ProfileTemplate;
