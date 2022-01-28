import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {FormControl, Input} from 'native-base';

class QrCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.parent}>
        <View style={styles.child1}>
            <View style={styles.titleBox}>
                <Text style={styles.title}>Outpatient Reservation</Text>
            </View>
            <View style={styles.titleBox2}>
                <Text style={styles.subtitle}>Your Reservation Succesfully</Text>
                <Text style={styles.subtitle}>Reservation: CS/012920221029/1</Text>
            </View>
            <View style={styles.boxFormLine}>
            <Text style= {styles.title}>Reservation Date : </Text>
                <Input
                w="100%"
                p={3}
                isDisabled={true}
                size="lg"
                placeholder="Jumat, 28 Januari 2022"
                placeholderTextColor="black"
                color="black"
                variant="underlined"
                value={this.state.name}
                onChangeText={value=>this.setState({name:value})}
                backgroundColor={"white"}
            />
            <Text style= {styles.title}>Poli : </Text>
                <Input
                w="100%"
                p={3}
                size="lg"
                isDisabled={true}
                placeholder="Anak"
                placeholderTextColor="black"
                color="black"
                variant="underlined"
                value={this.state.name}
                onChangeText={value=>this.setState({name:value})}
                backgroundColor={"white"}
            />
            <Text style= {styles.title}>Doctor: </Text>
                <Input
                w="100%"
                p={3}
                size="lg"
                isDisabled={true}
                placeholder="Dr. H. Kosim Sp.A"
                placeholderTextColor="black"
                color="black"
                variant="underlined"
                value={this.state.name}
                onChangeText={value=>this.setState({name:value})}
                backgroundColor={"white"}
            />
        </View>
        </View>
        <View style={styles.child2}>
        <Image
            style={styles.iconBox}
            source={require('../assets/images/QrCode.png')}
            />  
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    parent: {
        flex: 1,
        backgroundColor: "white"
    },
    child1: {
        // backgroundColor: "blue",
        width : "100%",
        alignItems : 'center',
    },
    child2: {
        // backgroundColor: "yellow",
        width : "100%",
        alignItems : 'center',
    },
    titleBox: {
        // backgroundColor: "blue",
        width: "80%",
        height: 60,
        borderColor: "grey",
        borderBottomWidth: 2,
        justifyContent: "center",
        alignItems : 'center',
    },
    titleBox2: {
        backgroundColor: "#0583d2",
        width: "80%",
        height: 90,
        justifyContent: "center",
        alignItems : 'center',
        borderRadius: 10,
        marginTop: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black"
    },
    subtitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white"
    },
    boxFormLine: {
        marginTop: 20,
        width: "80%",
    },
    iconBox:{
        width: "60%",
        height: "60%", 
    }
})
export default QrCode;
