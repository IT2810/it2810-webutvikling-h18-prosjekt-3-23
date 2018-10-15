import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform, Dimensions, TouchableHighlight } from 'react-native';
import { Constants, Location, Permissions, MapView } from 'expo';
import { Marker } from 'react-native-maps';
import Icon from 'react-native-vector-icons/MaterialIcons'

//Constants for the latitudeDelta and longitudeDelta (and for calculating the longitudeDelta)
const {width, height} = Dimensions.get('window')
const SCREEN_HEIGHT = height
const SCREEN_WIDTH = width
const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO


class Geolocation extends Component{

  constructor(props){
    super(props)

    this.state = {
      errorMessage: null,
      region:{
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0,
        longitudeDelta: 0
      },
      addressLat: 0,
      addressLng: 0,
    };

  }

  //Fungerer ikke, den vil ikke ha denne headeren
  //A header with a TouchableHighlight that makes it possible to navigate back to the Appointments page
  /*static navigationOptions = ({navigation}) => {
        return {
            title: 'Map',
            headerTintColor: '#eceff1',
            headerStyle: {
                backgroundColor: '#37474f',
            },
            headerTitleStyle: {
                color: '#eceff1'
            },
            headerLeft: (
                <TouchableHighlight onPress={() => {navigation.navigate('AppointmentScreen')}}>
                    <Icon name = 'chevron-left' size={30} color='#eceff1'/>
                </TouchableHighlight>
            )
        }
    };*/

  componentWillMount() {
    //Checking if its an android emulator, because finding location dosn't work there
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Error, finding the location of the device will not work in an Android emulator. Try it on a device!',
      });
    }else{
      this._getLocationAsync();
    }
  }


  componentDidMount() {
    this._getLocationAsync();
    this._getAddressLocationAsync();
  }


  //Function asking for permission to get location (of device), and getting it if it's not denied
  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    this.setRegion();

  }

  //Function setting the state(region) to the users/device region
  setRegion(){
    navigator.geolocation.getCurrentPosition((position) => {
      let deviceLat = parseFloat(position.coords.latitude)
      let deviceLong = parseFloat(position.coords.longitude)

      let region = {
        latitude: deviceLat,
        longitude: deviceLong,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      }

      this.setState({region: region})
    })
  }

  //Function getting the coords for the appointment location
  _getAddressLocationAsync = async () => {
    const { longitude, latitude } = (await Location.geocodeAsync(this.props.address))[0];
    this. setState({addressLat: latitude, addressLng: longitude});
  }


  render() {
    console.log("REGION: "+JSON.stringify(this.state.region));
    console.log("Stateaddress: " + this.state.addressLat +", "+ this.state.addressLng);

    //If it occurs an error while trying to find location, we show the errorMessage to the user and not the map
    let text = '';
    if (this.state.errorMessage) {
      text = this.state.errorMessage;
      return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>{text}</Text>
      </View>);
    }

    return (
        <MapView
          style={styles.mapStyle}
          region = {this.state.region}
          provider={MapView.PROVIDER_GOOGLE}
          //Making the users/device location visible and ability to follow when it moves
          showsUserLocation={true}
          followUserLocation={true}
        >

          <Marker
            //Marker and coordinates for the appointment
            title={this.props.address}
            coordinate={{
              latitude: this.state.addressLat,
              longitude: this.state.addressLng,
            }}
          />

        </MapView>
    );
  }

}

export default Geolocation;

const styles = StyleSheet.create({
  mapStyle:{
      flex:1,
  },
  container: {
      flex: 1,
      backgroundColor: '#263238',
      alignItems: 'center',
      justifyContent: 'center',
  },
  paragraph: {
      margin:20,
      color: '#eceff1',
  }
});
