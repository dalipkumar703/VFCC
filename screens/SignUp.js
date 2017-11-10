
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';
import {TouchableHighlight,TextInput} from 'react-native';
import signUp from '../api/auth';
//import {Provider} from 'react-redux';
import store from '../store';
import  * as Login from '../actions/loginAction';
import {Button, Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import {NavigationActions} from 'react-navigation';
export default class SignUp extends React.Component {
    constructor(props){
    super(props);
    this.state={
      name:"",
      email:"",
      password:"",
      formError:{name:"",email:"",password:""}
    }
    this.onPress.bind(this);
    }
    onPress()
    {
      console.log("helo");
    }


  render() {
    return (


     <View style={styles.container}>
     <Container>
     <Header />
     <Content>
       <Form>
           <Item stackedLabel>
           <Label>Username</Label>
           <Input onChangeText={(text)=>{
                if(/^[a-z0-9]+$/.test(text))
                {
                 this.setState({name:text});
                }
             else {
             this.setState({formError:{name:"Only character and number is allowed",email:this.state.formError.email,password:this.state.formError.password}});
                        }

           }}/>
         </Item>
         <Text>{this.state.formError.name}</Text>
         <Item stackedLabel last>
           <Label>Email</Label>
           <Input onChangeText={(text)=>{
                  console.log("text:",text);
                  if(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(text))
                  {
                   this.setState({email:text});
                   this.setState({formError:{name:this.state.formError.name,email:"",password:this.state.formError.password}});

                 console.log("right");
                  }
               else {
               this.setState({formError:{name:this.state.formError.name,email:"Email is not correct",password:this.state.formError.password}});
                 console.log("wrong",this.state);
                          }
           }} />

         </Item>
         <Text>{this.state.formError.email}</Text>
         <Item stackedLabel last>
           <Label>Password</Label>
           <Input secureTextEntry={true}  onChangeText={(password)=>{
             console.log("password:",password);
             if(password.length>=6)
             {
               console.log("right");
               this.setState({password:password});
               this.setState({formError:{name:this.state.formError.name,email:this.state.formError.email,password:""}});

             }
             else {
               console.log("wrong");
               this.setState({formError:{name:this.state.formError.name,email:this.state.formError.email,password:"Password should be 6 character"}});
             }
           }}/>
         </Item>
        <Text>{this.state.formError.password}</Text>
         <Button onPress={()=>{
          signUp(this.state.name,this.state.email,this.state.password).then((res)=>{
            console.log("res:",res);
           store.dispatch(Login.loginSuccessfully(res));

            this.props.navigation.dispatch(resetAction);
          })

          console.log("done");

         }} block info>
           <Text>Submit</Text>
         </Button>
       </Form>
     </Content>
   </Container>

    </View>

    );
  }
}
const resetAction = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'Home'})
  ]
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
