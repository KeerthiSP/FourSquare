import React from "react";
import { StyleSheet, View } from "react-native";
import Stars from "react-native-stars";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

class AddToFavorites extends React.Component {
  render() {
    return (
      <View style={{ alignItems: "center" }}>
        <Stars
          rating={2.4}
          count={5}
          starSize={40}
          half={true}
          fullStar={<Icon name={"star"} style={[styles.myStarStyle]} />}
          emptyStar={
            <Icon
              name={"star-outline"}
              style={[styles.myStarStyle, styles.myEmptyStarStyle]}
            />
          }
          halfStar={<Icon name={"star-half"} style={[styles.myStarStyle]} />}
        />
      </View>
    );
  }
}
export default AddToFavorites;

const styles = StyleSheet.create({
  myStarStyle: {
    color: "yellow",
    backgroundColor: "transparent",
    textShadowColor: "black",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2
  },
  myEmptyStarStyle: {
    color: "white"
  }
});

// import React from "react";
// import { View } from "react-native";
// import { Rating } from "react-native-elements";
// import { scale } from "../../helper/scale";
// import Colors from "../../helper/color";
// import Star from "react-native-star-view";

// class AddToFavorites extends React.Component {
//   render() {
//     const starStyle = {
//       width: 100,
//       height: 20,
//       marginBottom: 20
//     };
//     return (
//       <View>
//         <Rating
//           //showRating
//           type="star"
//           fractions={1}
//           startingValue={3.3}
//           readonly
//           imageSize={20}
//           style={{ paddingHorizontal: scale(20) }}
//           ratingBackgroundColor="#000000"
//         />
//         <Star score={4.2} style={starStyle} />
//       </View>
//     );
//   }
// }

// export default AddToFavorites;
// // import React, { Component } from "react";
// // import { View, Text, Image } from "react-native";
// // import SelectMultiple from "react-native-select-multiple";
// // import { Strings } from "../../components/constents";
// // import { scale } from "../../helper/scale";
// // import { Icons } from "../../assets/img";
// // import Colors from "../../helper/color";

// // const features = [
// //   " "
// //   //   Strings.filter.featureList._2,
// //   //   Strings.filter.featureList._3,
// //   //   Strings.filter.featureList._4,
// //   //   Strings.filter.featureList._5,
// //   //   Strings.filter.featureList._6,
// //   //   Strings.filter.featureList._7,
// //   //   Strings.filter.featureList._8
// // ];
// // // --- OR ---
// // // const fruits = [
// // //   { label: 'Apples', value: 'appls' },
// // //   { label: 'Oranges', value: 'orngs' },
// // //   { label: 'Pears', value: 'pears' }
// // // ]

// // const renderLabel = (label, style) => {
// //   return (
// //     <View style={{ flexDirection: "row", alignItems: "center" }}>
// //       <View style={{ marginRight: 100, position: "absolute" }}>
// //         <Text style={style}>{label}</Text>
// //       </View>
// //     </View>
// //   );
// // };

// // class AddToFavorites extends Component {
// //   state = { selectedFeatures: [] };

// //   onSelectionsChange = selectedFeatures => {
// //     // selectedFruits is array of { label, value }
// //     this.setState({ selectedFeatures });
// //   };

// //   render() {
// //     return (
// //       <View>
// //         <SelectMultiple
// //           checkboxStyle={{
// //             width: scale(24),
// //             height: scale(24),
// //             // borderWidth: scale(8),
// //             // borderRadius: scale(15),
// //             position: "absolute"
// //           }}
// //           items={features}
// //           renderLabel={renderLabel}
// //           rowStyle={{
// //             height: scale(24),
// //             width: scale(24),
// //             borderWidth: scale(3)
// //           }}
// //           selectedItems={this.state.selectedFeatures}
// //           onSelectionsChange={this.onSelectionsChange}
// //           checkboxSource={Icons.home.favouritesIconSelected}
// //           selectedCheckboxSource={Icons.home.favouritesIcon}
// //         />
// //       </View>
// //     );
// //   }
// // }
// // export default AddToFavorites;
