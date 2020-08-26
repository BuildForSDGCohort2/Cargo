import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import  MapView from "react-native-maps";

// export default class App extends React.Component{
//   constructor(props){
//     super(props);
//     this.initialRegion = {
//       latitude: 37.78825,
//       longitude: -122.4324,
//       latitudeDelta: 0.00922,
//       longitudeDelta: 0.00421,
//     };
//   }

//   render(){
//     return(
//       <View style={{flex:1}}>
//         <MapView
//         style = {styles.fullScreenMap}
//         provider="google"
//         initialRegion={this.initialRegion}
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   fullScreenMap : {
//     position: 'absolute',
//     top:0,
//     bottom:0,
//     left:0,
//     right:0,

// },
// }
// );

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.initialRegion = {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.00922,
      longitudeDelta: 0.00421,
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <MapView 
        provider="google"
        style={styles.mapStyle}
        initialRegion={this.initialRegion}
        />
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