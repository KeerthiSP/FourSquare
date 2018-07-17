import React from "react";
import { View, StyleSheet } from "react-native";
import { scale } from "../../helper/scale";

const ratingCard = props => (
  <View style={styles.SectionStyle}>{props.children}</View>
);

export default ratingCard;

const styles = StyleSheet.create({
  SectionStyle: {
    backgroundColor: "green",
    width: scale(25),
    height: scale(25)
    // margin: scale(3)
    // alignItems: "center",
    // alignSelf: "center",
    //justifyContent: "center"
  }
});
