import React from 'react';
import { Image, View, Text, TextInput, StyleSheet } from 'react-native';
import { scale } from '../../helper/scale';
import SearchbarCard from '../cards/searchbarCard';

class FavouritesScreenHeader extends React.Component {
  render() {
    return (
      <View style={{ alignItems: 'center' }}>
        <View style={{ justifyContent: 'center' }}>
          <Text style={styles.TitleTextStyle}>Favourites</Text>
        </View>
        <SearchbarCard>
          <View style={styles.ImageStyle}>
            <Image source={require('../../assets/img/serch_hdpi.png')} />
          </View>
          <View>
            <TextInput
              style={styles.InputTextStyle}
              underlineColorAndroid="transparent"
              placeholder="City Name"
              selectionColor="black"
              //   onChangeText={text => this.searchItemFromTheArray(text)}
              //   value={this.state.text}
            />
          </View>
        </SearchbarCard>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ImageStyle: {
    margin: scale(10),
    alignItems: 'center',
  },
  InputTextStyle: {
    flex: 1,
    paddingLeft: scale(5),
    fontSize: scale(16),
    color: '#cacaca',
  },
  TitleTextStyle: {
    fontSize: scale(17),
    color: '#FFF',
    marginBottom: scale(20),
  },
});
export default FavouritesScreenHeader;
