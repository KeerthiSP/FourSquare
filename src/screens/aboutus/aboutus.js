import React from "react";
import { View, Text, Image } from "react-native";
import { scale } from "../../helper/scale";
import Colors from "../../helper/color";
import BacktoHome from "../../components/header/backtoHome";

class AboutusScreen extends React.Component {
  static navigationOptions = {
    headerTitle: "About us",
    headerLeft: <BacktoHome />,
    headerTitleStyle: {
      color: "#fff",
      fontSize: scale(17)
    },
    headerStyle: {
      backgroundColor: Colors.primaryColor,
      height: scale(48),
      width: "100%"
    }
  };
  render() {
    return (
      <View>
        <Text>aboutus</Text>
      </View>
    );
  }
}

export default AboutusScreen;
