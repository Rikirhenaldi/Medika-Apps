import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NativeBaseProvider} from 'native-base';
import FlashMessage from 'react-native-flash-message';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import FAIcon from 'react-native-vector-icons/FontAwesome';

import Welcome from './src/screens/Welcome';
import LoginByEmail from './src/screens/LoginByEmail';
import LoginByMedicalNum from './src/screens/LoginByMedicalNum';
import SignUp from './src/screens/SignUp';
import Home from './src/screens/Home';
import HeadersHome from './src/components/HeadersHome';

import { LogBox } from 'react-native';
import Profile from './src/screens/Profile';
import Headers from './src/components/Headers';
import Reservation from './src/screens/Reservation';
import QrCode from './src/screens/QrCode';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);
LogBox.ignoreLogs(["EventEmitter.removeListener"]);

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#0583D2',
        tabBarInactiveTintColor: 'grey',
        tabBarLabelStyle: {
          fontSize: 15,
          fontWeight: 'bold',
        },
        tabBarStyle: {height: 60, paddingBottom: 8, },
      }}
      >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: null,
          cardStyle: {backgroundColor: 'transparent'},
          headerTransparent: true,
          tabBarLabel: 'Home',
          tabBarLabelStyle:{fontSize: 15},
          tabBarIcon: ({color, size}) => (
            <FAIcon name="home" color={color} size={35} />
          ),
        }}
      />
      <Tab.Screen
        name="Reservation"
        component={Reservation}
        options={{
          title: null,
          cardStyle: {backgroundColor: 'transparent'},
          headerTransparent: true,
          tabBarLabel: 'Reservation',
          tabBarLabelStyle:{fontSize: 15},
          tabBarIcon: ({color, size}) => (
            <FAIcon name="calendar-plus-o" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Help"
        component={SignUp}
        options={{
          title: null,
          cardStyle: {backgroundColor: 'transparent'},
          headerTransparent: true,
          tabBarLabel: 'Help',
          tabBarLabelStyle:{fontSize: 15},
          tabBarIcon: ({color, size}) => (
            <Icon name="television-guide" color={color} size={35} />
          ),
        }}
      />
      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
    </Tab.Navigator>
  );
};



class App extends Component {
  render() {
    return (
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="profile">
              <React.Fragment>
                <Stack.Screen
                  component={Welcome}
                  options={{
                    title: null,
                    cardStyle: {backgroundColor: 'transparent'},
                    headerTransparent: true,
                  }}
                  name="welcome"
                />
                <Stack.Screen
                  component={SignUp}
                  options={{
                    title: null,
                    cardStyle: {backgroundColor: 'transparent'},
                    headerTransparent: true,
                  }}
                  name="signUp"
                />
                <Stack.Screen
                  component={LoginByEmail}
                  options={{
                    title: null,
                    cardStyle: {backgroundColor: 'transparent'},
                    headerTransparent: true,
                  }}
                  name="loginEmail"
                />
                <Stack.Screen
                  component={LoginByMedicalNum}
                  options={{
                    title: null,
                    cardStyle: {backgroundColor: 'transparent'},
                    headerTransparent: true,
                  }}
                  name="loginMedicalNum"
                />
                <Stack.Screen
                  component={BottomTab}
                  options={{
                    header: HeadersHome,
                    cardStyle: {backgroundColor: '#0583D2'},
                  }}
                  name="home"
                />
                <Stack.Screen
                  component={Profile}
                  options={{
                    header: Headers,
                    cardStyle: {backgroundColor: '#0583D2'},
                  }}
                  name="profile"
                />
                <Stack.Screen
                  component={Reservation}
                  options={{
                    header: Headers,
                    cardStyle: {backgroundColor: '#0583D2'},
                  }}
                  name="reservation"
                />
                <Stack.Screen
                  component={QrCode}
                  options={{
                    header: Headers,
                    cardStyle: {backgroundColor: '#0583D2'},
                  }}
                  name="qr code tiket"
                />
              </React.Fragment>
          </Stack.Navigator>
          <FlashMessage position="top" />
        </NavigationContainer>
      </NativeBaseProvider>
    );
  }
}
// const mapStateToprops = state => ({
//   auth: state.auth,
// });
// export default connect(mapStateToprops, null)(App);
export default App