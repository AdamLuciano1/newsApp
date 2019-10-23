
import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, Button,TouchableOpacity,  TouchableHighlight, } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { StackNavigator } from 'react-navigation';
import { withNavigation} from 'react-navigation';
const DATA = [
    {
      aid: 1,
      atitle: 'Lakers Beat Clippers',
      asummary: 'The lakers beat the clippers in an exciting game last night, coming back from a 20 point deficit at half time to take the game. Coach Frank Vogel said afer the game that he contributes the win to the improvements they have made in practive over the offseason.'
    },
    {
      aid: 2,
      atitle: 'Officer Saves Dog',
      asummary: '',
    },
    {
      aid: 3,
      atitle: 'Virginia Bans Trick or Treating',
      asummary: '',
    },
    {
        aid: 4,
        atitle: 'US-China trade war intensifies',
        asummary: '',
      },
      {
        aid: 5,
        atitle: 'Ancient Skeletons Discovered in Egypt',
        asummary: '',
      },
      {
        aid: 6,
        atitle: 'Pace President Speaks in Gymnasium',
        asummary: '',
      },
      {
        aid: 7,
        atitle: 'Life Discovered on Mars',
        asummary: '',
      },
      {
        aid: 8,
        atitle: 'Half Life 3 Confirmed by Valve',
        asummary: '',
      },
      {
        aid: 9,
        atitle: 'Flight Attendants Accused of Money Laundering',
        asummary: '',
      },
  ];
  function Item({ title }) {
    return (
        <TouchableOpacity 
        onPress={() => {
          this.props.navigation.navigate('details', {
              itemTitle: {title},
              itemSummary: {asummary},
            });
          }}
        >
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
      </TouchableOpacity>
    );
  }
class listScreen extends React.Component {
    render() {
        return (
            <ScrollView style={styles.container}>
              <FlatList
                data={DATA}
                renderItem={({ item }) =>  <Item title={item.atitle} />}
                keyExtractor={item => item.aid}
              />
            </ScrollView>
          );
        }
    
    }
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#668cff',
        },
        item: {
          backgroundColor: 'white',
          padding: 20,
          marginVertical: 8,
          marginHorizontal: 16,
        },
        title: {
          fontSize: 22,
        },
      });
      export withNavigation(listScreen)