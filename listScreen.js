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
        asummary: 'Gilbert V. Levin, who was principal investigator on a NASA experiment that sent Viking landers to Mars in 1976, published an article in the Scientific American journal last Thursday, arguing the experiment\'s positive results were proof of life on the red planet.',
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
  function Item({ title, summary, navigate }) {
    return (
        <TouchableOpacity 
        onPress={() => {
          navigate('details', {
              itemTitle: {title},
              itemSummary: {summary},
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
      const { navigate } = this.props.navigation;
        return (
            <ScrollView style={styles.container}>
              <FlatList
                data={DATA}
                renderItem={({ item }) =>  <Item title={item.atitle} summary={item.asummary} navigate={navigate} />}
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

export default withNavigation(listScreen);

