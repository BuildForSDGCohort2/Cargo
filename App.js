import React from 'react';
import MapView from 'react-native-maps';
import {StyleSheet, Text, View, Animated, Dimensions } from 'react-native';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      carLocations:[{
        rotation: 78,
        latitude: 37.78725,
        longitude: -122.4318,
}, 
{
        rotation: -10,
        latitude: 37.79015,
        longitude: -122.4318,
}, 
{
        rotation: 262,
        latitude: 37.78525,
        longitude: -122.4348,
},
],
};
    this.initialRegion = {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.00922,
      longitudeDelta: 0.00421,
};
  }
  render(){
    return (
      <View style={styles.container}>
        <MapView 
        style={styles.mapStyle} 
        initialRegion={this.initialRegion}/>
        {this.state.carLocations.map((carLocation,i)=>(
        <MapView.Marker key={i} coordinate={carLocation}>
          <Animated.Image style={{
            transform: [{rotate: `${carLocation.rotation}deg`}],
          }}
          source={require('./img/car.png')}
          />
        </MapView.Marker>))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});