import React from "react";
import ScrollableTabView from "react-native-scrollable-tab-view";
import CustomTabBar from "./CustomTabBar";
import { scale } from "../helper/scale";
import TabsHeader from "../components/header/tabsHeader";
import Colors from "../helper/color";
import NearbyScreen from "../screens/home/homeScreen";
import ToppickScreen from "../screens/toppick/toppickScreen";
import PopularScreen from "../screens/popular/popularScreen";
import LunchScreen from "../screens/lunch/lunchScreen";
import CoffeeScreen from "../screens/coffee/coffeeScreen";
import FavouritesScreen from "../screens/favourites/favouritesScreen";

class Tabs extends React.Component {
  static navigationOptions = {
    headerTitle: <TabsHeader />,
    borderBottomColor: "transparent",
    headerStyle: {
      backgroundColor: Colors.primaryColor,
      height: scale(48),
      width: "100%"
    },
    headerTintColor: "green",
    headerTitleStyle: {
      fontWeight: "bold",
      fontSize: scale(10)
    }
  };
  render() {
    return (
      <ScrollableTabView renderTabBar={() => <CustomTabBar />}>
        <NearbyScreen tabLabel="Near you" />
        <ToppickScreen tabLabel="Toppick" />
        <PopularScreen tabLabel="Popular" />
        <LunchScreen tabLabel="Lunch" />
        <CoffeeScreen tabLabel="Coffee" />
        <FavouritesScreen tabLabel="Favourites" />
      </ScrollableTabView>
    );
  }
}
export default Tabs;
