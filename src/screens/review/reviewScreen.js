import React from "react";
import { View, Text, ScrollView, FlatList } from "react-native";
import { scale } from "../../helper/scale";
import Colors from "../../helper/color";
import BackImage from "../../components/header/detailscreenHeader/backImage";
import AddReviewHeadreRight from "../../components/header/addReviewHeaderRight";
import Service from "../../services/services";
import ReviewCard from "../../components/cards/reviewCard";

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
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    };
  }

  componentDidMount = () => {
    Service.getReviews(this.props.navigation.getParam("data"))
      .then(response => {
        console.log("review", response.response.tips.items);

        this.setState({
          reviews: response.response.tips.items
        });
      })

      .catch(error => {
        console.error(error);
      });
  };

  renderContent = () => {
    const { reviews } = this.state;
    return (
      <FlatList
        data={reviews}
        renderItem={({ item }) => {
          return <ReviewCard item={item} key={item.id} />;
        }}
      />
    );
  };
  render() {
    const { reviews } = this.state;
    return <View>{reviews.length != 0 && this.renderContent()}</View>;
  }
}

export default ReviewScreen;
