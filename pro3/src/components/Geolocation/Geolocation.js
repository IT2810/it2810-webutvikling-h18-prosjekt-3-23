import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform, Dimensions } from 'react-native';
import { Constants, Location, Permissions, MapView } from 'expo';
import { Marker } from 'react-native-maps';

//Constants for the latitudeDelta and longitudeDelta (and for calculating the longitudeDelta)
const {width, height} = Dimensions.get('window')
const SCREEN_HEIGHT = height
const SCREEN_WIDTH = width
const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO


class Geolocation extends Component{

  constructor(){
    super()

    this.state = {
      errorMessage: null,
      region:{
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0,
        longitudeDelta: 0
      },
    };

  }

  componentWillMount() {
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
  }

  //Function asking for permission to get location, and getting it if it's not denied
  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    //Setting the state (region) to the users/device region
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


  render() {
    console.log("REGION: "+JSON.stringify(this.state.region));

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
            //Coordinate for SiT Gløshaugen
            title={"Sit Gløshaugen"}
            coordinate={{
              latitude: 63.4210583,
              longitude: 10.4048157,
            }}
          />

          <Marker
            //Coordinate for SiT Portale
            title={"Sit Portalen"}
            coordinate={{
              latitude: 63.4365654,
              longitude: 10.4154334,
            }}
          />

          <Marker
            //Coordinate for SiT Dragvoll
            title={"Sit Dragvoll"}
            coordinate={{
              latitude: 63.4069993,
              longitude: 10.4743628,
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
