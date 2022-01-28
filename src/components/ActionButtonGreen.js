/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
// import {useNavigation} from '@react-navigation/native';

const ActionButtonGreen = ({buttonName,action}) => {
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
    backgroundColor: "#37bc84",
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
export default ActionButtonGreen;
