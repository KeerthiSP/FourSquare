import React from "react";
import { Text, View, Image, ScrollView } from "react-native";
import { withNavigation } from "react-navigation";
import { scale } from "../../helper/scale";
import Service from "../../services/services";
import { Icons } from "../../assets/img/index";
import DetailCard from "../../components/cards/detailCard";
import HeaderRight from "../../components/header/detailscreenHeader/headerRight";

export default class DetailScreen extends React.Component {
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
      // backgroundColor: "rgba(0, 0, 0, 0.1)",
      //headerTransparent: true
      //position: "absolute",
      marginTop: scale(28)
    },
    height: scale(48),
    width: "100%"
  };

  constructor(props) {
    super(props);
    this.state = {
      Value: []
    };
  }
  // const { navigation } = this.props;
  //   const itemId = navigation.getParam('data', 'NO-ID');

  componentDidMount = () => {
    Service.getDetails(this.props.navigation.getParam("data"))
      .then(response => {
        console.log("id", response);

        this.setState({
          Value: response.response.venue
        });
      })

      .catch(error => {
        console.error(error);
      });
  };

  renderItems() {
    const Data = this.state.Value;
    if (Data === null) {
      return <View />;
    }

    return <DetailCard key={Data.id} Data={Data} />;
  }

  render() {
    console.log(this.state);
    return <ScrollView>{this.renderItems()}</ScrollView>;
  }
}
