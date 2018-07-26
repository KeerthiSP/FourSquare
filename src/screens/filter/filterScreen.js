import React from "react";
import { View, Text, StyleSheet, TextInput, ScrollView } from "react-native";
import { scale } from "../../helper/scale";
import { Strings } from "../../components/constents";
import BackImage from "../../components/header/detailscreenHeader/backImage";
import Colors from "../../helper/color";
import SortbyOptions from "./sortbyOptions";
import FilterbyOptions from "./filterbyOptions";
import Features from "./features";

class FilterScreen extends React.Component {
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
  render() {
    return (
      <ScrollView>
        <View style={styles.UpperView}>
          <Text style={styles.subTitleStyle}>{Strings.filter.sortby}</Text>
          <SortbyOptions />
          <Text style={styles.subTitleStyle}>{Strings.filter.filterby}</Text>
        </View>
        <View>
          <Text style={styles.SetRadius}>{Strings.filter.setRadius}</Text>
          <TextInput
            placeholder={Strings.filter.distance}
            underlineColorAndroid={null}
            style={{
              borderBottomWidth: scale(1),
              marginHorizontal: scale(22),
              fontSize: scale(16),
              borderColor: Colors.grey1,
              marginBottom: scale(20)
              //lineHeight: scale(10)
            }}
            selectionColor={Colors.black}
          />
          <View style={{}}>
            <FilterbyOptions />
            <View style={styles.Features}>
              <Text style={styles.subTitleStyle}>
                {Strings.filter.features}
              </Text>
            </View>
          </View>
        </View>
        <Features />
      </ScrollView>
    );
  }
}

export default FilterScreen;
const styles = StyleSheet.create({
  subTitleStyle: {
    color: Colors.grey,
    fontSize: scale(16),
    marginLeft: scale(22),
    justifyContent: "center"
  },
  UpperView: {
    height: scale(142),
    backgroundColor: Colors.grey4,
    justifyContent: "center"
  },
  SetRadius: {
    fontSize: scale(12),
    color: Colors.grey1,
    marginTop: scale(32),
    marginLeft: scale(22),
    marginBottom: scale(10)
  },
  Features: {
    position: "absolute",
    height: scale(46),
    width: "100%",
    justifyContent: "center",
    backgroundColor: Colors.grey4,
    marginTop: scale(55)
  }
});
