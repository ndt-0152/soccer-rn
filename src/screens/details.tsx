import {useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
// import ImagePicker from 'react-native-image-crop-picker';
import {ButtonRN, InputRN} from '../components/atoms';

const DetailsScreen: React.FC = () => {
  const route = useRoute<any>();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const {id} = route.params;

  console.log(id);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: any) => {
    console.warn('A date has been picked: ', date);
    hideDatePicker();
  };

  const handleOnPress = () => {
    // ImagePicker.openPicker({
    //   width: 300,
    //   height: 400,
    //   cropping: true,
    // }).then(image => {
    //   console.log(image);
    // });
  };

  return (
    <View>
      <Text>DetailsScreen</Text>
      <ScrollView>
        <SafeAreaView>
          <InputRN style={styles.input} placeholder="home" value="" />
          <InputRN style={styles.input} placeholder="away" />
          <ButtonRN onPress={handleOnPress} title="Upload Source Home" />
          <ButtonRN title="Show Date Picker" onPress={showDatePicker} />
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
});

export default DetailsScreen;
