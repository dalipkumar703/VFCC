
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {TouchableHighlight,TextInput,ToastAndroid} from 'react-native';
import {Button, Container,Picker, Header, Content, Form, Item, Input, Label } from 'native-base';
import {NavigationActions} from 'react-navigation';
import store from '../store';
import submitVotingForm from '../api/formSubmit';
export default class FillForm extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
       selectedItem: undefined,
       selected1: 'key1',
       selected2: 'key2',
       results: {
           items: []
       }
   }
}
onValueChange(value: string) {
   this.setState({
       selected1 : value
   });
}
onValueChangeQuestion2(value: string) {
   this.setState({
       selected2 : value
   });
}
  render() {
       const {state}=this.props.navigation;
       const {goBack}=this.props.navigation;
       console.log("Fill form detail:",state.params.form);
    return (
<View style={styles.container}>
        <Container>

        <Content>
          <Form style={styles.form}>
             <Text></Text>
              <Label>{state.params.form[0].question}</Label>
              <Picker
                mode="dropdown"
                    selectedValue={this.state.selected1}
                    onValueChange={this.onValueChange.bind(this)}>
                    <Item label={state.params.form[0].answer_1} value="answer_one" />
                    <Item label={state.params.form[0].answer_2} value="answer_two" />
                    <Item label={state.params.form[0].answer_3} value="answer_three" />
                    <Item label={state.params.form[0].answer_4} value="answer_four" />
                    <Item label={state.params.form[0].answer_5} value="answer_five" />
                    <Item label={state.params.form[0].answer_6} value="answer_six" />
                    <Item label={state.params.form[0].answer_7} value="answer_seven" />
                    <Item label={state.params.form[0].answer_8} value="answer_eight" />
                    <Item label={state.params.form[0].answer_9} value="answer_nine" />
                    <Item label={state.params.form[0].answer_10} value="answer_ten" />

               </Picker>
               <Text></Text>
                <Label>{state.params.form[1].question}</Label>
                <Picker
                      mode="dropdown"
                      selectedValue={this.state.selected2}
                      onValueChange={this.onValueChangeQuestion2.bind(this)}>
                      <Item label={state.params.form[1].answer_1} value="answer_one" />
                      <Item label={state.params.form[1].answer_2} value="answer_two" />
                      <Item label={state.params.form[1].answer_3} value="answer_three" />
                      <Item label={state.params.form[1].answer_4} value="answer_four" />
                 </Picker>
            <Button onPress={()=>{
            var answer={
          pincode: store.getState().pincode,
          email: store.getState().login[0].email,
          form_id: state.params.form[0].form_id,
          answers:[
          {
          type:"range",
          question_id: state.params.form[0].question_id,
          vote:this.state.selected1
        },
        {
        type:"checkbox",
        question_id: state.params.form[1].question_id,
        vote:this.state.selected2
      }
        ]
      };
      console.log("anwers:",answer);
submitVotingForm(answer).then((res)=>{
  console.log("form Submit:",res);
 if(res==="success")
 {
   ToastAndroid.show('Thanks for Voting!!', ToastAndroid.SHORT);
    goBack();
 }
})

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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form:{
    justifyContent:'center',
  }
});
