// import React, { Component } from "react";
// import { StyleSheet, View, Dimensions } from "react-native";
// import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
// //import RetroMapStyles from "./MapStyles/RetroMapStyles.json";
// let { width, height } = Dimensions.get("window");
// const ASPECT_RATIO = width / height;
// const LATITUDE = 0;
// const LONGITUDE = 0;
// const LATITUDE_DELTA = 0.0922;
// const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
// export default class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       region: {
//         latitude: LATITUDE,
//         longitude: LONGITUDE,
//         latitudeDelta: LATITUDE_DELTA,
//         longitudeDelta: LONGITUDE_DELTA
//       }
//     };
//   }
//   componentDidMount() {
//     navigator.geolocation.getCurrentPosition(
//       position => {
//         this.setState({
//           region: {
//             latitude: position.coords.latitude,
//             longitude: position.coords.longitude,
//             latitudeDelta: LATITUDE_DELTA,
//             longitudeDelta: LONGITUDE_DELTA
//           }
//         });
//       },
//       error => console.log(error.message),
//       { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
//     );
//     this.watchID = navigator.geolocation.watchPosition(position => {
//       this.setState({
//         region: {
//           latitude: position.coords.latitude,
//           longitude: position.coords.longitude,
//           latitudeDelta: LATITUDE_DELTA,
//           longitudeDelta: LONGITUDE_DELTA
//         }
//       });
//     });
//   }
//   componentWillUnmount() {
//     navigator.geolocation.clearWatch(this.watchID);
//   }
//   render() {
//     return (
//       <MapView
//         provider={PROVIDER_GOOGLE}
//         style={styles.container}
//         // customMapStyle={ RetroMapStyles }
//         showsUserLocation={true}
//         region={this.state.region}
//         onRegionChange={region => this.setState({ region })}
//         onRegionChangeComplete={region => this.setState({ region })}
//       >
//         <MapView.Marker coordinate={this.state.region} />
//       </MapView>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//     height: "100%",
//     width: "100%"
//   }
// });

//////////////////////////////
// import MapView from "react-native-maps";
// import { Marker } from "react-native-maps";
// import React from "react";
// import { View, StyleSheet } from "react-native";
// import { scale } from "./src/helper/scale";

// const styles = StyleSheet.create({
//   container: {
//     ...StyleSheet.absoluteFillObject,
//     height: scale(180),
//     width: "100%",
//     justifyContent: "flex-end",
//     alignItems: "center"
//   },
//   map: {
//     ...StyleSheet.absoluteFillObject
//   }
// });

// export default class MyApp extends React.Component {
//   render() {
//     const { region } = this.props;
//     console.log(region);

//     return (
//       <View style={styles.container}>
//         <MapView
//           style={styles.map}
//           provider="google"
//           //mapType="hybrid"
//           //zoomControlEnabled={true}
//           showsUserLocation={true}
//           // region={{
//           //   latitude: 37.78825,
//           //   longitude: -122.4324,
//           //   latitudeDelta: 0.015,
//           //   longitudeDelta: 0.0121
//           // }}
//         />
//       </View>
//     );
//   }
// }
///////////////////////////
import React, { Component } from "react";
import NavigationScreens from "./src/config/routes";

type Props = {};
export default class App extends Component<Props> {
  render() {
    return <NavigationScreens />;
  }
}
