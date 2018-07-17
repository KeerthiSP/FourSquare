import React from "react";
import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { scale } from "../../helper/scale";
import BackImage from "../../components/header/detailscreenHeader/backImage";
import Colors from "../../helper/color";
import Styles from "../../helper/styles";
import { Icons } from "../../assets/img/index";
import styles from "../addReview/styles";

class AddReviewScreen extends React.Component {
  static navigationOptions = {
    headerTitle: "Add Review",
    headerBackImage: <BackImage />,
    headerBackTitle: "Back",
    headerTintColor: "white",
    headerTitleStyle: {
      fontSize: 20
    },
    headerStyle: {
      backgroundColor: Colors.primaryColor,
      height: scale(48),
      width: "100%"
    }
  };
  render() {
    return (
      <KeyboardAwareScrollView>
        <View style={Styles.FlexDirectionColumn}>
          <View>
            <Text style={styles.WriteReviewStyle}> Write Review</Text>
          </View>

          <View style={styles.ReviewSectionStyle}>
            <TextInput
              style={styles.TextInputStyle}
              keyboardType="default"
              keyboardAppearance="light"
              autoCapitalize="sentences"
              multiline="true"
              placeholder="text"
              selectionColor="black"
            />
          </View>

          <View>
            <Text style={styles.WriteReviewStyle}>
              Add photos to your review
            </Text>
            <TouchableOpacity>
              <Image
                style={styles.addReviewIconStyle}
                source={Icons.addReview.addReview}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.SubmitSectionStyle}>
            <Text style={Styles.ButtonTitleStyle}>Submit </Text>
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

export default AddReviewScreen;
