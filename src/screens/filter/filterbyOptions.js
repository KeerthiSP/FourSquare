import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight
} from "react-native";
import { ButtonGroup } from "react-native-elements";
import { scale } from "../../helper/scale";
import BackImage from "../../components/header/detailscreenHeader/backImage";
import Colors from "../../helper/color";
import { Strings } from "../../components/constents";

class FilterbyOptions extends React.Component {
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

  render() {
    // const component1 = () => (
    //   <Icon
    //     name="rupee"
    //     type="font-awesome"
    //     color={Colors.subtitle}
    //     size={scale(16)}
    //     containerStyle={{ backgroundColor: "red", height:scale }}
    //     iconStyle={{ activetintColor: "red" }}

    //     //onPress={() => console.log("hello")}
    //   />
    // );
    // const component1 = () => <Text>{"\u20B9"}</Text>;
    //const component1 = () => <Image source={Icons.filter.ruppe1} />;
    // const component2 = () => <Image source={Icons.filter.ruppe2} />;
    // const component3 = () => <Image source={Icons.filter.ruppe3} />;
    // const component4 = () => <Image source={Icons.filter.ruppe4} />;
    // const buttons = [
    //   { element: component1 },
    //   { element: component2 },
    //   { element: component3 },
    //   { element: component4 }
    // ];
    // let rupee = "\u20B9";
    const buttons = [
      Strings.filter.rupee1,
      Strings.filter.rupee2,
      Strings.filter.rupee3,
      Strings.filter.rupee4

      //  Strings.filter.popular,
      //   Strings.filter.distance,
      //   Strings.filter.rating
    ];
    const { selectedIndex } = this.state;

    return (
      <ButtonGroup
        onPress={this.updateIndex}
        selectedIndex={selectedIndex}
        buttons={buttons}
        innerBorderStyle={{ width: scale(1), color: Colors.subtitle }}
        containerStyle={styles.ContainerStyle}
        buttonStyle={styles.ButtonStyle}
        textStyle={{ fontSize: scale(15.75), color: Colors.subtitle }}
        selectedTextStyle={{
          color: Colors.white
        }}
        selectedButtonStyle={styles.selectedButtonStyle}
        //multiselection={true}
        disableSelected={true}
      />
    );
  }
}

export default FilterbyOptions;

const styles = StyleSheet.create({
  ButtonStyle: {
    borderColor: Colors.subtitle,
    borderBottomWidth: scale(2),
    borderTopWidth: scale(1.2)
  },
  ContainerStyle: {
    height: scale(50),
    width: "101%",
    alignSelf: "center"
  },
  selectedButtonStyle: {
    backgroundColor: Colors.subtitle
  }
});
