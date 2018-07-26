import React from "react";
import { View, FlatList, Text } from "react-native";
import { withNavigation } from "react-navigation";
import Card from "../../components/cards/card";
import Service from "../../services/services";
import Styles from "../../helper/styles";

class NearbyScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      value: {},
      DATA: {}
    };
  }

  componentDidMount = () => {
    Service.getVenueList()
      .then(response => {
        console.log("egfregtrh", response);
        console.log("qqqqq", response.response.venues);

        //ID = { idLIST: response.response.venues };

        // console.log("Venue_Id", ID);
        this.setState({
          restaurants: response.response.venues
        });

        for (i = 0; i < 5; i++) {
          console.log("ssssss", response.response.venues[i].id);
          Service.getDetails(response.response.venues[i].id).then(response => {
            console.log("id", response);
            const { value } = this.state;
            console.log(response.response.venue.id);
            value[response.response.venue.id] = response.response.venue;
            console.log(value);
            this.setState({
              value: value
            });
          });
        }
      })

      .catch(error => {
        console.error(error);
      });
  };
  renderContent = () => {
    const { restaurants, value } = this.state;
    console.log("Restaurants", restaurants);
    console.log("value", value);
    let name = value[restaurants.id] ? value[restaurants.id] : "NAME";
    return (
      <View>
        <View style={Styles.home.MapSectionStyle} />
        <FlatList
          data={restaurants}
          extraData={value}
          keyExtractor={(item, index) => item.id}
          renderItem={({ item }) => {
            return (
              <View>
                {/* <Text>{item.id}</Text> */}
                <Card
                  item={item}
                  det={
                    value.length != 0 && value[item.id]
                      ? value[item.id]
                      : "Null"
                  }
                  key={item.id}
                />
              </View>
            );
          }}
        />
      </View>
    );
  };

  render() {
    const { restaurants } = this.state;
    return <View>{restaurants.length != 0 && this.renderContent()}</View>;
  }
}

export default withNavigation(NearbyScreen);
