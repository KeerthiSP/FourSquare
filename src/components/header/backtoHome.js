import React from 'react';
import { withNavigation } from 'react-navigation';
import { Image, View, TouchableOpacity } from 'react-native';
import { scale } from '../../helper/scale';

class BacktoHome extends React.Component {
  render() {
    return (
      <View style={{ margin: scale(22) }}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('tabs');
          }}
        >
          <Image source={require('../../assets/img/back_icon.png')} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default withNavigation(BacktoHome);
