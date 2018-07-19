import React from "react";
import { View, StyleSheet } from "react-native";
// import { withNavigation } from 'react-navigation';
import { scale } from "../../helper/scale";

const PhotoCardSection = props => (
  <View style={styles.SectionStyle}>{props.children} </View>
);

export default PhotoCardSection;

const styles = StyleSheet.create({
  SectionStyle: {
    backgroundColor: "silver",
    width: scale(113),
    height: scale(113)
  }
});
