import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image, KeyboardAvoidingView} from 'react-native';
import {FormControl, Input, Stack} from 'native-base';
import ActionButton from '../components/ActionButton';
import ActionButtonGreen from '../components/ActionButtonGreen';

class LoginByMedicalNum extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <KeyboardAvoidingView style= {styles.parent}>
        <View style= {styles.boxtitle}>
          <View style={styles.logoBox}>
            <Image
            style={styles.iconBox}
            source={require('../assets/images/logo.png')}
              />
          </View>
            <FormControl style={styles.boxForm}>
            <Stack mt={6} space={6} w="80%">
            <Input
                style={styles.button2}
                w="100%"
                p={3}
                size="xl"
                placeholder="Medical Number"
                placeholderTextColor="#0583D2"
                color="#0583D2"
                variant="underlined"
                keyboardType="numeric"
                onChangeText={value=> this.setState({pin: value})}
                // value={this.state.email}
                // onChangeText={value=>this.setState({email:value})}
            />
            </Stack>
            <View style={styles.button}>
            <ActionButton buttonName='Login'/>
            </View>
            </FormControl>
        </View>
        <View style= {styles.backBox}/>
        <View style= {styles.boxButton}>
        <View style={styles.button2}>
            <ActionButton buttonName='Login by Email' action={()=> this.props.navigation.navigate('loginEmail')}/>
            </View>
            <View style={styles.button3}>
            <ActionButtonGreen buttonName='Create Account' action={()=> this.props.navigation.navigate('signUp')} />
            </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    backgroundColor: 'white',
    flex: 1,
  },
  logoBox: {
    width: "100%",
    height: 180,
    justifyContent: 'center',
    alignItems: "center",
    // backgroundColor: "yellow",
    marginTop: 40,
  },
  iconBox: {
      width: 220,
      height: 220,
  },
  boxForm: {
    alignItems: 'center',
    // backgroundColor: "yellow",
    marginTop: 30,
    height: "40%"
  },
  title: {
    color: 'white',
    fontWeight: '300',
    fontSize: 40,
    marginBottom: 20,
  },
  boxAgree: {
      width: 250,
      fontSize: 16,
      marginTop: 30,
    },
  title2: {
      color: '#694e99',
      fontWeight: '300',
      width: 250,
      fontSize: 14,
    },
  buttonTitle: {
    color: '#694e99',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 130,
  },
  boxtitle : {
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: "65%",
    borderBottomLeftRadius: 100,
    zIndex: 20,
  },
  backBox : {
    zIndex: -4,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0583D2',
    height: 400,
    width: 200,
    marginTop: -300,
  },
  boxButton: {
    zIndex: -1,
    alignItems: 'center',
    backgroundColor: '#0583D2',
    height: 450,
    borderTopRightRadius: 100,
    marginTop: -100,
    paddingTop: 100,
  },
  button: {
    width: "100%",
    // backgroundColor: 'blue',
    height: 60,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: "center",
    paddingHorizontal: 35
  },
  button2: {
    width: "100%",
    // backgroundColor: 'blue',
    height: 60,
    justifyContent: 'center',
    alignItems: "center",
    paddingHorizontal: 35,
    marginBottom: 10,
  },
  button3: {
    width: "100%",
    // backgroundColor: 'blue',
    height: 40,
    justifyContent: 'center',
    alignItems: "center",
    paddingHorizontal: 110,
    marginBottom: 20,
  },
});

export default LoginByMedicalNum;
