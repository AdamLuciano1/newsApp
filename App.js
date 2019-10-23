import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import listScreen from './listScreen';
import detailScreen from './detailScreen';

class App extends React.Component {
  render() {
  return (
    <View style={styles.container}>
      <View style={{ flex: 5 }}>
        <Text style = {{ fontSize: 40, marginTop: "40%", color: 'white', textAlign: 'center'}}> Welcome to Pace News </Text>
      </View>
      <TouchableHighlight 
      onPress = {() => this.props.navigation.navigate('list')}
      style={{ flex: 1 }}
      >
        <View style = {styles.contButton}><Text style = {styles.buttonText}> Continue </Text></View>
      </TouchableHighlight>
    </View>
  );
}
}

const AppNavigator = createStackNavigator(
   {
    home: App,
    list: listScreen,
    details: detailScreen,
  },
  {
    initialRouteName: 'home',
  }
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#668cff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
    padding: 0,
  },
  contButton: {
    fontSize: 30,
    backgroundColor: "#3366ff",
    width: 250,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
  },
});

export default createAppContainer(AppNavigator);
