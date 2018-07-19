import React from 'react';
import StarRating from 'react-native-star-rating';

class CustomStarRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      starCount: 2,
    };
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating,
    });
  }

  render() {
    return (
      <StarRating
        disabled={false}
        imageSize={10}
        emptyStar={require('../assets/img/rating_icon_unselected2x.png')}
        fullStar={require('../assets/img/rating_icon_selected2x.png')}
        // halfStar="ios-star-half"
        // iconSet="Ionicons"
        maxStars={5}
        rating={this.state.starCount}
        selectedStar={rating => this.onStarRatingPress(rating)}
        fullStarColor="red"
      />
    );
  }
}

export default CustomStarRating;
