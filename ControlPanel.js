import { Component, PropTypes, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';

export default class ControlPanel extends Component {
    const  super();
  static propTypes = {
    closeDrawer: PropTypes.func.isRequired,
  };

  render() {
    const { closeDrawer } = this.props;
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.controlText}>Control Panel</Text>
        <TouchableOpacity style={styles.button} onPress={closeDrawer}>
          <Text>Close Drawer</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'black',
  },
  controlText: {
    color: 'white',
  },
  button: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
  },
});
