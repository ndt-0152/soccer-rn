import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {LIST_DATA} from './mockData';
import {ViewRN} from '../../atoms';
import {ItemRN} from '../../organisms';
import {ModalRN} from '../../molecules';

export const HomeTemplate: React.FC = React.memo(() => {
  const navigation = useNavigation<any>();
  const [modalVisible, setModalVisible] = useState(false);

  const renderItem = ({item}: any) => {
    return (
      <ItemRN
        {...item}
        onPress={handleClickItems(item.id)}
        onLongPress={handleOnLongPress}
      />
    );
  };

  const handleClickItems = (id: string) => {
    navigation.navigate('Details', {id});
  };

  const handleOnLongPress = () => {
    setModalVisible(!modalVisible);
  };

  const handleClickDelete = () => {
    setModalVisible(!modalVisible);
  };

  const handleClickCancel = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <ViewRN style={styles.container}>
      <FlatList
        data={LIST_DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <ModalRN
        modalVisible={modalVisible}
        handleClick={handleClickDelete}
        handleCancel={handleClickCancel}
      />
    </ViewRN>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
});

export default HomeTemplate;
