import React from "react";
import { Text, View, Image } from "react-native";
import { scale } from "../../helper/scale";
import Service from "../../services/services";
import { Icons } from "../../assets/img/index";
import HeaderRight from "../../components/header/detailscreenHeader/headerRight";
import PhotoDetailCard from "../../components/cards/photoDetailCard";

export default class PhotosDetails extends React.Component {
  static navigationOptions = {
    headerTransparent: true,
    headerBackImage: (
      <Image
        style={{ margin: scale(22), marginTop: scale(10) }}
        source={Icons.details.backArrow}
      />
    ),
    headerRight: <HeaderRight />,
    headerStyle: {
      marginTop: scale(28)
    },
    height: scale(48),
    width: "100%"
  };

  constructor(props) {
    super(props);
    this.state = {
      photosDetails: []
    };
  }

  componentDidMount = () => {
    Service.getPhotosDetails(this.props.navigation.getParam("data"))
      .then(response => {
        console.log("PhotoDetails", response.response.photo);

        this.setState({
          photosDetails: response.response.photo
        });
      })

      .catch(error => {
        console.error(error);
      });
  };

  renderItems() {
    const details = this.state.photosDetails;
    if (details === null) {
      return <View />;
    }

    return <PhotoDetailCard key={details.id} photoDetails={details} />;
  }

  render() {
    console.log(this.state);
    return this.renderItems();
  }
}
