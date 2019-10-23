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
      asummary: 'Pinellas Park police Officer Joseph Puglia tells ABC Action News in Tampa his heart “really sank until I started seeing him breathing.” The dog wandered onto Interstate 275 in Tampa on Monday.',
    },
    {
      aid: 3,
      atitle: 'Virginia Bans Trick or Treating',
      asummary: 'While many might think this law is a pretty cruel trick, the ban on big kids is nothing new for Chesapeake. In fact, the penalty was only reduced in March 2019 when city officials loosened the original 1970 ordinance that said kids over 12 years old who were trick or treating could face jail time',
    },
    {
        aid: 4,
        atitle: 'US-China trade war intensifies',
        asummary: 'The U.S.-China trade war is officially back on, and U.S. markets sold off on Monday. The Dow Jones Industrial Average, the S&P 500, and the Nasdaq Composite were all down about 3% at the close. The U.S. is set to impose a 10% tariff on an additional $300 billion of Chinese goods in less than a month and China appears to be retaliating by allowing the value of its currency to fall.',
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

