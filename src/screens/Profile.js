import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image, Alert, ScrollView} from 'react-native';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import {FormControl, Input} from 'native-base';
import ActionButton from '../components/ActionButton';
// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { showMessage, hideMessage } from 'react-native-flash-message';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
        picture: null, 
        name: '', 
        phoneNumber: '', 
        email: '' 
    };
  }

  
  onSelectImageFrom = () => {
    Alert.alert('Option', 'Choose your Picture By :', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Camera',
        onPress: () => this.selectImageByTakeCamera(),
      },
      {
        text: 'Storage',
        onPress: () => this.selectFromStorage(),
      },
    ]);
  };

  selectFromStorage = (e) => {
    launchImageLibrary({}, response => {
      if (!response.didCancel) {
        const maxSize = 1024 * 1024;
        if (response.assets[0].fileSize < maxSize) {
          this.setState({picture : response.assets[0].uri});
        } else {
          showMessage({
            message: 'Selected Image is to Large!',
            type: 'info',
            backgroundColor: 'red',
            color: 'white',
            duration: 1000,
          });
        }
      }
    });
  };

  selectImageByTakeCamera= (e) => {
    let options = {
      mediaType: 'photo',
      maxWidth: 150,
      maxHeight: 150,
    };
    launchCamera(options, response => {
      if (!response.didCancel) {
        const maxSize = 1024 * 1024;
        if (response.assets[0].fileSize < maxSize) {
          this.setState({picture: response.assets[0].uri});
        } else {
          showMessage({
            message: 'Size of Taken Image is to Large',
            type: 'info',
            backgroundColor: 'red',
            color: 'white',
            duration: 1000,
          });
        }
      }
    });
  };

  render() {
    return (
        <View style={styles.parent}>
        <View style={styles.imageBox}>
          <Image style={styles.image}
            // source={{uri:this.state.picture}}
            source={require('../assets/images/sample.jpg')}
          />
          <TouchableOpacity style={styles.buttonCam} onPress={this.onSelectImageFrom}>
          <FaIcon name="camera" size={30} color={'white'} />
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.boxForm}>
            <View style={styles.boxFormLine}>
                <Text style= {styles.title}>NIK</Text>
                <Input
                    style={styles.button2}
                    w="100%"
                    p={3}
                    size="lg"
                    placeholder="32042913450087"
                    placeholderTextColor="black"
                    color="black"
                    variant="underlined"
                    keyboardType="numeric"
                    value={this.state.phoneNumber}
                    onChangeText={value=>this.setState({phoneNumber:value})}
                />
            </View>
            <View style={styles.boxFormLine}>
              <Text style= {styles.title}>Full Name</Text>
                  <Input
                  style={styles.button2}
                  w="100%"
                  p={3}
                  size="lg"
                  placeholder="Riki Rhenaldi"
                  placeholderTextColor="black"
                  color="black"
                  variant="underlined"
                  value={this.state.name}
                  onChangeText={value=>this.setState({name:value})}
              />
            </View>
            <View style={styles.boxFormLine}>
            <Text style= {styles.title}>Birthday</Text>
              <Input
                  style={styles.button2}
                  w="100%"
                  p={3}
                  size="lg"
                  placeholder="24-12-1997"
                  placeholderTextColor="black"
                  color="black"
                  variant="underlined"
                  keyboardType="numeric"
                  value={this.state.phoneNumber}
                  onChangeText={value=>this.setState({phoneNumber:value})}
              />
            </View>
            <View style={styles.boxFormLine}>
            <Text style= {styles.title}>BPJS</Text>
              <Input
                  style={styles.button2}
                  w="100%"
                  p={3}
                  size="lg"
                  placeholder="1186745342211"
                  placeholderTextColor="black"
                  color="black"
                  variant="underlined"
                  keyboardType="numeric"
                  value={this.state.phoneNumber}
                  onChangeText={value=>this.setState({phoneNumber:value})}
              />
            </View>
            <View style={styles.boxFormLine}>
            <Text style= {styles.title}>Phone</Text>
              <Input
                  style={styles.button2}
                  w="100%"
                  p={3}
                  size="lg"
                  placeholder="Nomer Ponsel"
                  placeholderTextColor="black"
                  color="black"
                  variant="underlined"
                  keyboardType="numeric"
                  value={this.state.phoneNumber}
                  onChangeText={value=>this.setState({phoneNumber:value})}
              />
            </View>
            <View style={styles.boxFormLine}>
              <Text style= {styles.title}>Email</Text>
                  <Input
                  style={styles.button2}
                  w="100%"
                  p={3}
                  size="lg"
                  placeholder="Nama Lengkap"
                  placeholderTextColor="black"
                  color="black"
                  variant="underlined"
                  value={this.state.email}
                  onChangeText={value=>this.setState({email:value})}
              />
            </View>
            </ScrollView>
            <View style={styles.boxButtonSave}>
              <ActionButton buttonName="Save" action={this.onEditProfile}/>
            </View>
        <View />
      </View>
    );
  }
}


const styles = StyleSheet.create({
    parent: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
    },
    imageBox: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 20,
      marginBottom: 20,
    },
    image: {
      width : 180,
      height: 180,
      borderRadius: 90,
      backgroundColor: 'grey',
      marginLeft: 30,
    },
    buttonCam: {
      width: 60,
      height: 60,
      borderRadius: 30,
      backgroundColor: '#0583D2',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      top: 110,
      left: -54,
    },
    boxForm: {
      width: "80%",
    },
    boxFormLine: {
      width: '100%',
      marginTop: 20,
    },
    boxButtonSave: {
      marginTop: 30,
      width: "80%",
      height: 60,
      marginBottom: 20,
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        color: "black"
    },
  });

export default Profile;
