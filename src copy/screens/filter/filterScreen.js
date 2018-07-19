import React from 'react';
import { View, Text } from 'react-native';
import { scale } from '../../helper/scale';
import BackImage from '../../components/header/detailscreenHeader/backImage';
import Colors from '../../helper/color';

class FilterScreen extends React.Component {
  static navigationOptions = {
    headerTitle: 'Filter',
    headerTitleStyle: {
      color: '#ffff',
      fontSize: scale(18),
      fontWeight: 'bold',
    },
    headerLeft: <BackImage />,
    headerStyle: {
      backgroundColor: Colors.primaryColor,
      height: scale(48),
      width: '100%',
    },
  };
  render() {
    return (
      <View>
        <Text>FilterScreen</Text>
      </View>
    );
  }
}

export default FilterScreen;
