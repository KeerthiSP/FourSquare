import React from "react";
import { View, StyleSheet } from "react-native";
import { scale } from "../../helper/scale";

const CardSection = props => (
  <View style={styles.SectionStyle}>{props.children}</View>
);

export default CardSection;

const styles = StyleSheet.create({
  SectionStyle: {
    backgroundColor: "silver",
    width: "61.1%",
    height: scale(92),
    marginHorizontal: scale(10),
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center"
  }
});
