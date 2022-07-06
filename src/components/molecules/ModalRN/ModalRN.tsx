import React from 'react';
import {Modal, Pressable, StyleSheet} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import {TextRN, ViewRN} from '../../atoms';

export interface IModalRN {
  modalVisible?: boolean;
  handleClick?: () => void;
  handleCancel?: () => void;
}

export const ModalRN: React.FC<IModalRN> = React.memo(
  ({modalVisible = false, handleClick, handleCancel}) => {
    const progress = useSharedValue(0);

    const reanimatedStyles = useAnimatedStyle(() => {
      return {
        transform: [{translateX: progress.value * 255}],
      };
    });

    return (
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <Animated.View style={[styles.container, reanimatedStyles]}>
          <ViewRN style={styles.modalView}>
            <TextRN style={styles.modalText}>
              Do you wanna delete at position 2?
            </TextRN>
            <ViewRN style={styles.action}>
              <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => {
                  progress.value = withSequence(
                    withTiming(0.25, {duration: 1000}),
                    withTiming(-0.25, {duration: 1000}),
                    withTiming(0, {duration: 1000}),
                  );
                  setTimeout(() => {
                    handleCancel?.();
                  }, 3000);
                }}>
                <TextRN style={styles.textStyle}>Cancel</TextRN>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  progress.value = withSequence(
                    withTiming(0.25, {duration: 1000}),
                    withTiming(-0.25, {duration: 1000}),
                    withTiming(0, {duration: 1000}),
                  );
                  setTimeout(() => {
                    handleClick?.();
                  }, 3000);
                }}>
                <TextRN style={styles.textStyle}>Delete</TextRN>
              </Pressable>
            </ViewRN>
          </ViewRN>
        </Animated.View>
      </Modal>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  action: {
    display: 'flex',
    flexDirection: 'row',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default ModalRN;
