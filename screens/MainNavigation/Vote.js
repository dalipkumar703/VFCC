import React from 'react';
import checkAadharSubmit from '../../api/getUserDetail';
import {View, Image,Text,StyleSheet,Alert} from 'react-native';
import {Button,Header,Content,Container,ActionSheet} from 'native-base';
import ImagePicker from 'react-native-image-picker';
import store from '../../store';

var options = {
  title: 'Select Avatar',
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};
class Vote extends React.Component {
   constructor(props){
     super(props);
     this.state={};
     this.getImage.bind(this);
     var login=store.getState();
     checkAadharSubmit(login.login[0].email).then((res)=>{
       console.log("result :",res);
     });
   }
   getImage()
   { /*
     error is showing here
     Undefined is not an object (evaluating 'ImagePickerManager.showImagePicker') on Android
     */
     ImagePicker.showImagePicker(options, (response) => {
   console.log('Response = ', response);

   if (response.didCancel) {
     console.log('User cancelled image picker');
   }
   else if (response.error) {
     console.log('ImagePicker Error: ', response.error);
   }
   else if (response.customButton) {
     console.log('User tapped custom button: ', response.customButton);
   }
   else {
     let source = { uri: response.uri };

     // You can also display the image using data:
     // let source = { uri: 'data:image/jpeg;base64,' + response.data };

     this.setState({
       avatarSource: source
     });
   }
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
          <Button onPress={this.getImage} block info>
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
