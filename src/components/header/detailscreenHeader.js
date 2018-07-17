import React from 'react';
import { View, Image } from 'react-native';

class DetailscreenHeader extends React.Component {
  render() {
    return (
      <View>
        <Image source={require('../../assets/img/share_icon.png')} />
      </View>
    );
  }
}
export default DetailscreenHeader;
