import React from "react";
import { View } from "react-native";
import { Rating } from "react-native-elements";
import { scale } from "../../helper/scale";

class RatingDisplay extends React.Component {
  render() {
    return (
      <View>
        <Rating
          //showRating
          type="star"
          fractions={1}
          startingValue={3.3}
          readonly
          imageSize={20}
          style={{ paddingHorizontal: scale(20) }}
        />
      </View>
    );
  }
}

export default RatingDisplay;
