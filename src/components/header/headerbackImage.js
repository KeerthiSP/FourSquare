import React from 'react';
import { Image, View } from 'react-native';
import { scale } from '../../helper/scale';

class HeadrebackImage extends React.Component {
  render() {
    return (
      <View style={{ margin: scale(22), paddingBottom: scale(50) }}>
        <Image source={require('../../assets/img/back_icon.png')} />
      </View>
    );
  }
}

export default HeadrebackImage;
