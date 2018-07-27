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
//           zoomControlEnabled={true}
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

import React, { Component } from "react";
import NavigationScreens from "./src/config/routes";

type Props = {};
export default class App extends Component<Props> {
  render() {
    return <NavigationScreens />;
  }
}
