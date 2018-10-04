import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { Constants, Location, Permissions, MapView } from 'expo';
import { Marker } from 'react-native-maps';


class Geolocation extends Component{
  state = {
    location: null,
    errorMessage: null,
    enableHighAccuracy: true,
  };

  componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Error, this will not work in an Android emulator. Try it on your device!',
      });
    } else {
      this._getLocationAsync();
    }
  }

  componentDidMount() {
    this._getLocationAsync();
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location: JSON.stringify(location) });

  }

  render() {
    let text = 'Waiting..';
    if (this.state.errorMessage) {
      text = this.state.errorMessage;
    } else if (this.state.location) {
      text = JSON.stringify(this.state.location);
    }

    return (
      /*<View style={styles.container}>
        <Text style={styles.paragraph}>{text}</Text>
      </View>*/
      <MapView
        style={styles.mapStyle}
        initialRegion={{
          latitude: 63.446800,
          longitude: 10.410000,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
          }}
      />
    );
  }

}


export default Geolocation;

const styles = StyleSheet.create({
  mapStyle:{
    flex:1
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});

//63.446800,10.410000
