/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import FAIcon from 'react-native-vector-icons/FontAwesome';

export default function HeadersHome({navigation, route}) {
  console.log(route.name);
  return (
        <ScrollView >
          {route.name === 'home' ?
          <View style={headerStyle.parent}>
            <TouchableOpacity onPress={()=> navigation.toggleDrawer()}>
            <Icon name="menu" size={32} color={'white'}/>
            </TouchableOpacity>
          <View style={headerStyle.leftside}>
            <TouchableOpacity onPress={()=> navigation.navigate('profile')}>
              <FAIcon name="user-circle" color={'white'} size={32} />
            </TouchableOpacity>
          </View>
          </View>
          : null }
        </ScrollView >
  );
}

const headerStyle = StyleSheet.create({
  parent: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 25,
    marginRight: 25,
    marginTop: 15,
  },
  leftside: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: 85,
    // backgroundColor: 'yellow'
  },
});

