import React, { Component } from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import { NativeBaseProvider, Box } from "native-base";
import {Input, FormControl, Stack} from "native-base"

import ActionButton from '../components/ActionButton';
import ActionButtonGreen  from '../components/ActionButtonGreen'
import { TouchableOpacity } from 'react-native-gesture-handler';

class LoginByEmail extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <NativeBaseProvider>
        <View style={styles.parent}>
        <View style={styles.logoBox}>
            <Image
            style={styles.iconBox}
            source={require('../assets/images/logo.png')}
            />
        </View>
        <View style={styles.formBox}>
          <FormControl style={styles.boxForm}>
                <Text style={styles.textlogin}>Login</Text>
                <Stack mt={6} space={6} w="100%">
                  <Input
                      style={styles.input}
                      w="100%"
                      p={3}
                      size="lg"
                      placeholder="Email"
                      placeholderTextColor="#0583D2"
                      color="#0583D2"
                      variant="underlined"
                      onChangeText={(value)=> this.setState({email: value})}
                      // value={this.state.email}
                      // onChangeText={value=>this.setState({email:value})}
                  />
                  <Input
                      style={styles.input}
                      w="100%"
                      p={3}
                      size="lg"
                      placeholder="Password"
                      placeholderTextColor="#0583D2"
                      color="#0583D2"
                      type={false ? 'text' : 'password'}
                      variant="underlined"
                      // onChangeText={(value)=> this.setState({pin: value})}
                      // value={this.state.email}
                      // onChangeText={value=>this.setState({email:value})}
                  />
                </Stack>
            <View style={styles.button2}>
            <Text style={styles.textsub}>Do you have Medical Record Number ?</Text>
            <TouchableOpacity style={styles.click} onPress={()=> this.props.navigation.navigate('loginMedicalNum')}>
              <Text style={styles.textsub2}>Click here to login</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.button}>
            <ActionButton buttonName='Login'/>
            </View>
            <View style={styles.button3}>
            <ActionButtonGreen buttonName='Create Account' action={()=> this.props.navigation.navigate('signUp')} />
            </View>
          </FormControl>
        </View>
        
      </View>
      </NativeBaseProvider>
    );
  }
}

const styles = StyleSheet.create({
    parent: {
        flex : 1,
        backgroundColor: 'white'
        // backgroundColor: "#0583D2"
    },
    logoBox: {
        width: "100%",
        height: 180,
        justifyContent: 'center',
        alignItems: "center",
        marginTop: 40,
        // backgroundColor: "yellow"
    },
    iconBox: {
        width: 220,
        height: 220,
    },
    formBox: {
        // backgroundColor: 'blue',
        width: "100%",
        height: "60%",
        paddingHorizontal: "5%"
    },
    input: {
      fontSize: 20,
      marginTop: 30
    },
    boxForm: {
      // backgroundColor: "yellow",
      height: "100%"
    },
    textlogin: {
      fontSize: 40,
      fontWeight: '900',
      marginTop: 30,
      color: "#0583D2"
    },
    button: {
      width: "100%",
      // backgroundColor: 'blue',
      height: 60,
      marginTop: 30,
      justifyContent: 'center',
      alignItems: "center"
    },
    button2: {
      width: "100%",
      // backgroundColor: 'blue',
      height: 40,
      marginLeft: 10,
      display: "flex",
      flexDirection: "row"
    },
    button3: {
      width: "100%",
      // backgroundColor: 'blue',
      height: 60,
      marginTop: 30,
      justifyContent: 'center',
      alignItems: "center",
      // paddingHorizontal: 20,
    },
    textsub: {
      fontSize: 12,
      fontWeight: '500',
      marginTop: 20,
      color: "grey"
    },
    textsub2: {
      fontSize: 12,
      fontWeight: '500',
      color: "blue"
    },
    click: {
      height: 60,
      alignItems: "center",
      paddingTop: 20,
      marginLeft: 5,
    },
})
export default LoginByEmail;

