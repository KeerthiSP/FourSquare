import React from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { scale } from '../../helper/scale';

class AddReviewHeadreRight extends React.Component {
  render() {
    return (
      <View style={{ alignItems: 'center', margin: scale(20) }}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('addReview');
          }}
        >
          <Image source={require('../../assets/img/add_review.png')} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default withNavigation(AddReviewHeadreRight);
