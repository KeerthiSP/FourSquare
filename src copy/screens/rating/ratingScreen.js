import React from 'react';
import { withNavigation } from 'react-navigation';
import { View, Text, Image, TouchableOpacity } from 'react-native';
// import { Rating, AirbnbRating } from 'react-native-ratings';
import AirbnbRating from '../../ratingDefault/AirbnbRating';
import { scale } from '../../helper/scale';

class RatingScreen extends React.Component {
  static navigationOptions = {
    header: null,
    mode: 'modal',
    opacity: 0.1,
  };
  static cardStyle = { backgroundColor: 'transparent' };
  render() {
    const { goBack } = this.props.navigation;
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'transparent',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            flexDirection: 'column',
            borderColor: 'silver',
            borderTopWidth: scale(1),
            borderLeftWidth: scale(1),
            borderRightWidth: scale(1),
          }}
        >
          <View
            style={{
              backgroundColor: '#fff',
              flexDirection: 'column',
              borderWidth: scale(1),
              borderColor: 'silver',
              height: scale(330),
              width: scale(330),
            }}
          >
            <View style={{ flex: 4 }} />
            <View style={{ flex: 4 }}>
              <Text style={{ textAlign: 'center', fontSize: scale(20), fontWeight: 'bold' }}>
                Overall Rating
              </Text>
            </View>
            <View style={{ flex: 10 }}>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#3bb701',
                  fontSize: scale(30),
                  fontWeight: 'bold',
                }}
              >
                4.5
              </Text>
            </View>
            <View style={{ flex: 16, marginHorizontal: '15%' }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: scale(20),
                  lineHeight: scale(23),
                  fontWeight: 'bold',
                }}
              >
                How would you rate your experience?
              </Text>
            </View>
          </View>
          <View
            style={{
              height: scale(55),
              backgroundColor: '#fff',
              borderWidth: scale(1),
              borderColor: '#cacaca',
              justifyContent: 'center',
            }}
          >
            <Text
              style={{
                alignSelf: 'center',
                alignItems: 'center',
                fontSize: scale(16),
                color: '#351347',
                fontWeight: 'bold',
              }}
            >
              Submit
            </Text>
          </View>
        </View>
        <View
          style={{
            position: 'absolute',
            paddingBottom: scale(385),
            paddingLeft: scale(330),
          }}
        >
          <View
            style={{
              backgroundColor: '#fff',
              height: scale(30),
              width: scale(30),
              borderRadius: scale(15),
              borderWidth: scale(2),
              borderColor: '#cacaca',
            }}
          >
            <TouchableOpacity onPress={() => goBack()}>
              <Image
                style={{ alignSelf: 'center', marginTop: scale(7) }}
                source={require('../../assets/img/close_icon_grey_mdpi.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ position: 'absolute', paddingTop: scale(100) }}>
          <AirbnbRating />
        </View>
      </View>
    );
  }
}

export default withNavigation(RatingScreen);
