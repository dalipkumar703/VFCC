import React from 'react';
import Vote from './Vote';
import VoteResult from './VoteResult';
import {TabNavigator} from 'react-navigation';

const MainNavigation=TabNavigator({
  Vote:{screen:Vote},
  VoteResult:{screen:VoteResult}
});

export default MainNavigation
