import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {InputRN} from '../components/atoms';

const DetailsScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>DetailsScreen</Text>
      <ScrollView>
        <SafeAreaView>
          <InputRN style={styles.input} placeholder="home" value="" />
          <InputRN style={styles.input} placeholder="away" />
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {backgroundColor: 'white'},
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
});

export default DetailsScreen;
