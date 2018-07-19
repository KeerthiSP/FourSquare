import React from "react";
import { Image, View, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";
import { scale } from "../../helper/scale";
import { Icons } from "../../assets/img/index";

class TabsHeader extends React.Component {
  render() {
    return (
      <View style={{ flexDirection: "row", flex: 1, paddingLeft: scale(22) }}>
        <View style={{ alignItems: "flex-start", flex: 4 }}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.openDrawer();
            }}
          >
            <Image source={Icons.tabsHeader.menuIcon} />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 4, alignItems: "center" }}>
          <Image source={Icons.tabsHeader.logo} />
        </View>
        <View style={{ flex: 2, alignItems: "flex-end" }}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("filter");
            }}
          >
            <Image source={Icons.tabsHeader.filterIcon} />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 2, alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("search");
            }}
          >
            <Image source={Icons.tabsHeader.searchIcon} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default withNavigation(TabsHeader);
