import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import {FormControl, Input} from 'native-base';
import ActionButton from '../components/ActionButton';

class Reservation extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.parent}>
        <ScrollView style={styles.boxScrollView}>
        <View style={styles.boxFormLine}>
            <Text style= {styles.title}>Hospital : </Text>
                <Input
                w="100%"
                p={3}
                size="lg"
                placeholder="RSUD Medika Bandung"
                isDisabled={true}
                placeholderTextColor="black"
                color="black"
                variant="underlined"
                value={this.state.name}
                onChangeText={value=>this.setState({name:value})}
                backgroundColor={"white"}
            />
        </View>
        <View style={styles.boxFormLine}>
            <View  style= {styles.titleColored}>
            <Text style= {styles.title2}>Patient</Text>
            </View>
            <Text style= {styles.title}>Name : </Text>
                <Input
                w="100%"
                p={3}
                size="lg"
                placeholder="Riki Rhenaldi"
                placeholderTextColor="black"
                color="black"
                variant="underlined"
                value={this.state.name}
                onChangeText={value=>this.setState({name:value})}
                backgroundColor={"white"}
            />
        </View>
        <View style={styles.boxFormLine}>
            <View  style= {styles.titleColored}>
            <Text style= {styles.title2}>Reservation</Text>
            </View>
            <Text style= {styles.title}>Reservation Date : </Text>
                <Input
                w="100%"
                p={3}
                size="lg"
                placeholder="Jumat, 28 Januari 2022"
                placeholderTextColor="black"
                color="black"
                variant="underlined"
                value={this.state.name}
                onChangeText={value=>this.setState({name:value})}
                backgroundColor={"white"}
            />
            <Text style= {styles.title}>Type Reservation </Text>
                <Input
                w="100%"
                p={3}
                size="lg"
                placeholder="BPJS"
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
                placeholder="Dr. H. Kosim Sp.A"
                placeholderTextColor="black"
                color="black"
                variant="underlined"
                value={this.state.name}
                onChangeText={value=>this.setState({name:value})}
                backgroundColor={"white"}
            />
        </View>
        </ScrollView>
        <View style={styles.button3}>
            <ActionButton buttonName='Submit' action={()=> this.props.navigation.navigate('qr code tiket')} />
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
    title: {
        fontSize: 18,
        marginLeft: 10,
        marginBottom: 5,
        marginTop: 5,
        color: "black",
        fontWeight: "bold"
    },
    title2: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white"
    },
    boxScrollView: {
        // backgroundColor: "blue",
        width: "100%",
        flex: 1,
        marginHorizontal: "4%"
    },
    boxFormLine: {
        width: "90%",
        marginTop: 10,
        // backgroundColor: "blue"
    },
    titleColored: {
        marginBottom: 10,
        fontWeight: 'bold',
        width: "100%",
        height: 40,
        backgroundColor: "#0583D2",
        paddingHorizontal: "3%",
        justifyContent: "center",
    },
    button3: {
        width: "80%",
        // backgroundColor: 'blue',
        height: 60,
        marginTop: 30,
        justifyContent: 'center',
        alignItems: "center",
        marginHorizontal: "8%",
        marginBottom: 20
        // paddingHorizontal: 20,
      },
})

export default Reservation;
