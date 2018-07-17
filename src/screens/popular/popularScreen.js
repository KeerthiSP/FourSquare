import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { withNavigation } from "react-navigation";
import Card from "../../components/cards/card";

class PopularScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>PopularScreen</Text>
      </View>
    );
  }
}

export default withNavigation(PopularScreen);
