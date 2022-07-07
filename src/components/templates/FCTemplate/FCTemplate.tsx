import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {Chip, FAB, Portal, Provider, Searchbar} from 'react-native-paper';
import {ViewRN} from '../../atoms';
import {CardRN} from '../../organisms';
import {LIST_CHIP, LIST_CLUB} from './mockData';

export const FCTemplate = React.memo(() => {
  const [state, setState] = React.useState({open: false});
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query: any) => setSearchQuery(query);
  const navigation = useNavigation();

  const onStateChange = ({open}: any) => setState({open});

  const renderItem = ({item}: any) => {
    return (
      <ViewRN style={styles.itemCard}>
        <CardRN {...item} />
      </ViewRN>
    );
  };

  const {open} = state;
  return (
    <ViewRN style={styles.container}>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.itemCard}
      />
      <ViewRN style={styles.chipStyles}>
        {LIST_CHIP.map(item => {
          return (
            <Chip
              onPress={() => console.log('Pressed')}
              style={[styles.itemCard, {marginRight: 10}]}>
              {item}
            </Chip>
          );
        })}
      </ViewRN>

      <FlatList
        keyExtractor={item => item.id}
        data={LIST_CLUB}
        renderItem={renderItem}
      />
      <Provider>
        <Portal>
          <FAB.Group
            visible
            open={open}
            icon={open ? 'calendar-today' : 'plus'}
            actions={[
              {
                icon: 'plus',
                onPress: () => navigation.navigate('Club' as never),
              },
              {
                icon: 'star',
                label: 'Star',
                onPress: () => console.log('Pressed star'),
              },
              {
                icon: 'email',
                label: 'Email',
                onPress: () => console.log('Pressed email'),
              },
              {
                icon: 'bell',
                label: 'Remind',
                onPress: () => console.log('Pressed notifications'),
              },
            ]}
            onStateChange={onStateChange}
            onPress={() => {
              if (open) {
                // do something if the speed dial is open
              }
            }}
          />
        </Portal>
      </Provider>
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
  itemCard: {
    marginBottom: 20,
  },
  chipStyles: {
    display: 'flex',
    flexDirection: 'row',
  },
});

export default FCTemplate;
