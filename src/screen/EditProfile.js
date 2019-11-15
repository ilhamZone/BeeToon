import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Image } from 'react-native';
import { Header, Right, Body, Item, Input } from 'native-base';
import { Title } from 'react-native-paper';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: '',
    };
  }

  handleUpload() {
    const options = {
      title: 'Select Avatar',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };
        this.setState({
          profile: source,
        });
      }
    });
  }

  // <Image source={this.state.profile} style={styles.imageProfile} />
  // ../assets/user.png
  renderProfile() {
    if (this.state.profile === '') {
      return <Icon name='user-circle' size={120} color='gray' />;
    }
    return <Image source={this.state.profile} style={styles.imageProfile} />;
  }

  render() {
    return (
      <View>
        <Header style={styles.headerStyle}>
          <Body style={styles.headerLeft}>
            <Title>Edit Profile</Title>
          </Body>
          <Right style={styles.headerRight}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Icon name='check' size={27} color='orange' />
            </TouchableOpacity>
          </Right>
        </Header>
        <View style={styles.contentProfile}>
          {this.renderProfile()}
          <TouchableOpacity style={styles.choseImage}>
            <Icon name='camera' size={25} onPress={() => this.handleUpload()} />
          </TouchableOpacity>

          <Item regular style={styles.containSearchStyle}>
            <Input placeholder='Edit Your Profile' />
          </Item>
        </View>
      </View >
    );
  }
}
export default EditProfile;

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#fff',
  },
  headerLeft: {
    paddingLeft: 10
  },
  headerRight: {
    paddingRight: 8,
  },
  contentProfile: {
    alignItems: 'center',
    marginTop: 30,
  },
  profileInput: {
    marginTop: 10,
    fontSize: 25,
    fontWeight: 'bold',
  },
  containSearchStyle: {
    marginTop: 20,
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
  choseImage: {
    marginTop: -30,
    marginLeft: 85,
  },
  imageProfile: {
    height: 120,
    width: 120,
    borderRadius: 100
  }
});
