import React, {ReactNode} from 'react';
import {Modal, StyleSheet, TouchableOpacity, View} from 'react-native';

type CommomModalProps = {
  onCloseModal: () => void;
  modalVisible: boolean;
  children: ReactNode;
};

const CommonModal = ({
  modalVisible,
  children,
  onCloseModal,
}: CommomModalProps) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={onCloseModal}
        statusBarTranslucent={true}>
        <TouchableOpacity style={styles.centeredView} onPressOut={onCloseModal}>
          {children}
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 0,
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    width: '100%',
    height: '60%',
    paddingHorizontal: 25,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    textAlign: 'center',
  },
  textDescription: {
    color: '#414141',
    textAlign: 'left',
    justifyContent: 'flex-start',
    width: '100%',
    paddingVertical: 10,
  },
  modalTitle: {
    fontWeight: '900',
    fontFamily: 'Satoshi',
    textAlign: 'center',
    color: 'black',
    width: '100%',
    fontSize: 18,
    padding: 10,
  },
});

export default CommonModal;
