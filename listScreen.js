import React from 'react';
import { StyleSheet, Text, ScrollView, FlatList,TouchableOpacity, View } from 'react-native';
import { withNavigation} from 'react-navigation';
import { LinearGradient } from 'expo-linear-gradient';

import firebase from './firebase';

function Item({ item, navigate }) {
  const { title, sub_title } = item;
  return (
    <TouchableOpacity 
      onPress={() => {
        navigate('details', {
            item,
          });
        }}
        activeOpacity={0.6}
      >
      <View style={styles.item}>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
        <Text style={styles.summary} numberOfLines={3}>
          {sub_title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}


class listScreen extends React.Component {
  state = {
    news: null
  }

  componentDidMount() {
    firebase.ref('/').once('value')
      .then(snapshot => this.setState({ news: snapshot.val() }))
  }

  render() {
    if (!this.state.news) return null;

    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        <FlatList
          data={this.state.news}
          renderItem={({ item }) => item && <Item item={item} navigate={navigate} />}
          keyExtractor={(item, i) => i.toString()}
        />
      </ScrollView>
    );
  } 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcfcfc',
  },
  item: {
    backgroundColor: '#00337F',
    padding: 20,
    marginVertical: 22,
    marginHorizontal: 16,
    borderRadius: 20,
  },
  title: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 6,
    fontWeight: "500",
  },
  summary: {
    fontSize: 16,
    color: '#fffb',
  }
});

export default withNavigation(listScreen);

