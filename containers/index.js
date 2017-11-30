import React from 'react';
import {StackNavigator} from 'react-navigation';
import SignUp from '../screens/SignUp';
import MainNavigation from '../screens/MainNavigation';
import FillForm from '../screens/FillForm';
import VotingResultShow from '../screens/VotingResultShow';
const AppContainer=StackNavigator({
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      title: 'SignUp for VFC',
    },
  },
  Home: {
    screen: MainNavigation,
    navigationOptions: {
      title: 'VoteForCause',
    },
  },
  FillForm: {
    screen: FillForm,
    navigationOptions: {
      title: 'Submit Form',
    },
  },
  VotingResultShow: {
    screen: VotingResultShow,
    navigationOptions: {
      title: 'Voting Result',
    },
  }

});

export default AppContainer
