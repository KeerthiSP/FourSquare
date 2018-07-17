import React from "react";
import { View, TouchableOpacity, StyleSheet, Text, Image } from "react-native";
import { withNavigation } from "react-navigation";
import { scale } from "../../helper/scale";
import PhotoCardSection from "../../components/cards/photoCardSection";
import CardSection from "../../components/cards/cardSection";
import RatingCard from "../../components/cards/ratingCard";

class Card extends React.Component {
  render() {
    const { item, details } = this.props;
    let categories = item.categories.length > 0 ? item.categories[0] : null;
    let imageurl =
      categories && categories.icon && categories.icon.prefix
        ? categories.icon.prefix + "64.png"
        : null;
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("detail");
          }}
        >
          <View style={styles.SectionStyle}>
            <PhotoCardSection>
              <Image
                style={{ width: 100, height: 100 }}
                source={{
                  uri: imageurl
                }}
              />
            </PhotoCardSection>
            <CardSection>
              <Text> {item.name}</Text>
              <RatingCard>
                <Text> {details.rating}</Text>
              </RatingCard>
            </CardSection>
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
    marginTop: scale(6)
    // shadowRadius: 1,
    // shadowColor: 'grey',
    // shadowOpacity: 0.5,
  }
});
