import React from 'react';
import { Text, View } from 'react-native';
import { scale } from '../../helper/scale';

class FilterscreenHeader extends React.Component {
  render() {
    return (
      <View>
        <Text style={{ color: '#ffff', fontSize: scale(18), fontWeight: 'bold' }}>Filter</Text>
      </View>
    );
  }
}
export default FilterscreenHeader;
