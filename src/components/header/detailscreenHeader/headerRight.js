import React from "react";
import { Image, View, TouchableOpacity } from "react-native";
import { scale } from "../../../helper/scale";
import { Icons } from "../../../assets/img";

class HeadreRight extends React.Component {
  render() {
    return (
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity>
          <Image
            style={{ marginRight: scale(20), marginBottom: scale(10) }}
            source={Icons.details.shareIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{ marginRight: scale(22), marginBottom: scale(10) }}
            source={Icons.details.favourite}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export default HeadreRight;

// hitSlop={{top: 20, bottom: 20, left: 50, right: 50}}>
