import React, { Component } from 'react';
import { View, AsyncStorage, ActivityIndicator, Text } from 'react-native';

class splashScreen extends Component {
  componentWillMount() {
    this.cekToken();
  }

  async cekToken() {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      this.props.navigation.navigate('Home');
    } else {
      this.props.navigation.navigate('Login');
    }
  }

  render() {
    console.disableYellowBox = true;
    return (
      <View style={styles.container}>
        <ActivityIndicator size={100} />
        <Text style={styles.font}>Please Wait...</Text>
      </View>
    );
  }
}
export default splashScreen;

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  font: {
    marginTop: 20,
    fontSize: 28,
    fontFamily: 'Oswald-Bold',
  }
};

