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
      <Text style = {{fontFamily: 'Menlo', fontSize: 40, marginTop: "40%", color: 'white'}}> Welcome to Pace News </Text>
      <View>
        <TouchableHighlight 
        onPress = {() => this.props.navigation.navigate('list')}
        >
          <View style = {styles.contButton}><Text style = {styles.buttonText}> Continue </Text></View>
        </TouchableHighlight>
      </View>
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
  },
  contButton: {
    marginTop: "99%",
    backgroundColor: "#3366ff",
    width: 250,
    height: 80,
  },
  buttonText: {
    color: 'white',
    fontFamily: 'Menlo',
  },
});

export default createAppContainer(AppNavigator);
