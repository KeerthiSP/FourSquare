import { createStackNavigator, createDrawerNavigator } from "react-navigation";
import Tabs from "../components/tabs";
import FilterScreen from "../screens/filter/filterScreen";
import SearchScreen from "../screens/search/searchScreen";
import DetailScreen from "../screens/detail/detailScreen";
import AddReviewScreen from "../screens/addReview/addReviewScreen";
import ReviewScreen from "../screens/review/reviewScreen";
import RatingScreen from "../screens/rating/ratingScreen";
import PhotosScreen from "../screens/photos/photos";
import Favourites from "../screens/favourites/favouritesScreen";
import FeedbackScreen from "../screens/feedback/feedback";
import AboutusScreen from "../screens/aboutus/aboutus";
import DrawerContainer from "../components/drawerContainer";
import PhotosDetails from "../screens/photos/photosDetails";
import { scale } from "../helper/scale";

const AppStack = createStackNavigator(
  {
    tabs: {
      screen: Tabs
    },
    filter: {
      screen: FilterScreen
    },
    search: {
      screen: SearchScreen
    },
    detail: {
      screen: DetailScreen
    },
    addReview: {
      screen: AddReviewScreen
    },
    review: {
      screen: ReviewScreen
    },
    rating: {
      screen: RatingScreen
    },
    photos: {
      screen: PhotosScreen
    },
    About: {
      screen: AboutusScreen
    },
    Favourites: {
      screen: Favourites
    },
    Feedback: {
      screen: FeedbackScreen
    },
    photosDetails: {
      screen: PhotosDetails
    }
  },
  { mode: "modal" }
);

const NavigationScreens = createDrawerNavigator(
  {
    AppStack: {
      screen: AppStack
    }
  },
  {
    drawerPosition: "left",
    useNativeAnimations: true,
    contentComponent: DrawerContainer,
    contentOptions: {
      activeTintColor: "#fff",
      activeBackgroundColor: "transparent",
      inactiveTintColor: "#A9A9A9"
    },
    drawerWidth: scale(300)
  }
);

export default NavigationScreens;
