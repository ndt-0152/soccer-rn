import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ScrollView, Text} from 'react-native';
import {ViewRN} from '../components/atoms';
import {ItemRN} from '../components/organisms';
import {LIST_DATA} from './mockData';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const handleClickItems = (id: string) => {
    navigation.navigate('Details', {id});
  };

  const handleOnLongPress = (id: string) => {
    console.log(id);
  };

  return (
    <ViewRN style={{padding: 20}}>
      <Text>HomeScreen</Text>
      <ScrollView>
        {LIST_DATA.map((item, idx) => {
          return (
            <ItemRN
              {...item}
              key={idx}
              onPress={() => {
                handleClickItems(item.id);
              }}
              onLongPress={() => {
                handleOnLongPress(item.id);
              }}
            />
          );
        })}
      </ScrollView>
    </ViewRN>
  );
};

export default HomeScreen;
