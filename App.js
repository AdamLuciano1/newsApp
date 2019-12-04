import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import listScreen from './listScreen';
import detailScreen from './detailScreen';
import Welcome from './welcome.png'

class App extends React.Component {
  static navigationOptions = {
    title: 'Pace News'
  };

  render() {
    return (
      <View style={styles.container}>
        <Image source={Welcome} style={styles.welcome} />
        <TouchableOpacity 
          onPress = {() => this.props.navigation.navigate('list')}
          >
          <View style = {styles.contButton}>
            <Text style = {styles.buttonText}>Continue</Text>
          </View>
        </TouchableOpacity>
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
    backgroundColor: '#fcfcfc',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
    paddingBottom: 80,
  },
  welcome: {
    marginBottom: 20,
    height: 80,
    aspectRatio: 404 / 156
  },
  contButton: {
    fontSize: 30,
    backgroundColor: "#2766C6",
    width: 200,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  buttonText: {
    color: '#fcfcfc',
    fontSize: 20,
  },
});

export default createAppContainer(AppNavigator);
