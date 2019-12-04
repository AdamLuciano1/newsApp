
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
class detailScreen extends React.Component {
    render() {
        const { title, description, sub_title, author, image } = this.props.navigation.state.params.item;

        return (
            <ScrollView style={{ flex: 1 }}>
                <View style={styles.container}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.author}>{author}</Text>
                    {image && <Image source={{ uri: image }} style={styles.image} />}
                    <Text style={styles.summary}>{description}</Text>
                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fcfcfc',
      paddingHorizontal: 10,
      paddingBottom: 20,
      paddingTop: 5,
    },
    title: {
        fontSize: 26,
        color: '#333',
    },
    author: {
        fontSize: 16,
        color: '#888',
    },
    summary: {
        fontSize: 18,
        color: '#444',
        marginTop: 30,
        lineHeight: 24,
    },
    image: {
        width: screenWidth,
        height: 200,
        marginLeft: -10,
        marginTop: 20,
    }
  });
export default detailScreen