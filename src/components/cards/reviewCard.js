import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { scale } from "../../helper/scale";
import Colors from "../../helper/color";

class ReviewCard extends React.Component {
  render() {
    const { item } = this.props;
    let text = item.text ? item.text : null;
    let firstName =
      item.user && item.user.firstName ? item.user.firstName : null;
    let lastName = item.user && item.user.lastName ? item.user.lastName : null;
    let name = firstName + " " + lastName;
    let photo =
      item.user &&
      item.user.photo &&
      item.user.photo.prefix &&
      item.user.photo.suffix
        ? item.user.photo.prefix + "100x100" + item.user.photo.suffix
        : null;
    console.log("text", text);
    return (
      <View
        style={{
          width: "100%",
          // height: scale(132),
          borderColor: Colors.grey2,
          borderBottomWidth: scale(1),
          flexDirection: "row",
          marginTop: scale(20)
        }}
      >
        <View style={{ flex: 5 }}>
          <View
            style={{
              height: scale(40),
              width: scale(40),
              backgroundColor: "silver",
              borderRadius: scale(22),
              alignSelf: "center"
            }}
          >
            <Image
              style={{
                width: scale(40),
                height: scale(40),
                borderRadius: scale(20)
              }}
              source={{ uri: photo }}
            />
          </View>
        </View>

        <View style={{ flex: 12 }}>
          <View
            style={{
              flexDirection: "column"
            }}
          >
            <Text
              style={{
                fontSize: scale(16),
                color: "#000000",
                fontWeight: "bold"
              }}
            >
              {name}
            </Text>
            <ScrollView>
              <Text
                style={{
                  fontSize: scale(13),
                  color: "#1D1D26",
                  textAlign: "justify",
                  lineHeight: scale(19),
                  marginBottom: scale(20)
                }}
              >
                {text}
              </Text>
            </ScrollView>
          </View>
        </View>
        <View style={{ flex: 7, alignItems: "center" }}>
          <View>
            <Text>June 24,2018</Text>
          </View>
        </View>
      </View>
    );
  }
}
export default ReviewCard;
