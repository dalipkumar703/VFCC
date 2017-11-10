import React from 'react';
import {View, Text,StyleSheet} from 'react-native';

class VoteResult extends React.Component {
render() {
  return (
    <View style={styles.container}>
    <Text>Hello,  Vote Results!!</Text>
    </View>
  )
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

export default VoteResult
