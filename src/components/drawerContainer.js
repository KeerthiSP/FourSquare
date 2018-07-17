import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { scale } from "../helper/scale";
import { NavigationActions, withNavigation } from "react-navigation";
import { Icons } from "../assets/img/index";

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
            <Text
              onPress={() => {
                this.props.navigation.navigate("Favourites");
              }}
              style={styles.DrawerItemStyle}
            >
              Favourites
            </Text>
          </View>
          <View style={styles.ContentArrangment}>
            <Image
              source={Icons.drawer.feedbackIcon}
              style={styles.DrawerIconStyle}
            />
            <Text
              onPress={() => {
                this.props.navigation.navigate("Feedback");
              }}
              style={styles.DrawerItemStyle}
            >
              Feedback
            </Text>
          </View>
          <View style={styles.ContentArrangment}>
            <Image
              source={Icons.drawer.aboutIcon}
              style={styles.DrawerIconStyle}
            />
            <Text
              onPress={() => {
                this.props.navigation.navigate("About");
              }}
              style={styles.DrawerItemStyle}
            >
              About
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    // backgroundColor: '#f6f6f6',
    // marginTop: 40,
    // paddingHorizontal: 20,
  },

  DrawerItemStyle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "silver",
    // padding: 15,
    marginLeft: 15,
    // borderRadius: 2,
    // borderColor: '#E73536',
    // borderWidth: 1,
    textAlign: "center"
  },
  DrawerIconStyle: {
    tintColor: "#fff",
    marginLeft: 15
  },
  DrawerSectionStyle: {
    flex: 6,
    justifyContent: "flex-start",
    flexDirection: "column"
  },
  ContentArrangment: {
    flexDirection: "row",
    marginTop: scale(30),
    // marginBottom: scale(20),
    paddingBottom: scale(30),
    borderBottomWidth: scale(2),
    marginHorizontal: scale(20),
    borderBottomColor: "rgba(105,105,105,0.5)"
  }
});

export default withNavigation(DrawerContainer);
