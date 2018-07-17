import React from 'react';
import { View, StyleSheet } from 'react-native';
import { scale } from '../../helper/scale';

const SearchbarCard = props => <View style={styles.SectionStyle}>{props.children} </View>;

export default SearchbarCard;

const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: 'row',
    // marginTop: 20,
    // marginBottom: scale(8),
    // padding: 10,
    backgroundColor: '#fff',
    borderRadius: scale(5),
    width: scale(250),
    height: scale(36),
    // paddingRight: scale(10),

    // borderWidth: 5,
    // borderColor: '#fff',
    // marginLeft: scale(40),
    // marginRight: 10,
  },
});
