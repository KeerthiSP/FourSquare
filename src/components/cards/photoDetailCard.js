import React from "react";
import { View, Image, Text } from "react-native";
import { scale } from "../../helper/scale";
import Colors from "../../helper/color";

class PhotoDetailCard extends React.Component {
  render() {
    const { photoDetails } = this.props;
    let itemId = photoDetails.id;
    let imageUrl =
      photoDetails.prefix && photoDetails.suffix
        ? photoDetails.prefix + "300x500" + photoDetails.suffix
        : null;
    let profilePhoto =
      photoDetails.user &&
      photoDetails.user.photo &&
      photoDetails.user.photo.prefix &&
      photoDetails.user.photo.suffix
        ? photoDetails.user.photo.prefix +
          "100x100" +
          photoDetails.user.photo.suffix
        : null;
    let userFirstName =
      photoDetails.user && photoDetails.user.firstName
        ? photoDetails.user.firstName
        : null;
    let userLastName =
      photoDetails.user && photoDetails.user.lastName
        ? photoDetails.user.lastName
        : null;

    return (
      <View>
        <Image
          style={{ width: "100%", height: "100%" }}
          source={{ uri: imageUrl }}
        />
        <View
          style={{
            position: "absolute",
            width: "100%",
            height: scale(78),
            backgroundColor: Colors.black,
            marginTop: scale(496),
            opacity: 0.7,
            flexDirection: "row"
          }}
        >
          <View style={{ flex: 2 }}>
            <View
              style={{
                width: scale(52),
                height: scale(52),
                backgroundColor: Colors.grey2,
                borderRadius: scale(26),
                alignSelf: "center",
                marginTop: scale(12)
              }}
            >
              <Image
                style={{
                  width: scale(50),
                  height: scale(50),
                  borderRadius: scale(25)
                }}
                source={{ uri: profilePhoto }}
              />
            </View>
          </View>
          <View style={{ flex: 6, marginTop: scale(12) }}>
            <Text
              style={{
                fontSize: scale(15.87),
                color: Colors.white
              }}
            >
              {userFirstName + " " + userLastName}
            </Text>
            <Text />
          </View>
        </View>
      </View>
    );
  }
}

export default PhotoDetailCard;
