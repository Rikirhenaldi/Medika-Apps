import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image, ScrollView, FlatList} from 'react-native';
import {SearchBar } from 'react-native-elements';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showInfo: true,
    };
  }

  onHideInfo = () => {
    this.setState({showInfo : false})
  }
  render() {
    return (
      <View style= {styles.parent}>
        <View style= {styles.boxtitle}>
          <View style= {styles.boxName}>
            <Text style= {styles.title}>Hello,</Text>
            <Text style= {styles.title2}>Riki Rhenaldi</Text>
          </View>
        </View>
        <View style= {styles.backBox}/>
        <View style= {styles.boxButton}>
          <View style= {styles.boxSearch}>
            <SearchBar
                placeholder="Search"
                // onChangeText={value=>this.setState({search:value})}
                // onSubmitEditing={this.onSearch}
                // value={this.state.search}
                platform="android"
                containerStyle={styles.inputBoxParent}
                inputStyle={styles.inputBox}
              />
          </View>
          <ScrollView style= {styles.scrollBox}>
              {this.state.showInfo === true ?
              <View style= {styles.boxInfo}>
              <View style= {styles.boxleft}>
              <Text style= {styles.textInfo}>It seems you have not completed the details of your personal data.</Text>
              <TouchableOpacity style={styles.greenButton}>
                <Text style= {styles.textButton}>Click here</Text>
              </TouchableOpacity>
              </View>
              <View style= {styles.boxright}>
              <Image
              style={styles.iconBox2}
              source={require('../assets/images/info.jpg')}
                />
              <TouchableOpacity style={styles.closeButton} onPress={() => this.onHideInfo()}>
                <Text style= {styles.textButton}>X</Text>
              </TouchableOpacity>
              </View>  
            </View> 
              :
              null}

            <View style= {styles.boxBottom}>
              <View>
                <Text style={styles.subtitle}>What do you need?</Text>
              </View>
              {this.state.showInfo === true ? 
                <View style={styles.rowBox}>
                <TouchableOpacity style={styles.listboxrow} onPress={() => this.props.navigation.navigate("reservation")}>
                  <Image
                style={styles.iconBox}
                source={require('../assets/images/booking.png')}
                />
                <Text style={styles.textWhite}>Reservation</Text>
                </TouchableOpacity >
                <TouchableOpacity style={styles.listboxWhiterow}>
                  <Image
                  style={styles.iconBox}
                  source={require('../assets/images/checklist.png')}
                  />
                  <Text>Res.. List</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.listboxWhiterow}>
                  <Image
                  style={styles.iconBox}
                  source={require('../assets/images/hospital.png')}
                  />
                  <Text>Poli Clinic</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.listboxrow}>
                  <Image
                  style={styles.iconBox}
                  source={require('../assets/images/doctor.png')}
                  />
                  <Text style={styles.textWhite}>List Doctor</Text>
                </TouchableOpacity>
                </View>
              :
              <View style={styles.featureBox}>
                <View style={styles.rowBox}>
                  <TouchableOpacity style={styles.listbox} onPress={() => this.props.navigation.navigate("reservation")}>
                    <Image
                  style={styles.iconBox}
                  source={require('../assets/images/booking.png')}
                  />
                  <Text style={styles.textWhite2}>Reservation</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.listboxWhite}>
                    <Image
                  style={styles.iconBox}
                  source={require('../assets/images/checklist.png')}
                  />
                  <Text>Reservation List</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.rowBox}>
                  <TouchableOpacity style={styles.listboxWhite}>
                    <Image
                  style={styles.iconBox}
                  source={require('../assets/images/hospital.png')}
                  />
                  <Text>Poli Clinic</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.listbox}>
                    <Image
                  style={styles.iconBox}
                  source={require('../assets/images/doctor.png')}
                  />
                  <Text style={styles.textWhite2}>List Doctor</Text>
                  </TouchableOpacity>
                </View>
              </View>
              }
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    backgroundColor: '#0583D2',
    flex: 1,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 5,
  },
  title2: {
      color: 'white',
      fontWeight: '900',
      width: "100%",
      fontSize: 40,
      // backgroundColor: "blue",
    },
  boxtitle : {
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0583D2',
    height: "30%",
    borderBottomLeftRadius: 100,
    zIndex: 20,
  },
  backBox : {
    zIndex: -4,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 400,
    width: 200,
    marginTop: -300,
  },
  boxButton: {
    zIndex: -1,
    backgroundColor: 'white',
    height: "100%",
    borderTopRightRadius: 100,
    marginTop: -100,
  },
  boxSearch: {
    // backgroundColor: "blue",
    width: "100%",
    height: 70,
    marginTop: 30,
    alignItems: 'center'
  },
  inputBoxParent: {
    width: '85%',
    height: 60,
    backgroundColor: 'white',
    marginBottom: 5,
    borderRadius: 20,
    elevation: 3,
   },
   boxName: {
    // backgroundColor: '#0583D2',
    width: "100%",
    height: 180,
    paddingHorizontal: "7%",
    marginTop: 15,
  },
   boxInfo: {
     backgroundColor: '#0583D2',
     width: "90%",
     display: 'flex',
     flexDirection: 'row',
     height: 150,
     paddingHorizontal: 20,
     borderRadius: 40,
     marginHorizontal: 20,
     justifyContent: "space-between",
     alignItems: 'center',
     marginTop: 10,
   },
   textInfo: {
     width: '100%',
     color: 'white',
     fontSize: 14,
     fontWeight: "bold",
    lineHeight: 23,
   },
   boxleft: {
    width: '50%',
    // backgroundColor: "blue",
    height: '100%',
    paddingTop: 10,
    lineHeight: "80%",
    justifyContent: "space-around" 
  },
  boxright: {
    width: '45%',
    // backgroundColor: "blue",
    height: '100%',
    paddingTop: 20,
    justifyContent: "space-around",
    display: 'flex',
    flexDirection: 'row',
  },
  iconBox2: {
    width: '90%',
    height: '93%',
    borderRadius: 20,
  },
   iconBox: {
     width: '60%',
     height: '60%',
   },
   greenButton: {
     backgroundColor: '#37bc84',
     width: '50%',
     height: "25%",
     justifyContent: "center",
     alignItems: "center",
     borderRadius: 20,
     display: "flex"
   },
   closeButton: {
    backgroundColor: '#37bc84',
    width: '30%',
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    display: "flex",
    position: "absolute",
    right: -28,
    top: -10,
    borderWidth: 3,
    borderColor: "white"
  },
   textButton: {
     color: 'white',
     fontWeight: "bold",
   },
   boxBottom: {
    //  backgroundColor: "blue",
     width: '100%',
     height: 380,
     paddingHorizontal: 20,
     paddingTop: 10,
   },
   subtitle: {
    color: '#0583D2',
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 5,
  },
  featureBox: {
    width: '100%',
    height: 800,
    backgroundColor: 'white',
    // paddingBottom: 20
  },
  rowBox: {
    display: "flex",
    flexDirection: 'row',
    paddingVertical: 10,
    justifyContent: "space-around" 
  },
  listboxrow: {
    backgroundColor: "#37bc84",
    width: '23%',
    height: 80,
    borderRadius: 10,
    elevation: 5,
    justifyContent: 'center',
    alignItems: "center",
  },
  listbox: {
    backgroundColor: "#37bc84",
    width: '35%',
    height: 120,
    borderRadius: 30,
    elevation: 5,
    justifyContent: 'center',
    alignItems: "center",
  },
  listboxWhiterow: {
    backgroundColor: "white",
    width: '23%',
    height: 80,
    borderRadius: 10,
    elevation: 5,
    justifyContent: 'center',
    alignItems: "center",
  },
  listboxWhite: {
    backgroundColor: "white",
    width: '35%',
    height: 120,
    borderRadius: 30,
    elevation: 5,
    justifyContent: 'center',
    alignItems: "center",
  },
  scrollBox: {
    flex: 1,
    paddingBottom: 20
  }, 
  textWhite: {
    color: "white",
    fontWeight: "500"
  },
  textWhite2: {
    color: "white",
    fontWeight: "500",
    fontSize: 16
  }
});

export default Home;
