/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Headers({navigation, route}) {
  // console.log(route.name);
  return (
        <View style={headerStyle.parent}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={headerStyle.TitleBar}>
            <Icon name="chevron-back" color="white" size={25} />
            <Text style={headerStyle.TitleBar2}>{route.name.toUpperCase()}</Text>
          </TouchableOpacity>
        </View>
  );
}

const headerStyle = StyleSheet.create({
  parent: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 25,
    marginTop: 10,
  },
  TitleBar: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 28,
    flexDirection: 'row',
  },
  TitleBar2: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    flexDirection: 'row',
    marginLeft: 10,
  },
});

