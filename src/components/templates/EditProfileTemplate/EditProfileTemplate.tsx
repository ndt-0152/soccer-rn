import React from 'react';
import {Platform, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {ImageRN, InputRN, TextRN, ViewRN} from '../../atoms';

const IMAGE = 100;

export const EditProfile = React.memo(() => {
  return (
    <ScrollView style={styles.container}>
      <ViewRN style={styles.header}>
        <ImageRN
          source={{
            uri: 'https://assets.materialup.com/uploads/d7b3d0b4-f6a7-44b6-be7e-988fba7069a6/preview.png',
          }}
          style={styles.avatar}
        />
        <ViewRN style={styles.padding10}>
          <TextRN style={styles.name}>NDT</TextRN>
        </ViewRN>
      </ViewRN>
      <ViewRN style={styles.action}>
        <FontAwesome name="user-o" size={16} />
        <InputRN
          placeholder="Your Name"
          placeholderTextColor="#666666"
          autoCorrect={false}
          style={styles.textInput}
        />
      </ViewRN>
      <ViewRN style={styles.action}>
        <Feather name="phone" size={16} />
        <InputRN
          placeholder="Phone"
          placeholderTextColor="#666666"
          keyboardType="number-pad"
          autoCorrect={false}
          style={styles.textInput}
        />
      </ViewRN>
      <ViewRN style={styles.action}>
        <FontAwesome name="envelope-o" size={16} />
        <InputRN
          placeholder="Email"
          placeholderTextColor="#666666"
          keyboardType="email-address"
          autoCorrect={false}
          style={styles.textInput}
        />
      </ViewRN>
      <ViewRN style={styles.action}>
        <FontAwesome name="globe" size={16} />
        <InputRN
          placeholder="Country"
          placeholderTextColor="#666666"
          autoCorrect={false}
          style={styles.textInput}
        />
      </ViewRN>
      <ViewRN style={styles.action}>
        <Icon name="map-marker-outline" size={16} />
        <InputRN
          placeholder="City"
          placeholderTextColor="#666666"
          autoCorrect={false}
          style={styles.textInput}
        />
      </ViewRN>
      <TouchableOpacity
        style={styles.commandButton}
        onPress={() => {
          console.log('ss');
        }}>
        <TextRN style={styles.panelButtonTitle}>Submit</TextRN>
      </TouchableOpacity>
    </ScrollView>
  );
});

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: 'white',
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginTop: 10,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
  },
  avatar: {
    width: IMAGE,
    height: IMAGE,
    borderRadius: 15,
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  padding10: {
    paddingVertical: 10,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -15,
    paddingLeft: 10,
    color: '#05375a',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
});

export default EditProfile;
