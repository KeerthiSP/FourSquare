import React from "react";
import { View, Image, Text, ScrollView, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";
import { scale } from "../../helper/scale";
import BottomButton from "../../components/cards/bottomButton";
import { Icons } from "../../assets/img/index";
import Styles from "../../helper/styles";
import styles from "../../screens/detail/styles";
import { Strings } from "../../components/constents";

class DetailCard extends React.Component {
  render() {
    const { Data } = this.props;
    let imageUrl =
      Data.bestPhoto && Data.bestPhoto.prefix && Data.bestPhoto.suffix
        ? Data.bestPhoto.prefix + "300x100" + Data.bestPhoto.suffix
        : "photo is not avilable";
    return (
      <ScrollView>
        <View style={Styles.FlexDirectionColumn}>
          <View style={styles.ImageSectionStyle}>
            <Text>{Data.rating}</Text>
            {/* <Image source={{ uri: imageUrl }} /> */}
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
              this.props.navigation.navigate("addReview");
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
