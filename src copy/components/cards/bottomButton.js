import React from "react";
import { View, StyleSheet } from "react-native";
import { scale } from "../../helper/scale";

const BottomButton = props => (
  <View style={styles.SectionStyle}>{props.children} </View>
);

export default BottomButton;

const styles = StyleSheet.create({
  SectionStyle: {
    backgroundColor: "#422560",
    width: "100%",
    height: scale(50)
  }
});
