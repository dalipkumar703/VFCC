import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';
//import {TouchableHighlight,TextInput} from 'react-native';
//import signUp from './api/auth';
import {Provider} from 'react-redux';
import store from './store';
import AppContainer from './containers';
import {Root} from 'native-base';
//import  * as Login from './actions/loginAction';
import {Button, Container, Header, Content, Form, Item, Input, Label } from 'native-base';
export default class App extends React.Component {


  render() {
    return (

     <Provider store={store}>
<Root>
     <AppContainer />
</Root>
  </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
