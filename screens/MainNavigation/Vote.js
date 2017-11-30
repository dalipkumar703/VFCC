import React from 'react';
import {View, Image,Text,StyleSheet,Alert,ToastAndroid} from 'react-native';
import {Button,Header,Content,Container,ActionSheet} from 'native-base';
import {connect} from 'react-redux';
import ImagePicker from 'react-native-image-picker';
import store from '../../store';
import {checkAadharSubmit,getAadharDetail} from '../../api/getUserDetail';
import {getForm} from '../../api/getFormDetail';
import uploadImage from '../../api/updateDetail';
import UploadAadhar from '../../components/UploadAadhar';
import * as LoginFunction from '../../actions/loginAction';
import FormShow from '../../components/FormShow';

class Vote extends React.Component {
   constructor(props){
     super(props);
     this.state={avatarSource:null,aadharUploaded:false,form:null};
     getAadharDetail(store.getState().login[0].email).then((res)=>{
          console.log("pincode :",res.address_code);
          store.dispatch(LoginFunction.savePincode(res.address_code));
          getForm(res.address_code).then((result)=>{
            console.log("Form Data",result);
       this.setState({form:result});
          })
     })
  //this.getImage=this.getImage.bind(this);
     var login=store.getState();
     checkAadharSubmit(login.login[0].email).then((res)=>{
       console.log("result :",res);
             this.setState({aadharUploaded:res})
             store.dispatch(LoginFunction.aadharUploaded(this.state.aadharUploaded));

     });
   }

render(){
  const {vote}=this.props;
  const {navigate}=this.props.navigation;
  console.log("vote:",vote);
  console.log("Form:",this.state.form);
  return (
<Container>
    {vote ? (
      <FormShow  navigate={navigate} forms={this.state.form}/>
      ) : (
        <UploadAadhar />
          )}
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
const mapStateToProps=(state)=>{
  console.log("state:",state);
  console.log("todos:",state.vote);
  return {
    vote:state.vote
  }
}
export default connect(mapStateToProps)(Vote);
