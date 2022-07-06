import React from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TextRN, ViewRN} from '../../atoms';
import {ItemClub} from '../../molecules';
// import DateTimePickerModal from 'react-native-modal-datetime-picker';

const IMAGE = 70;

export const SoccerDetailTemplate: React.FC = React.memo(() => {
  // const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  // const showDatePicker = () => {
  //   setDatePickerVisibility(true);
  // };

  // const hideDatePicker = () => {
  //   setDatePickerVisibility(false);
  // };

  // const handleConfirm = (date: any) => {
  //   console.log('A date has been picked: ', date);
  //   hideDatePicker();
  // };

  return (
    <ViewRN style={styles.container}>
      <ViewRN style={styles.body}>
        <ItemClub
          uri="https://upload.wikimedia.org/wikipedia/vi/thumb/a/a1/Man_Utd_FC_.svg/1200px-Man_Utd_FC_.svg.png"
          name="MU FC"
        />
        <ItemClub
          uri="https://upload.wikimedia.org/wikipedia/vi/thumb/0/0c/Liverpool_FC.svg/175px-Liverpool_FC.svg.png"
          name="Liverpool FC"
        />
      </ViewRN>
      <ViewRN style={styles.flexDirCus}>
        <Icon name="person" size={16} />
        <TextRN>
          This match takes place at:
          <TextRN style={styles.titleWord}>Old Trafford Stadium</TextRN>
        </TextRN>
      </ViewRN>
      <ViewRN style={styles.flexDirCus}>
        <Icon name="person" size={16} />
        <TextRN>
          The referee:
          <TextRN style={styles.titleWord}>Thomas Drew</TextRN>
        </TextRN>
      </ViewRN>
      <ViewRN style={styles.flexDirCus}>
        <Icon name="person" size={16} />
        <TextRN>
          The time begins:<TextRN style={styles.titleWord}>30-12-2022</TextRN>
        </TextRN>
      </ViewRN>
    </ViewRN>
  );
});

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    backgroundColor: 'white',
    flex: 1,
    paddingHorizontal: 20,
  },
  image: {
    width: IMAGE,
    height: IMAGE,
    borderRadius: 20,
  },
  body: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  flexDirCus: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  paddingRight10: {
    paddingRight: '10%',
  },
  paddingLeft10: {
    paddingLeft: '10%',
  },
  titleWord: {
    color: 'black',
    fontWeight: '500',
    fontSize: 16,
  },
});

export default SoccerDetailTemplate;
