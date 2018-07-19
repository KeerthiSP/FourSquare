import React from "react";
import { View, StyleSheet } from "react-native";
import { scale } from "../../helper/scale";

const ratingCard = props => (
  <View style={styles.SectionStyle}>{props.children}</View>
);

export default ratingCard;

const styles = StyleSheet.create({
  SectionStyle: {
    backgroundColor: "#61B616",
    width: scale(20),
    height: scale(20),
    marginTop: scale(25),
    marginLeft: scale(10),
    borderRadius: scale(2)
  }
});
