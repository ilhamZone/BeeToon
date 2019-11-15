import React, { Component } from 'react';
import { View, TouchableOpacity, FlatList, Image, SafeAreaView, ScrollView } from 'react-native';
import { Text, Item, Input, Card, CardItem, Header, Body, Title } from 'native-base';
import { connect } from 'react-redux';
import Slideshow from 'react-native-image-slider-show';
import Icon from 'react-native-vector-icons/FontAwesome';
import { banners } from '../components/Link';

import * as actionWebtoon from './../redux/actions/actionWebtoon';

export class ForYou extends Component {
  constructor(props) {
    super(props);

    this.state = {
      position: 1,
      interval: null,
      dataSource: []
    };
  }


  componentWillMount() {
    this.setState({
      interval: setInterval(() => {
        this.setState({
          position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
        });
      }, 3000)
    });
  }

  // eslint-disable-next-line no-undef
  componentDidMount = async () => {
    await this.props.getWebtoon();
    this.setState({ dataSource: this.props.webtoonLocal.web });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  renderFavorite(item) {
    return (
      <View>
        <Card style={styles.favCard}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Detail')}>
            <CardItem style={styles.favCardStyle}>
              <Image source={{ uri: item.url }} style={styles.favImgStyle} />
            </CardItem>
          </TouchableOpacity>
          <CardItem style={styles.favCardTitle}>
            <Text style={styles.fontTitle}>{item.title}</Text>
          </CardItem>
        </Card>
      </View>
    );
  }

  renderAll(item) {
    return (
      <Card style={styles.allContentStyle}>
        <CardItem style={{ flex: 2, backgroundColor: '#f7f7f7' }}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Detail', { titleHome: item.title, imageHome: item.image, idWebtoon: item.id })}>
            <Image source={{ uri: item.image }} style={styles.allImageStyle} />
          </TouchableOpacity>
        </CardItem>

        <CardItem style={styles.allTitle}>
          <Text style={{ alignSelf: 'flex-start', marginBottom: 2 }}>{item.title}</Text>
          <TouchableOpacity style={styles.buttonFav}>
            <Text style={[styles.buttonFavTitle, styles.fontTitle]}>+ Favourite</Text>
          </TouchableOpacity>
        </CardItem>
      </Card>
    );
  }

  render() {
    console.disableYellowBox = true;
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

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.slideShow}>
            <Slideshow
              dataSource={this.state.dataSource}
              position={this.state.position}
              onPositionChanged={position => this.setState({ position })}
              height={200}
              arrowSize={0}
            />
          </View>

          <View style={{ paddingHorizontal: '2%' }}>
            <Text style={styles.favHeaderStyle}>Favourite</Text>
            <FlatList
              data={banners}
              renderItem={({ item }) => this.renderFavorite(item)}
              keyExtractor={item => item.title}
              horizontal
            />
          </View>

          <View style={{ flex: 1, paddingHorizontal: '2%' }}>
            <Text style={styles.allHeaderStyle}>All</Text>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={this.props.webtoonLocal.web}
              renderItem={({ item }) => this.renderAll(item)}
              keyExtractor={item => item.title}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  return {
    webtoonLocal: state.webtoon // reducers/index.js samain yah bang
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getWebtoon: () => dispatch(actionWebtoon.handleGetWebtoon()) // action yah bang
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForYou);

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containSearchStyle: {
    marginTop: 15,
    borderColor: '#ffffff',
    paddingRight: 20,
    borderRadius: 5,
    backgroundColor: '#ffffff',
    marginBottom: 15,
    borderWidth: 3,
    height: 42
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
  searchStyle: {
    paddingLeft: 15,
    paddingRight: 15
  },
  favHeaderStyle: {
    marginTop: 15,
    marginLeft: 3,
    fontSize: 23,
    fontFamily: 'Raleway-Medium',
  },
  favCard: {
    height: 170,
    width: 140,
  },
  favCardItemStyle: {
    height: null,
    width: null,
    alignItems: 'center',
  },
  favImgStyle: {
    height: 125,
    width: 170,
    marginTop: -12,
    flex: 4,
    marginHorizontal: -17,
    borderRadius: 2
  },
  favCardTitle: {
    flex: 1,
    height: null
  },
  allContentStyle: {
    flexDirection: 'row',
    width: '98%',
    height: 80,
    backgroundColor: '#f7f7f7',
  },
  allHeaderStyle: {
    marginTop: 10,
    marginLeft: 7,
    fontSize: 23,
    marginBottom: 3,
    fontFamily: 'Raleway-Medium'
  },
  allImageStyle: {
    height: 76,
    width: 76,
    marginLeft: -15,
    marginTop: -1,
    borderTopLeftRadius: 2,
    borderBottomLeftRadius: 2,
  },
  allTitle: {
    flexDirection: 'column',
    backgroundColor: '#f7f7f7',
    flex: 6
  },
  buttonFav: {
    backgroundColor: '#fb9224',
    width: 90,
    borderWidth: 1,
    borderColor: '#fb9224',
    elevation: 2,
    paddingVertical: 1,
    marginTop: 4,
    borderRadius: 2,
    alignSelf: 'flex-start'
  },
  buttonFavTitle: {
    fontSize: 12,
    textAlign: 'center',
  },
  slideShow: {
    borderBottomWidth: 2,
    borderColor: '#ddd',
    elevation: 2,
    borderRadius: 4,
  },
  fontTitle: {
    fontFamily: 'Raleway-Medium'
  },
  allText: {
    alignItems: 'flex-start'
  }
};
