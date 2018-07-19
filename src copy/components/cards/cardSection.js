import React from "react";
import { View, StyleSheet } from "react-native";
import { scale } from "../../helper/scale";

const CardSection = props => (
  <View style={styles.SectionStyle}>{props.children}</View>
);

export default CardSection;

const styles = StyleSheet.create({
  SectionStyle: {
    width: scale(234),
    height: scale(112)
  }
});
