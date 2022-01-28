/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
// import {useNavigation} from '@react-navigation/native';

const ActionButton = ({buttonName,action}) => {
    return (
      <TouchableOpacity onPress={action} style={styles.button}>
      <Text style={styles.buttonText}>{buttonName}</Text>
      </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: "100%",
    backgroundColor: "#0583D2",
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',

  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
export default ActionButton;
