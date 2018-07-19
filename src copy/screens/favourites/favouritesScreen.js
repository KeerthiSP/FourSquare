import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { withNavigation } from "react-navigation";
import Card from "../../components/cards/card";
import PhotoCardSection from "../../components/cards/photoCardSection";
import CardSection from "../../components/cards/cardSection";
import FavouritesScreenTitle from "../../components/header/favouritesScreenTitle";
import Colors from "../../helper/color";
import { scale } from "../../helper/scale";
import BacktoHome from "../../components/header/backtoHome";
import HeaderFilterIcon from "../../components/header/headerFilterIcon";

class FavouritesScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <FavouritesScreenTitle />,
    headerStyle: {
      backgroundColor: Colors.primaryColor,
      height: scale(96)
    },
    headerLeft: (
      <View style={{ marginBottom: scale(50) }}>
        <BacktoHome />
      </View>
    ),
    headerRight: <HeaderFilterIcon />
  };

  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("detail");
          }}
        >
          {/* <Card>
            <View style={{ flexDirection: 'row' }}>
              <PhotoCardSection />
              <CardSection />
            </View>
          </Card> */}
          <Text>FavouritesScreen</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default withNavigation(FavouritesScreen);
