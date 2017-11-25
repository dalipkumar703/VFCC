import React from 'react';
import checkAadharSubmit from '../api/getUserDetail';
import {View, Image,Text,StyleSheet,Alert,ToastAndroid} from 'react-native';
import {Button,Header,Content,Container,ActionSheet} from 'native-base';
import ImagePicker from 'react-native-image-picker';
import store from '../store';
import uploadImage from '../api/updateDetail';
import * as LoginFunction from '../actions/loginAction';
var options = {
  title: 'Select Avatar',
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};

export default class UploadAadhar extends React.Component {
  render() {
    return (


        <Content>
        <Image
              style={{flex:1,height:200,width:null,margin:10}}
              source={{uri: 'http://ladasinghasan.weebly.com/uploads/8/0/3/8/8038657/aadhar_card_back.jpg'}}
            />
          <Button onPress={()=>{
      //this.getImage

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
      let source = { uri:  response.uri };

      // You can also display the image using data:
      // let source = { uri: 'data:image/jpeg;base64,' + response.data };

      this.setState({
        avatarSource: source
      });
      var login=store.getState();
    uploadImage(this.state.avatarSource.uri,login.login[0].email).then((res)=>{
      console.log("res:",res);
      console.log("res length",res.length);
      if(res!=null)
      {
        ToastAndroid.show('Image Uploaded!', ToastAndroid.SHORT);
         this.setState({UploadAadhar:true});
        store.dispatch(LoginFunction.aadharUploaded(this.state.UploadAadhar));
         //console.log("UploadAadhar:",this.state.UploadAadhar);
      }
    })
    }

  });

          }} block info>
            <Text>Upload Aadhar</Text>
          </Button>
        </Content>

    )
  }
}
