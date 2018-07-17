import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { withNavigation } from "react-navigation";
import Card from "../../components/cards/card";
import PhotoCardSection from "../../components/cards/photoCardSection";
import CardSection from "../../components/cards/cardSection";

class ToppickScreen extends React.Component {
  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("detail");
          }}
        >
          <Text>ToppickScreen</Text>
          {/* <Card>
            <View style={{ flexDirection: 'row' }}>
              <PhotoCardSection />
              <CardSection />
            </View>
          </Card> */}
        </TouchableOpacity>
      </View>
    );
  }
}

export default withNavigation(ToppickScreen);
