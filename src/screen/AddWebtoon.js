import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, Image, FlatList } from 'react-native';
import { Header, Right, Body, Item, Input, Left } from 'native-base';
import { Title, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from '../components/Button2';

import { listChapter } from '../components/Link';

class AddWebtoon extends Component {

  renderEp(item) {
    return (
      <View style={styles.imgContentStyle}>
        <TouchableOpacity>
          <Image source={{ uri: item.url }} style={styles.imgStyle} />
        </TouchableOpacity>
        <View style={styles.imgTitleStyle}>
          <Text>{item.chap}</Text>
          <Text style={styles.imgTitleStyleCount}>{item.id} Oktober 2019</Text>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View>
        <Header style={styles.headerStyle}>
          <Left style={styles.headerLeft}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Icon name='arrow-left' size={20} />
            </TouchableOpacity>
          </Left>
          <Body style={styles.headerBody}>
            <Title>Create Webtoon</Title>
          </Body>
          <Right style={styles.headerRight}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Icon name='check' size={27} color='orange' />
            </TouchableOpacity>
          </Right>
        </Header>
        <View style={styles.contentAdd}>
          <Title style={styles.titleSearch}>Title</Title>
          <Item regular style={styles.containSearchStyle}>
            <Input />
          </Item>
        </View>

        <View style={styles.chapterContent}>
          <Title style={styles.chapterTitle}>Chapter</Title>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={listChapter}
            renderItem={({ item }) => this.renderEp(item)}
            keyExtractor={item => item.title}
          />
        </View>
        <Button styling={styles.buttonStyle} onPress={() => this.props.navigation.navigate('AddWebtoonChap')}>+ Add Episode</Button>


      </View>
    );
  }
}
export default AddWebtoon;

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#fff',
  },
  headerLeft: {
    paddingLeft: 10,
    flex: 2
  },
  headerBody: {
    flex: 6
  },
  headerRight: {
    paddingRight: 8,
    flex: 2
  },
  contentAdd: {
    marginTop: 15,
  },
  profileInput: {
    marginTop: 10,
    fontSize: 25,
    fontWeight: 'bold',
  },
  containSearchStyle: {
    borderColor: '#403a36',
    paddingRight: 8,
    borderRadius: 3,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    paddingLeft: 5,
    marginLeft: 30,
    marginRight: 30,
    height: 45
  },
  titleSearch: {
    marginLeft: 33
  },
  chapterContent: {
    marginLeft: 30,
    marginTop: 15,
    height: 330
  },
  imgContentStyle: {
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
  imgTitleStyle: {
    marginLeft: 10,
    justifyContent: 'space-evenly',
    marginBottom: 14
  },
  imgTitleStyleCount: {
    fontSize: 12,
    color: 'gray'
  },
  chapterTitle: {
    marginBottom: 5,
    marginLeft: 3
  },
  buttonStyle: {
    marginTop: 20,
  }
});
