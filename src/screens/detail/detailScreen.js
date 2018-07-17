import React from "react";
import { View, Image, Text, ScrollView, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";
import { scale } from "../../helper/scale";
import HeaderRight from "../../components/header/detailscreenHeader/headerRight";
import BottomButton from "../../components/cards/bottomButton";
import { Icons } from "../../assets/img/index";
import Styles from "../../helper/styles";
import styles from "../../screens/detail/styles";

class DetailScreen extends React.Component {
  static navigationOptions = {
    headerBackImage: (
      <Image
        style={{ margin: scale(22), marginTop: scale(10) }}
        source={Icons.details.backArrow}
      />
    ),
    headerRight: <HeaderRight />,
    headerStyle: {
      backgroundColor: "rgba(0, 0, 0, 0.1)",
      position: "absolute",
      top: 30,
      left: 0,
      right: 0,
      borderBottomWidth: 0
    },
    height: scale(48),
    width: "100%"
  };

  render() {
    return (
      <ScrollView>
        <View style={Styles.FlexDirectionColumn}>
          <View style={styles.ImageSectionStyle} />
          <View style={styles.IconsoverallView}>
            <View style={styles.RatingIconAlignment}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("rating");
                }}
              >
                <Image source={Icons.details.ratingIcon} />
                <Text style={styles.IconLabelStyle}>Rating</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.PhotosIconAlignment}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("photos");
                }}
              >
                <Image source={Icons.details.photosIcon} />
                <Text style={styles.IconLabelStyle}>Photos</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.ReviewIconAlignment}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("review");
                }}
              >
                <Image source={Icons.details.reviewIcon} />
                <Text style={styles.IconLabelStyle}>Review</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.Breakline} />
          <View style={{ margin: scale(22) }}>
            <Text style={styles.OverviewTitle}>Overview</Text>
            <Text style={styles.Overview}>
              Lorem Ipsum is simple dummy text of the printinh abd typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galary of
              type and scambled it to make a
            </Text>
          </View>
          <View style={styles.MapSectionStyle} />
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("addReview");
            }}
          >
            <View>
              <BottomButton>
                <Text style={Styles.ButtonTitleStyle}>Add Review </Text>
              </BottomButton>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

export default withNavigation(DetailScreen);
