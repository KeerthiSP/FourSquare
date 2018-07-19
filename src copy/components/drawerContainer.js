import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { scale } from "../helper/scale";
import { NavigationActions, withNavigation } from "react-navigation";
import { Icons } from "../assets/img/index";
import { Strings } from "../components/constents";

class DrawerContainer extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ position: "absolute", width: "100%", height: "100%" }}
          source={Icons.drawer.backgroundImage}
        />

        <View style={{ flex: 2 }} />
        <View style={styles.DrawerSectionStyle}>
          <View style={styles.ContentArrangment}>
            <Image
              source={Icons.drawer.favouritesIcon}
              style={styles.DrawerIconStyle}
            />
            <View>
              <Text
                onPress={() => {
                  this.props.navigation.navigate("Favourites");
                }}
                style={styles.DrawerItemStyle}
              >
                {Strings.drawerLables.favourites}
              </Text>
            </View>
          </View>
          <View style={styles.ContentArrangment}>
            <Image
              source={Icons.drawer.feedbackIcon}
              style={styles.DrawerIconStyle}
            />
            <View>
              <Text
                onPress={() => {
                  this.props.navigation.navigate("Feedback");
                }}
                style={styles.DrawerItemStyle}
              >
                {Strings.drawerLables.feedback}
              </Text>
            </View>
          </View>
          <View style={styles.ContentArrangment}>
            <Image
              source={Icons.drawer.aboutIcon}
              style={styles.DrawerIconStyle}
            />
            <View>
              <Text
                onPress={() => {
                  this.props.navigation.navigate("About");
                }}
                style={styles.DrawerItemStyle}
              >
                {Strings.drawerLables.about}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  DrawerItemStyle: {
    fontSize: scale(16),
    fontWeight: "bold",
    color: "silver",
    marginLeft: scale(15),
    textAlign: "center"
  },
  DrawerIconStyle: {
    tintColor: "#fff",
    marginLeft: scale(15)
  },
  DrawerSectionStyle: {
    flex: 6,
    justifyContent: "flex-start",
    flexDirection: "column"
  },
  ContentArrangment: {
    flexDirection: "row",
    marginTop: scale(30),
    paddingBottom: scale(30),
    borderBottomWidth: scale(2),
    marginHorizontal: scale(20),
    borderBottomColor: "rgba(105,105,105,0.5)"
  }
});

export default withNavigation(DrawerContainer);
