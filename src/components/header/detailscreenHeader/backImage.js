import React from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { scale } from '../../../helper/scale';

class BackImage extends React.Component {
  render() {
    const { goBack } = this.props.navigation;
    return (
      <View style={{ margin: scale(22), justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity onPress={() => goBack()}>
          <Image source={require('../../../assets/img/back_icon.png')} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default withNavigation(BackImage);
