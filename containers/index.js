import React from 'react';
import {StackNavigator} from 'react-navigation';
import SignUp from '../screens/SignUp';
import MainNavigation from '../screens/MainNavigation';

const AppContainer=StackNavigator({
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      title: 'SignUp',
    },
  },
  Home: {
    screen: MainNavigation,
    navigationOptions: {
      title: 'VoteForCause',
    },
  },

});

export default AppContainer
