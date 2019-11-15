import React, { Component } from 'react';
import { View, TouchableOpacity, SafeAreaView, FlatList, Image, StyleSheet } from 'react-native';
import { Text, Item, Input, Header, Body } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

import { banners } from '../components/Link';

class Favorite extends Component {

  renderAll(item) {
    return (
      <View style={styles.favContentStyle}>
        <TouchableOpacity>
          <Image source={{ uri: item.url }} style={styles.favImageStyle} />
        </TouchableOpacity>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ width: '60%', paddingLeft: '4%' }}>
            <Text style={styles.genreTitle}>Action</Text>
            <Text numberOfLines={1} style={styles.favoriteTitle}>{item.title}</Text>
          </View>
          <Icon name='star' color='gold' size={20} onPress={() => alert('ok')} style={{ alignSelf: 'center', marginLeft: '17%'}} />
        </View>
      </View>
    );
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Header style={{ backgroundColor: '#fb9224' }} androidStatusBarColor='#fb9224'>
            <Body style={styles.headerStyle}>
              <Item regular style={styles.containSearchStyle}>
                <Input style={styles.searchStyle} />
                <TouchableOpacity>
                  <Icon name='search' size={25} color='#c1c1c1' />
                </TouchableOpacity>
              </Item>
            </Body>
          </Header>
        </View>

        <View style={{ flex: 1 }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={banners}
            renderItem={({ item }) => this.renderAll(item)}
            keyExtractor={item => item.title}
            numColumns={3}
          />
        </View>
      </SafeAreaView>
    );
  }
}
export default Favorite;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
  },
  fontHeader: {
    fontFamily: 'Poppins-Black'
  },
  headerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '2%',
  },
  containSearchStyle: {
    borderColor: '#ffffff',
    paddingRight: 20,
    borderRadius: 5,
    backgroundColor: '#ffffff',
    marginBottom: 10,
    borderWidth: 3,
    height: 42
  },
  searchStyle: {
    paddingLeft: 15,
    paddingRight: 15
  },
  favContentStyle: {
    flex: 1,
    marginTop: '4%'
  },
  favImageStyle: {
    flexGrow: 1,
    height: 140,
    width: null,
    borderRadius: 5,
    marginHorizontal: '4%'
  },
  favoriteTitle: {
    fontSize: 14,
    fontFamily: 'OpenSans-SemiBold',
    marginLeft: '4%'
  },
  genreTitle: {
    fontSize: 10,
    marginLeft: '5%',
    fontFamily: 'OpenSans-Light'
  }
});
