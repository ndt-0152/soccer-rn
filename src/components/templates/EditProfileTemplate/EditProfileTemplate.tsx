import React from 'react';
import {Platform, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import BottomSheet from 'reanimated-bottom-sheet';
import {ImageRN, InputRN, TextRN, ViewRN} from '../../atoms';

const IMAGE = 100;

export const EditProfile = React.memo(() => {
  const bs = React.createRef<any>();

  const renderInner = () => (
    <ViewRN style={styles.panel}>
      <ViewRN style={{alignItems: 'center'}}>
        <TextRN style={styles.panelTitle}>Upload Photo</TextRN>
        <TextRN style={styles.panelSubtitle}>
          Choose Your Profile Picture
        </TextRN>
      </ViewRN>
      <TouchableOpacity style={styles.panelButton}>
        <TextRN style={styles.panelButtonTitle}>Take Photo</TextRN>
      </TouchableOpacity>
      <TouchableOpacity style={styles.panelButton}>
        <TextRN style={styles.panelButtonTitle}>Choose From Library</TextRN>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={() => bs.current.snapTo(1)}>
        <TextRN style={styles.panelButtonTitle}>Cancel</TextRN>
      </TouchableOpacity>
    </ViewRN>
  );

  const renderHeader = () => (
    <ViewRN style={styles.header}>
      <ViewRN style={styles.panelHeader}>
        <ViewRN style={styles.panelHandle} />
      </ViewRN>
    </ViewRN>
  );

  return (
    <ViewRN style={styles.container}>
      <BottomSheet
        ref={bs}
        snapPoints={[330, 0]}
        renderContent={renderInner}
        renderHeader={renderHeader}
        initialSnap={1}
        enabledGestureInteraction={true}
      />
      <ViewRN style={styles.body}>
        <ViewRN style={styles.header}>
          <TouchableOpacity onPress={() => bs.current.snapTo(0)}>
            <ImageRN
              source={{
                uri: 'https://assets.materialup.com/uploads/d7b3d0b4-f6a7-44b6-be7e-988fba7069a6/preview.png',
              }}
              style={styles.avatar}
            />
          </TouchableOpacity>
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
        <TouchableOpacity style={styles.commandButton}>
          <TextRN style={styles.panelButtonTitle}>Submit</TextRN>
        </TouchableOpacity>
      </ViewRN>
    </ViewRN>
  );
});

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    backgroundColor: 'white',
    flex: 1,
  },
  body: {
    paddingHorizontal: 15,
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
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginVertical: 7,
  },
});

export default EditProfile;
