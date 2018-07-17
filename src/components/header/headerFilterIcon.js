import React from "react";
import { withNavigation } from "react-navigation";
import { Image, View, TouchableOpacity, StyleSheet } from "react-native";
import { scale } from "../../helper/scale";
import { Icons } from "../../assets/img/index";

class HeaderFilterIcon extends React.Component {
  render() {
    return (
      <View style={styles.Position}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("filter");
          }}
        >
          <Image source={Icons.filterIcon} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default withNavigation(HeaderFilterIcon);
const styles = StyleSheet.create({
  Position: {
    marginBottom: scale(50),
    justifyContent: "center",
    marginRight: scale(20)
  }
});
