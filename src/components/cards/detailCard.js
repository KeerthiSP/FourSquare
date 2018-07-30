import React from "react";
import { View, Image, Text, ScrollView, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";
import { scale } from "../../helper/scale";
import BottomButton from "../../components/cards/bottomButton";
import { Icons } from "../../assets/img/index";
import Styles from "../../helper/styles";
import styles from "../../screens/detail/styles";
import { Strings } from "../../components/constents";
import Colors from "../../helper/color";
import { Rating } from "react-native-elements";
import Stars from "react-native-stars";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

class DetailCard extends React.Component {
  render() {
    const { Data } = this.props;
    let itemId = Data.id;
    let imageUrl =
      Data.photos &&
      Data.photos.groups[0] &&
      Data.photos.groups[0].items[0] &&
      Data.photos.groups[0].items[0].prefix &&
      Data.photos.groups[0].items[0].suffix
        ? Data.photos.groups[0].items[0].prefix +
          "500x500" +
          Data.photos.groups[0].items[0].suffix
        : null;
    let categories =
      Data.categories && Data.categories[0] && Data.categories[0].name
        ? Data.categories[1] && Data.categories[1].name
          ? Data.categories[2] && Data.categories[2].name
            ? Data.categories[0].name +
              ", " +
              Data.categories[1].name +
              ", " +
              Data.categories[2].name
            : Data.categories[0].name + ", " + Data.categories[1].name
          : Data.categories[0].name
        : null;
    return (
      <ScrollView>
        <View style={Styles.FlexDirectionColumn}>
          <View style={styles.ImageSectionStyle}>
            {/* <Text>{Data.rating}</Text> */}
            <Image
              style={{ width: "100%", height: scale(297) }}
              source={{ uri: imageUrl }}
            />
            <View
              style={{
                position: "absolute",
                alignSelf: "center",
                // justifyContent: "flex-end",
                flexDirection: "column"
              }}
            >
              <View style={{}}>
                <Text
                  style={{
                    position: "absolute",
                    alignSelf: "center",
                    textAlign: "center",
                    color: Colors.white,
                    fontSize: scale(18),
                    marginTop: scale(30)
                  }}
                >
                  {Data.name}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "column"
                }}
              >
                <Text
                  style={{
                    // position: "absolute",
                    // alignSelf: "center",
                    color: Colors.white,
                    fontSize: scale(16.87),
                    marginTop: scale(240),
                    lineHeight: scale(23.62)
                    // textAlignVertical: "bottom"
                  }}
                >
                  {categories}
                </Text>
                <Stars
                  rating={2.5}
                  count={5}
                  half={true}
                  starSize={20}
                  spacing={5}
                  fullStar={<Icon name={"star"} style={[styles.myStarStyle]} />}
                  emptyStar={
                    <Icon
                      name={"star-outline"}
                      style={[styles.myStarStyle, styles.myEmptyStarStyle]}
                    />
                  }
                  halfStar={
                    <Icon name={"star-half"} style={[styles.myStarStyle]} />
                  }
                />
              </View>
            </View>
          </View>
          <View style={styles.IconsoverallView}>
            <View style={styles.RatingIconAlignment}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("rating");
                }}
              >
                <Image source={Icons.details.ratingIcon} />
                <Text style={styles.IconLabelStyle}>
                  {Strings.iconsLables.rating}
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.PhotosIconAlignment}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("photos");
                }}
              >
                <Image source={Icons.details.photosIcon} />
                <Text style={styles.IconLabelStyle}>
                  {Strings.iconsLables.photos}
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.ReviewIconAlignment}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("review");
                }}
              >
                <Image source={Icons.details.reviewIcon} />
                <Text style={styles.IconLabelStyle}>
                  {Strings.iconsLables.review}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.Breakline} />
          <View style={{ margin: scale(22) }}>
            <Text style={styles.OverviewTitle}>
              {Strings.subTitles.overview}
            </Text>
            <Text style={styles.Overview}>
              {Data.description ? Data.description : "description not Avilable"}
            </Text>
          </View>
          <View style={styles.MapSectionStyle} />
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("addReview", { data: itemId });
            }}
          >
            <View>
              <View style={styles.ButtonStyle}>
                <Text style={Styles.ButtonTitleStyle}>
                  {Strings.buttonsName.addReview}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

export default withNavigation(DetailCard);

{
  /* Lorem Ipsum is simple dummy text of the printinh abd typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galary of
              type and scambled it to make a */
}
