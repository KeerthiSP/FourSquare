import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight
} from "react-native";
import { ButtonGroup } from "react-native-elements";
import { scale } from "../../helper/scale";
import BackImage from "../../components/header/detailscreenHeader/backImage";
import Colors from "../../helper/color";
import { Strings } from "../../components/constents";

class SortbyOptions extends React.Component {
  static navigationOptions = {
    headerTitle: "Filter",
    headerTitleStyle: {
      color: "#ffff",
      fontSize: scale(18),
      fontWeight: "bold"
    },
    headerLeft: <BackImage />,
    headerStyle: {
      backgroundColor: Colors.primaryColor,
      height: scale(48),
      width: "100%"
    }
  };

  constructor() {
    super();
    this.state = {
      selectedIndex: 2
    };
    this.updateIndex = this.updateIndex.bind(this);
  }

  updateIndex(selectedIndex) {
    this.setState({ selectedIndex });
  }
  //   const component1 = () => <Text>Hello</Text>
  // const component2 = () => <Text>World</Text>
  // const component3 = () => <Text>ButtonGroup</Text>

  render() {
    // const buttons = [{ element: component1 }, { element: component2 }, { element: component3 }]

    const buttons = [
      Strings.filter.popular,
      Strings.filter.distance,
      Strings.filter.rating
    ];
    const { selectedIndex } = this.state;

    return (
      <ButtonGroup
        onPress={this.updateIndex}
        selectedIndex={selectedIndex}
        buttons={buttons}
        innerBorderStyle={{ width: scale(0), color: Colors.subtitle }}
        containerStyle={{
          height: scale(50),
          width: "101%",
          alignSelf: "center",
          marginTop: scale(15),
          marginBottom: scale(15)
        }}
        buttonStyle={{
          borderColor: Colors.subtitle,
          borderBottomWidth: scale(1),
          borderTopWidth: scale(1)
        }}
        textStyle={{ fontSize: scale(15.75), color: Colors.subtitle }}
        selectedTextStyle={{
          color: Colors.white
        }}
        selectedButtonStyle={{
          backgroundColor: Colors.subtitle
        }}
      />
    );
  }
}

export default SortbyOptions;
