import React, { Component } from 'react';
import { View, TouchableOpacity, SafeAreaView, FlatList, Image, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { banners } from '../components/Link';

class MyWebtoon extends Component {

  renderAll(item) {
    return (
      <View style={styles.contentStyle}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('EditWebtoon', {title: item.title })}>
          <Image source={{ uri: item.url }} style={styles.imgStyle} />
        </TouchableOpacity>
        <View style={styles.titleStyle}>
          <Text>{item.title}</Text>
          <Text style={styles.titleStyleCount}>{item.chapter}</Text>
        </View>
      </View>
    );
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={banners}
          renderItem={({ item }) => this.renderAll(item)}
          keyExtractor={item => item.title}
        />
        <TouchableOpacity style={styles.addButton} onPress={() => this.props.navigation.navigate('AddWebtoon')}>
          <Icon name='plus-circle' size={50} color='orange' />
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}
export default MyWebtoon;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: 'whitesmoke',
    paddingTop: 20,
  },
  contentStyle: {
    flexDirection: 'row',
    marginLeft: 3
  },
  imgStyle: {
    height: 65,
    width: 65,
    borderColor: '#403a36',
    borderWidth: 2,
    borderRadius: 2,
    marginBottom: 10
  },
  titleStyle: {
    marginLeft: 10,
    justifyContent: 'space-evenly',
    marginBottom: 14
  },
  titleStyleCount: {
    fontSize: 12,
    color: 'gray'
  },
  addButton: {
    paddingBottom: 15,
    paddingRight: 5,
    alignSelf: 'flex-end'
  }
});
