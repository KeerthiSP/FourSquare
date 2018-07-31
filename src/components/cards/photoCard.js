import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";
import { scale } from "../../helper/scale";
import Colors from "../../helper/color";

class PhotoCard extends React.Component {
  render() {
    const { item } = this.props;
    let photoId = item.id;
    console.log("photoId", photoId);
    let photoUrl =
      item != 0 && item.prefix && item.suffix
        ? item.prefix + "100x100" + item.suffix
        : null;
    console.log("url", item);
    return (
      <View style={{ borderRightWidth: scale(3), borderColor: Colors.black }}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("photosDetails", { data: photoId });
          }}
        >
          <Image
            style={{
              width: scale(116),
              height: scale(116)
            }}
            source={{ uri: photoUrl }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
export default withNavigation(PhotoCard);
