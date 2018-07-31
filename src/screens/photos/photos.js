import React from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import Service from "../../services/services";
import { scale } from "../../helper/scale";
import BackImage from "../../components/header/detailscreenHeader/backImage";
import Colors from "../../helper/color";
import { Icons } from "../../assets/img/index";
import PhotoCard from "../../components/cards/photoCard";

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
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      photo: {}
    };
  }
  componentDidMount = () => {
    Service.getPhotos(this.props.navigation.getParam("data"))
      .then(response => {
        console.log("photos", response.response.photos.items);

        this.setState({
          photos: response.response.photos.items
        });
        // for (i = 0; i < 5; i++) {
        //   console.log("pics")
        // }
      })

      .catch(error => {
        console.error(error);
      });
  };
  renderContent = () => {
    const { photos } = this.state;
    return (
      <FlatList
        data={photos}
        numColumns={3}
        columnWrapperStyle={{
          borderTopWidth: scale(3),
          borderColor: Colors.black,
          borderLeftWidth: scale(3),
          borderRightWidth: scale(3)
        }}
        renderItem={({ item }) => {
          return <PhotoCard item={item} key={item.id} />;
          //return <Text>{item.suffix}</Text>;
        }}
      />
    );
  };
  render() {
    const { photos } = this.state;
    return <View>{photos.length != 0 && this.renderContent()}</View>;
  }

  // render() {
  //   return (
  //     <View style={styles.PhotoSection}>
  //       <Text>Photos</Text>
  //     </View>
  //   );
  // }
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
