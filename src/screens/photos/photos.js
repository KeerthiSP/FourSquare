import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { scale } from "../../helper/scale";
import BackImage from "../../components/header/detailscreenHeader/backImage";
import Colors from "../../helper/color";
import { Icons } from "../../assets/img/index";

class PhotosScreen extends React.Component {
  static navigationOptions = {
    headerTitle: "Photos",
    headerRight: (
      <Image
        style={{ marginHorizontal: scale(20), marginBottom: scale(5) }}
        source={Icons.addPhotoIcon}
      />
    ),
    headerTitleStyle: {
      fontSize: 24,
      color: Colors.white,
      marginBottom: 5
    },
    headerLeft: <BackImage />,
    headerStyle: {
      backgroundColor: Colors.primaryColor,
      height: scale(48),
      width: "100%"
    }
  };
  render() {
    return (
      <View style={styles.PhotoSection}>
        <Text>Photos</Text>
      </View>
    );
  }
}

export default PhotosScreen;

const styles = StyleSheet.create({
  PhotoSection: {
    width: "30%",
    height: "20%",
    borderWidth: scale(2),
    borderColor: Colors.grey
  }
});
