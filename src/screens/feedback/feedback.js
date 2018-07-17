//using this screen to check Api hitting just for now

import React from "react";
import { View, Text, FlatList, Image } from "react-native";
import Service from "../../services/services";
import Card from "../../components/cards/card";

class FeedbackScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      Value: [],
      id: []
    };
  }
  // static navigationOptions = {};

  componentDidMount = () => {
    Service.getVenueList()
      .then(response => {
        console.log("egfregtrh", response);
        console.log("qqqqq", response.response.venues);
        this.setState({
          restaurants: response.response.venues
          // id: response.response.venues.id
          //id: response.response.venues[0].id
        });
        //console.log("rest", restaurants);

        for (i in response.response.venues) {
          console.log("ssssss", response.response.venues[i].id);
          //let item = [response.response.venues[i].id];
          //  console.log("zjhdfga", item);

          // console.log("kkkkk", id);
          Service.getDetails(response.response.venues[i].id).then(response => {
            console.log("id", response);
            // console.log("id", response);
            this.setState({
              Value: response.response.venue.id
            });
            console.log("zzzzz", Value);
            // const Response:{
            //   id:{response}
            // }
          });
        }

        // this.setState({ Restaurents: response.data });
        // this.setState({ venue: response.data.response });
      })
      .catch(error => {
        console.error(error);
      });
  };

  // let Response:{
  //   id:{response}
  // }

  renderContent = () => {
    const { restaurants, Value } = this.state;
    //const { Value } = this.state;

    return (
      <FlatList
        data={[{ restaurants }, { Value }]}
        keyExtractor={(item, index) => item.id}
        renderItem={({ item, index }) => {
          let categories =
            item.categories.length > 0 ? item.categories[0] : null;
          let rating = Value.length > 0 ? Value : null;

          // {
          //   restaurants.categories.icon.prefix;
          // }
          return (
            <Card>
              <View>
                {/* <Image
                  style={{ width: 50, height: 50 }}
                  source={{
                    uri:
                      categories &&
                      categories.icon &&
                      categories.icon.prefix &&
                      categories.icon.suffix
                        ? categories.icon.prefix + categories.icon.suffix
                        : ""
                  }}
                /> */}
                <Text>
                  {categories &&
                  categories.icon &&
                  categories.icon.prefix &&
                  categories.icon.suffix
                    ? categories.icon.prefix + categories.icon.suffix
                    : ""}
                </Text>
                {/* <Text>{item.name}</Text> */}
                <Text>sfdasdf{rating}</Text>
              </View>
            </Card>
          );
        }}
      />
    );
  };
  // _keyExtractor = (item, index) => item.id;
  render() {
    const { restaurants } = this.state;

    // console.log(this.state.Restaurents);
    // console.log(this.state.venue);

    return <View>{restaurants.length != 0 && this.renderContent()}</View>;
  }
}

export default FeedbackScreen;
