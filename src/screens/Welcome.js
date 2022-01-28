import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NativeBaseProvider, Box } from "native-base";

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <NativeBaseProvider>
        <View>
            <Text> page Welcome </Text>
        </View>
        </NativeBaseProvider>
    );
  }
}

export default Welcome