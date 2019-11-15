import React, { Component } from 'react';
import {
  SafeAreaView,
  View, StyleSheet,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  AsyncStorage,
  ActivityIndicator
} from 'react-native';
import { Item, Input, Text } from 'native-base';
import { StackActions, NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

import * as actionLogin from './../redux/actions/actionLogin';
import Button from './../components/Button';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      icon: 'eye',
      eyePassword: true,
      isMailValid: false,
      isPassValid: false,
      loading: false
    };
  }

  // eslint-disable-next-line no-undef
  componentDidMount = async () => {
    await this.props.getLogin();
  }

  handleEye() {
    this.setState(prevState => ({
      icon: prevState.icon === 'eye' ? 'eye-slash' : 'eye',
      eyePassword: !prevState.eyePassword
    }));
  }

  passlValidation(pass) {
    if (pass === '') {
      this.setState({ isPassValid: false });
    } else {
      this.setState({ isPassValid: true });
    }
    this.setState({ password: pass });
  }

  emailValidation(mail) {
    const passCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (passCheck.test(mail)) {
      this.setState({ isMailValid: true });
    } else {
      this.setState({ isMailValid: false });
    }
    this.setState({ email: mail });
  }

  buttonValidation(email, pass) {
    if (email === true && pass === true) {
      return false;
    }
    return true;
  }


  async handleLogin() {
    this.setState({ loading: true });
    const { email, password } = this.state;
    await this.props.getLogin(email, password);
    const users = this.props.loginLocal.auth;
    if (users.token) {
      await AsyncStorage.multiSet([
        ['token', users.token],
        ['userId', `${users.user.id}`],
        ['name', users.user.name],
        ['email', `${users.user.email}`],
        ['image', users.user.image]
      ]);
      console.log(users.user.email);
      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'Home' })],
      });
      this.props.navigation.dispatch(resetAction);
    } else {
      this.setState({ loading: false });
      alert('Email or Password is Wrong');
    }
  }

  renderButton() {
    if (this.state.loading) {
      return <ActivityIndicator size='large' />;
    }
    return (
      <Button
        disabled={this.buttonValidation(this.state.isMailValid, this.state.isPassValid)}
        onPress={() => this.handleLogin()}>Log In</Button>
    );
  }

  render() {
    console.disableYellowBox = true;
    return (
      <SafeAreaView>
        <KeyboardAvoidingView behavior='position' style={styles.container}>
          <View style={[styles.textInfo, styles.textInfoTop]}>
            <Image source={require('./../assets/bee.png')} style={styles.logo} />
            <Text style={styles.subTitle}>Login with your account BeeToon</Text>
          </View>

          <View>
            <Item regular style={styles.formItem}>
              <Input
                style={{ fontFamily: 'Roboto-Light' }}
                value={this.state.email}
                onChangeText={(text) => this.emailValidation(text)}
                autoCapitalize='none'
                keyboardType='email-address'
                placeholder='Input your email'
              />
            </Item>
            <Item regular style={styles.formItem}>
              <Input
                style={{ fontFamily: 'Roboto-Light' }}
                value={this.state.password}
                onChangeText={(text) => this.passlValidation(text)}
                autoCapitalize='none'
                keyboardType='default'
                secureTextEntry={this.state.eyePassword}
                placeholder='Input your password'
              />
              <TouchableOpacity onPress={() => this.handleEye()}>
                <Icon name={this.state.icon} size={25} color='#000' />
              </TouchableOpacity>
            </Item>
            {this.renderButton()}
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  return {
    loginLocal: state.login // reducers/index.js samain yah bang
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getLogin: (email, password) => dispatch(actionLogin.handleActionLogin(email, password)) // action yah bang
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
  },
  textInfo: {
    alignItems: 'center',
    padding: 20,
  },
  textInfoTop: {
    marginTop: '14%',
    marginBottom: '25%'
  },
  logo: {
    height: 150,
    width: 150
  },
  subTitle: {
    fontSize: 25,
    marginTop: 10,
    textAlign: 'center',
    fontFamily: 'Poppins-Black',
    color: '#212121'
  },
  formItem: {
    marginBottom: 20,
    paddingHorizontal: 15,
    height: 50,
    borderRadius: 3,
    backgroundColor: '#f6f6f6',
    borderColor: '#f6f6f6'
  }
});
