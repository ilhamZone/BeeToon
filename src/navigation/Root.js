import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import { TouchableOpacity, Share, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Login from './../screen/Login';
import TabNavigation from '../navigation/TabNavigation';

import Detail from '../screen/Details';
import DetailEp from '../screen/DetailEpisode';
import MyWebtoon from '../screen/MyWebtoon';
import AddWebtoon from '../screen/AddWebtoon';
import AddWebtoonChap from '../screen/AddWebtoonChap';
import EditWebtoon from '../screen/EditWebtoon';
import EditWebtoonChap from '../screen/EditWebtoonChap';
import Splash from '../screen/splashScreen';

const shareOption = {
  message: 'minta link gan...',
};

const Root = createStackNavigator({
  Splash: {
    screen: Splash,
    navigationOptions: () => ({
      header: null
    }),
  },
  Login: {
    screen: Login,
    navigationOptions: () => ({
      header: null
    }),
  },
  Home: {
    screen: TabNavigation,
    navigationOptions: () => ({
      header: null
    }),
  },
  AddWebtoon: {
    screen: AddWebtoon,
    navigationOptions: () => ({
      header: null
    }),
  }, 
  AddWebtoonChap: {
    screen: AddWebtoonChap,
    navigationOptions: () => ({
      header: null
    }),
  },
  EditWebtoon: {
    screen: EditWebtoon,
    navigationOptions: () => ({
      header: null
    }),
  },
  EditWebtoonChap: {
    screen: EditWebtoonChap,
    navigationOptions: () => ({
      header: null
    }),
  },
  Detail: {
    screen: Detail,
    navigationOptions: ({ navigation }) => ({
      headerTitle: <Text style={styles.fontHeader}>{navigation.getParam('titleHome')}</Text>,
      headerRight: <TouchableOpacity style={{ paddingRight: 15 }} onPress={() => Share.share(shareOption)}>
        <Icon name='share-alt' size={25} /></TouchableOpacity>,
    })
  },
  DetailEp: {
    screen: DetailEp,
    navigationOptions: ({ navigation }) => ({
      headerTitle: <Text style={styles.fontHeader}>Chapter {navigation.getParam('idEp')}</Text>,
      headerRight: <TouchableOpacity style={{ paddingRight: 20 }} onPress={() => Share.share(shareOption)}>
        <Icon name='share-alt' size={25} /></TouchableOpacity>,
    })
  },
  MyWebtoon: {
    screen: MyWebtoon,
    navigationOptions: () => ({
      headerTitle: 'My BeeToon',
    })
  }
}, { initialRouteName: 'Splash' });

export default createAppContainer(Root);

const styles = {
  fontHeader: {
    fontFamily: 'Raleway-Black',
    fontSize: 18,
    marginTop: 3,
  }
};
