import React from 'react';
import checkAadharSubmit from '../../api/getUserDetail';
import {View, Image,Text,StyleSheet} from 'react-native';
import {Button,Header,Content,Container,ActionSheet} from 'native-base';
import store from '../../store';
var BUTTONS = ["Option 0", "Option 1", "Option 2", "Delete", "Cancel"];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;
class Vote extends React.Component {
   constructor(props){
     super(props);
     this.state={};
     var login=store.getState();
     checkAadharSubmit(login.login[0].email).then((res)=>{
       console.log("result :",res);
     });
   }
render(){
  return (
      <Container >

        <Content>
        <Image
              style={{flex:1,height:200,width:null,margin:10}}
              source={{uri: 'http://ladasinghasan.weebly.com/uploads/8/0/3/8/8038657/aadhar_card_back.jpg'}}
            />
          <Button onPress={()=> ActionSheet.show(
              {
                options: BUTTONS,
                cancelButtonIndex: CANCEL_INDEX,
                destructiveButtonIndex: DESTRUCTIVE_INDEX,
                title: "Testing ActionSheet"
              },
              buttonIndex => {
                this.setState({ clicked: BUTTONS[buttonIndex] });
              }
            )} block info>
            <Text>Upload Aadhar</Text>
          </Button>
        </Content>
      </Container>
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

export default Vote
