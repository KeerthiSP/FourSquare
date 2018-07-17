import React from "react";
import { View, Text } from "react-native";
import { scale } from "../../helper/scale";
import SearchScreenTitle from "../../components/header/searchScreenTitle";
import HeadrebackImage from "../../components/header/headerbackImage";
import HeaderFilterIcon from "../../components/header/headerFilterIcon";
import Colors from "../../helper/color";

class SearchScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <SearchScreenTitle />,
    headerBackImage: <HeadrebackImage style={{ paddingLeft: scale(10) }} />,
    headerStyle: {
      backgroundColor: Colors.primaryColor,
      height: scale(96),
      width: "100%"
    },
    headerRight: <HeaderFilterIcon />
  };
  render() {
    return (
      <View>
        <Text>SearchScreen</Text>
      </View>
    );
  }
}

export default SearchScreen;
