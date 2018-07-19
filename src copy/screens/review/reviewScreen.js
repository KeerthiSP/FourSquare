import React from "react";
import { View, Text, ScrollView } from "react-native";
import { scale } from "../../helper/scale";
import Colors from "../../helper/color";
import BackImage from "../../components/header/detailscreenHeader/backImage";
import AddReviewHeadreRight from "../../components/header/addReviewHeaderRight";

class ReviewScreen extends React.Component {
  static navigationOptions = {
    headerLeft: <BackImage />,
    headerRight: <AddReviewHeadreRight />,
    headerTintColor: "white",
    headerTitleStyle: {
      fontSize: scale(24)
    },
    headerStyle: {
      backgroundColor: Colors.primaryColor,
      height: scale(48),
      width: "100%"
    }
  };
  render() {
    return (
      <View
        style={{
          width: scale(328),
          height: scale(132),
          borderColor: Colors.grey,
          borderBottomWidth: scale(1),
          flexDirection: "row",
          marginVertical: scale(22)
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
          />
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
              Shahista
            </Text>
            <ScrollView>
              <Text
                style={{
                  fontSize: scale(13),
                  color: "#1D1D26",
                  // textAlign: 'justify',
                  lineHeight: scale(19)
                }}
              >
                Must try crab soup and oyesters cooked in ghee!!
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

export default ReviewScreen;
