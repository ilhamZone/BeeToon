import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, AsyncStorage, Image } from 'react-native';
import { Header, Text, Body } from 'native-base';
import { Title } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

class Profile extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      name: '',
      image: ''
    };
  }

  async componentDidMount() {
    const emailUser = await AsyncStorage.getItem('email');
    const nameUser = await AsyncStorage.getItem('name');
    const imageUser = await AsyncStorage.getItem('image');
    this.setState({ name: nameUser, image: imageUser, email: emailUser });
  }


  async handleLogout() {
    await AsyncStorage.removeItem('token');
    await this.props.navigation.navigate('Login');
  }

  render() {
    return (
      <View>

        <View>
          <Header style={{ backgroundColor: '#fb9224' }} androidStatusBarColor='#fb9224'>
            <Body style={styles.headerStyle}>
              <Title style={styles.fontHeader}>Profile</Title>
            </Body>
          </Header>
        </View>

        <View style={styles.contentProfile}>
          <View>
            <Image source={{ uri: this.state.image }} style={styles.profileStyle} />
          </View>
          <View>
            <Text style={styles.profileTitle}>{this.state.name}</Text>
            <Text style={styles.emailTitle}>{this.state.email}</Text>
          </View>
        </View>

        <View>
          <TouchableOpacity style={styles.buttonList} onPress={() => this.props.navigation.navigate('MyWebtoon')}>
              <Icon name='pencil' color='#919190' size={25} />
              <Text style={styles.buttonListTitle}>My Webtoon Creation</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonList} onPress={() => this.props.navigation.navigate('EditProfile')}>
              <Icon name='cog' color='#919190' size={25} />
              <Text style={styles.buttonListTitle}>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonList}>
              <Icon name='exclamation-circle' color='#919190' size={25} />
              <Text style={styles.buttonListTitle}>About</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonList} onPress={() => this.handleLogout()}>
              <Icon name='sign-out' color='#919190' size={25} />
              <Text style={styles.buttonListTitle}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default Profile;

const styles = StyleSheet.create({
  headerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  fontHeader: {
    fontSize: 22,
    fontFamily: 'Poppins-Black',
    color: '#fff'
  },
  contentProfile: {
    flexDirection: 'row',
    paddingLeft: '5%',
    paddingTop: '5%',
    paddingBottom: '4%',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    elevation: 1,
    alignItems: 'center'
  },
  profileStyle: {
    height: 80,
    width: 80,
    borderRadius: 50,
    marginRight: '4%',
  },
  profileTitle: {
    fontSize: 20,
    color: '#313131',
    fontFamily: 'Poppins-Regular'
  },
  emailTitle: {
    fontSize: 14,
    color: '#4d4545',
    fontFamily: 'Poppins-Light',
    marginTop: -7
  },
  buttonList: {
    alignItems: 'center', 
    flexDirection: 'row', 
    paddingLeft: '4%', 
    borderBottomWidth: 1, 
    borderBottomColor: '#ddd'
  },
  buttonListTitle: {
    marginVertical: '4%', 
    fontFamily: 'OpenSans-Regular', 
    marginLeft: '4%'
  }
});
