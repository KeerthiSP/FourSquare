import React from "react";
import { Image, View, TextInput, StyleSheet } from "react-native";
import { scale } from "../../helper/scale";
import SearchbarCard from "../cards/searchbarCard";
import { Icons } from "../../assets/img/index";
import Colors from "../../helper/color";

class SearchScreenTitle extends React.Component {
  render() {
    return (
      <View style={{ flexDirection: "column" }}>
        <View style={{ flexDirection: "row" }}>
          <SearchbarCard>
            <View style={styles.ImageStyle}>
              <Image source={Icons.searchHeader.searchIcon} />
            </View>
            <View>
              <TextInput
                style={styles.InputTextStyle}
                placeholder="Search"
                selectionColor="black"
              />
            </View>
          </SearchbarCard>
        </View>
        <View style={{ flexDirection: "row", marginTop: scale(8) }}>
          <SearchbarCard>
            <View style={styles.ImageStyle}>
              <Image source={Icons.searchHeader.nearMeIcon} />
            </View>
            <View>
              <TextInput
                style={styles.InputTextStyle}
                underlineColorAndroid="transparent"
                placeholder="Near Me"
                selectionColor="black"
              />
            </View>
          </SearchbarCard>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ImageStyle: {
    margin: scale(10),
    alignItems: "center"
  },
  InputTextStyle: {
    flex: 1,
    paddingLeft: scale(5),
    fontSize: scale(16),
    color: Colors.grey1
  }
});
export default SearchScreenTitle;
