import React from "react";
import { View, TouchableOpacity, StyleSheet, Text, Image } from "react-native";
import { withNavigation } from "react-navigation";
import { scale } from "../../helper/scale";
import PhotoCardSection from "../../components/cards/photoCardSection";
import CardSection from "../../components/cards/cardSection";
import RatingCard from "../../components/cards/ratingCard";
import Colors from "../../helper/color";

class Card extends React.Component {
  render() {
    const { item, det } = this.props;
    // let categories = item.categories.length > 0 ? item.categories[0] : null;
    let imageurl =
      det.photos &&
      det.photos.groups[0] &&
      det.photos.groups[0].items[0] &&
      det.photos.groups[0].items[0].prefix &&
      det.photos.groups[0].items[0].suffix
        ? det.photos.groups[0].items[0].prefix +
          "300x300" +
          det.photos.groups[0].items[0].suffix
        : null;

    //let details = det[item.id] ? det[item.id] : "Unavilable";
    let itemId = item.id;
    let rating = det.rating ? det.rating : "not";
    //let color= det.rating
    let ratingColor = "#" + det.ratingColor ? det.ratingColor : "000000";

    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("detail", { data: itemId });
          }}
        >
          <View style={styles.SectionStyle}>
            {/* <PhotoCardSection> */}
            <View
              style={{
                backgroundColor: "silver",
                width: scale(113),
                height: scale(113)
              }}
            >
              {/* <Image
                style={{ width: 100, height: 100 }}
                source={{
                  uri: imageurl
                }}
              /> */}
            </View>
            {/* </PhotoCardSection> */}
            {/* <CardSection> */}
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
                    color: "#1D1D26 "
                  }}
                >
                  {det.name ? det.name : "null"}
                </Text>
              </View>
              <View style={{ flex: 4 }}>
                {/* <RatingCard> */}
                <View
                  style={{
                    backgroundColor: "green",
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
                    {/* {det.rating ? det.rating : "null"} */}
                    {rating}
                  </Text>
                </View>
                {/* </RatingCard> */}
              </View>
              <View style={{ flex: 4 }}>
                <Text
                  style={{
                    marginTop: scale(6),
                    marginLeft: scale(10),
                    fontSize: scale(12.38),
                    color: Colors.grey
                  }}
                >
                  {item.location && item.location.address
                    ? item.location.address
                    : "unavilable"}
                  {item.location && item.location.city
                    ? item.location.city
                    : null}
                </Text>
              </View>
            </View>
            {/* </CardSection> */}
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
    // shadowRadius: 1,
    // shadowColor: 'grey',
    // shadowOpacity: 0.5,
  }
});
