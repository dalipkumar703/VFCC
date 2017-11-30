import React from 'react';
import {View, Image,Text,StyleSheet,Alert,ToastAndroid} from 'react-native';
import {Button,Header,Body,CardItem,Card,Content,Container,ActionSheet} from 'native-base';
import {checkAadharSubmit,getAadharDetail} from '../api/getUserDetail';
import getForm from '../api/getFormDetail';
import store from '../store';
 const FormShow=({navigate,forms})=> {
return (
  <Content>
<Card>
<CardItem header>
             <Text style={styles.title}>Road Cleanliness</Text>
           </CardItem>
      <CardItem button onPress={()=>{
        console.log("form 1:",forms);
             var form_question=[];
        forms.forEach(function(form){
          console.log("form object element:");
         if(form.form_id==='1')
         {
           form_question.push(form);
         }
        })
        navigate('FillForm',{form:form_question});
      }}>
        <Body>
          <Text>
         Our roads are not clean from last 6 month. I want to support our area Cleanliness by raising problem to community people. Please give vote and solve problem together.
          </Text>
          <Text></Text>
          <View style={styles.vertical}>
          <Button style={styles.button} rounded>
            <Text>Vote!</Text>
          </Button>
          <Text></Text>
          <Button style={styles.button} rounded danger>
            <Text>Cancel</Text>
          </Button>
          </View>
        </Body>
      </CardItem>
    </Card>
</Content>

)
}
const styles=StyleSheet.create({
  vertical:{
    flexDirection:'row'
  },
  button:{
    width:100,
    justifyContent:'center',
   marginRight:30
 },
 title:{
   fontSize:20,
   color:'#000000'

 }
})
export default FormShow;
