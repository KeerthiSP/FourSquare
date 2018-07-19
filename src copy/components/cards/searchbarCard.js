import React from "react";
import { View, StyleSheet } from "react-native";
import { scale } from "../../helper/scale";
import Colors from "../../helper/color";

class SearchbarCard extends React.Component {
  render() {
    return <View style={styles.SectionStyle} />;
  }
}
export default SearchbarCard;

const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: "row",
    backgroundColor: Colors.white,
    borderRadius: scale(5),
    width: scale(250),
    height: scale(36)
  }
});
