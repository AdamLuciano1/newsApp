
import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, Button, TouchableHighlight, } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
class detailScreen extends React.Component {
    render() {
        console.log(this.props)
        return (
            <View style = {styles.container}>
        <Text style = {styles.title}> {this.props.navigation.state.params.itemTitle.title} </Text>
        <Text style = {styles.summary}> {this.props.navigation.state.params.itemSummary.summary} </Text>
        </View>
        )
}
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#668cff',
      alignItems: 'center',
    },
    title: {
        fontSize: 40,
        color: 'white',
        marginTop: "10%",
    },
    summary: {
        fontSize: 24,
        color: 'white',
        marginTop: "20%"
    }
  });
export default detailScreen