
import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, Button, TouchableHighlight, } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
class detailScreen extends React.Component {
    render() {
        return (
        <Text> {this.props.itemTitle} {this.props.itemSummary} </Text>
        )
}
}
export default detailScreen