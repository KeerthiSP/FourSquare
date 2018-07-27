import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import SelectMultiple from "react-native-select-multiple";
import { Strings } from "../../components/constents";
import { scale } from "../../helper/scale";
import { Icons } from "../../assets/img";
import Colors from "../../helper/color";

const features = [
  Strings.filter.featureList._1,
  Strings.filter.featureList._2,
  Strings.filter.featureList._3,
  Strings.filter.featureList._4,
  Strings.filter.featureList._5,
  Strings.filter.featureList._6,
  Strings.filter.featureList._7,
  Strings.filter.featureList._8
];
// --- OR ---
// const fruits = [
//   { label: 'Apples', value: 'appls' },
//   { label: 'Oranges', value: 'orngs' },
//   { label: 'Pears', value: 'pears' }
// ]

const renderLabel = (label, style) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <View style={{ marginRight: 100, position: "absolute" }}>
        <Text style={style}>{label}</Text>
      </View>
    </View>
  );
};

class Feature extends Component {
  state = { selectedFeatures: [] };

  onSelectionsChange = selectedFeatures => {
    // selectedFruits is array of { label, value }
    this.setState({ selectedFeatures });
  };

  render() {
    return (
      <View>
        <SelectMultiple
          checkboxStyle={{
            width: scale(20),
            height: scale(20),
            // borderWidth: scale(8),
            // borderRadius: scale(15),
            marginLeft: scale(320),
            position: "absolute"
          }}
          items={features}
          renderLabel={renderLabel}
          style={{ marginTop: scale(40) }}
          rowStyle={{ height: scale(56) }}
          labelStyle={{ color: Colors.grey3, fontSize: scale(16) }}
          selectedItems={this.state.selectedFeatures}
          onSelectionsChange={this.onSelectionsChange}
          checkboxSource={Icons.filter.filterUnSelected}
          selectedCheckboxSource={Icons.filter.filterSelected}
        />
      </View>
    );
  }
}
export default Feature;
