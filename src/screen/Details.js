import React, { Component } from 'react';
import { Text, View, Image, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardItem } from 'native-base';
import * as actionEpisode from '../redux/actions/actionEpisode';

class Details extends Component {
  // eslint-disable-next-line no-undef
  componentDidMount = async () => {
    const idWebtoon = this.props.navigation.getParam('idWebtoon');
    await this.props.getEpisode(idWebtoon);
  }

  renderChapter(list) {
    const time = list.createdAt.substring(0, 10);
    const timeRev = time.split('-').reverse().join('/');

    return (
      // <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailEp')}>
      <Card style={styles.containChapter}>
        <CardItem>
          <Image source={{ uri: list.image }} style={styles.imgChapterStyle} />
        </CardItem>

        <CardItem
          button={true} onPress={() => this.props.navigation.navigate('DetailEp', { idwb: list.masters_id, idEp: list.title })}
          style={{ width: '75%' }}
        >
          <View>
            <Text style={styles.fontLocal}>Episode {list.title}</Text>
            <Text style={styles.fontLocal}>{timeRev}</Text>
          </View>
        </CardItem>
      </Card>
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.imgContain}>
          <Image source={{ uri: this.props.navigation.getParam('imageHome') }} style={styles.imgStyle} />
        </View>
        <FlatList
          data={this.props.episodeLocal.ep}
          renderItem={({ item }) => this.renderChapter(item)}
          keyExtractor={item => item.title}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    episodeLocal: state.episode // reducers/index.js samain yah bang
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getEpisode: (params) => dispatch(actionEpisode.handleGetEpisode(params)) // action yah bang
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Details);

const styles = StyleSheet.create({
  imgContain: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    elevation: 2,
    marginBottom: 4
  },
  imgStyle: {
    width: null,
    height: 200,
  },
  containChapter: {
    flexDirection: 'row',
    height: 70,
    marginTop: 0
  },
  imgChapterStyle: {
    height: 66,
    width: 70,
    marginStart: -15,
    borderRadius: 2

  },
  titleChapter: {
    justifyContent: 'space-evenly',
    paddingBottom: 20,
  },
  fontLocal: {
    fontFamily: 'Raleway-Medium',
    fontSize: 16,
    marginVertical: 4
  }
});
