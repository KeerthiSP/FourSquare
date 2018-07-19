import React from "react";
import { View, FlatList } from "react-native";
import { withNavigation } from "react-navigation";
import Card from "../../components/cards/card";
import Service from "../../services/services";
import Styles from "../../helper/styles";

class CoffeeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      Value: []
    };
  }

  componentDidMount = () => {
    Service.getCoffeeShopList()
      .then(response => {
        console.log("egfregtrh", response);
        console.log("qqqqq", response.response.venues);
        this.setState({
          restaurants: response.response.venues
        });

        for (i = 0; i < 1; i++) {
          console.log("ssssss", response.response.venues[i].id);
          Service.getDetails(response.response.venues[i].id).then(response => {
            console.log("id", response);

            this.setState({
              Value: response.response.venue
            });
          });
        }
      })
      .catch(error => {
        console.error(error);
      });
  };
  renderContent = () => {
    const { restaurants, Value } = this.state;
    return (
      <View>
        <FlatList
          data={restaurants}
          extraData={Value}
          keyExtractor={(item, index) => item.id}
          renderItem={restaurants => {
            return (
              <View>
                <Card
                  item={restaurants.item}
                  details={Value}
                  key={restaurants.item.id}
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

export default withNavigation(CoffeeScreen);
