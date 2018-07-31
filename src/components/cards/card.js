import React from "react";
import { View, TouchableOpacity, StyleSheet, Text, Image } from "react-native";
import { withNavigation } from "react-navigation";
import { scale } from "../../helper/scale";
import Colors from "../../helper/color";
import { Strings } from "../constents";
import { Icons } from "../../assets/img";

class Card extends React.Component {
  render() {
    const { item, det } = this.props;
    let imageurl =
      det.photos &&
      det.photos.groups[0] &&
      det.photos.groups[0].items[0] &&
      det.photos.groups[0].items[0].prefix &&
      det.photos.groups[0].items[0].suffix
        ? det.photos.groups[0].items[0].prefix +
          "100x100" +
          det.photos.groups[0].items[0].suffix
        : null;
    let itemId = item.id;
    let rating = det.rating ? det.rating : null;
    let formattedAddress =
      det.location &&
      det.location.formattedAddress &&
      det.location.formattedAddress[0]
        ? det.location.formattedAddress[1]
          ? det.location.formattedAddress[2]
            ? det.location.formattedAddress[0] +
              ", " +
              det.location.formattedAddress[1] +
              ", " +
              det.location.formattedAddress[2]
            : det.location.formattedAddress[0] +
              ", " +
              det.location.formattedAddress[1]
          : det.location.formattedAddress[0]
        : "Address unavilable";
    let ratingDefaultColor = "green";
    let ratingColor = det.ratingColor ? "#" + det.ratingColor : null;
    let expense =
      det.location && det.location.country
        ? det.attributes &&
          det.attributes.groups[0] &&
          det.attributes.groups[0].summary
          ? det.location.country +
            " " +
            Strings.bullet +
            " " +
            det.attributes.groups[0].summary
          : det.location.country
        : null;

    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("detail", { data: itemId });
          }}
        >
          <View style={styles.SectionStyle}>
            <View
              style={{
                backgroundColor: "silver",
                width: scale(113),
                height: scale(113)
              }}
            >
              <Image
                style={{ width: 130, height: 130 }}
                source={{
                  uri: imageurl
                }}
              />
            </View>
            <View
              style={{
                width: scale(234),
                height: scale(112)
              }}
            >
              <View style={{ flex: 3 }}>
                <Text
                  style={{
                    marginTop: scale(10),
                    marginLeft: scale(10),
                    fontSize: scale(16.88),
                    color: Colors.black
                  }}
                >
                  {det.name ? det.name : "null"}
                </Text>
              </View>
              <View style={{ flex: 4 }}>
                <View
                  style={{
                    backgroundColor: ratingColor,
                    width: scale(20),
                    height: scale(20),
                    marginTop: scale(25),
                    marginLeft: scale(10),
                    borderRadius: scale(2)
                  }}
                >
                  <Text
                    style={{
                      fontSize: scale(11.25),
                      color: Colors.white,
                      textAlign: "center",
                      paddingTop: scale(3)
                    }}
                  >
                    {rating}
                  </Text>
                </View>
              </View>
              <View style={{ flex: 4, flexDirection: "column" }}>
                <Text
                  style={{
                    marginTop: scale(6),
                    marginLeft: scale(10),
                    fontSize: scale(12.38),
                    color: Colors.grey
                  }}
                >
                  {expense}
                </Text>
                <Text
                  style={{
                    marginLeft: scale(10),
                    fontSize: scale(12.38),
                    color: Colors.grey
                  }}
                >
                  {formattedAddress}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default withNavigation(Card);

const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: "row",
    backgroundColor: "#fff",
    width: scale(362),
    height: scale(112),
    marginLeft: scale(6),
    marginBottom: scale(6)
  }
});
