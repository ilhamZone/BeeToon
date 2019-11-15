import React, { Component } from 'react';
import { View, FlatList, Image } from 'react-native';
import { connect } from 'react-redux';
import * as actionImgEpisode from '../redux/actions/actionImgEpisode';

class DetailEpisode extends Component {
  // eslint-disable-next-line no-undef
  componentDidMount = async () => {
    const idWb = this.props.navigation.getParam('idwb');
    const idEp = this.props.navigation.getParam('idEp');
    await this.props.getImgEpisode(idWb, idEp);
    console.log(this.props.imgEpisodeLocal);
  }

  
  renderChapter(chap) {
    return (
      <View style={styles.containImg}>
        <Image source={{ uri: chap.image }} style={styles.imgStyle} />
      </View>
    );
  }
  
  render() {
    return (
      <View>
        <FlatList
          data={this.props.imgEpisodeLocal.imgEp}
          renderItem={({ item }) => this.renderChapter(item)}
          keyExtractor={item => item}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    imgEpisodeLocal: state.imgEpisode // reducers/index.js samain yah bang
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getImgEpisode: (idWb, idEp) => dispatch(actionImgEpisode.handleGetImgEpisode(idWb, idEp)) // action yah bang
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailEpisode);

const styles = {
  imgStyle: {
    marginBottom: 5,
    height: 560,
    width: '100%',
    resizeMode: 'contain'
  }
};
