import React from 'react';
import { ScrollView,StyleSheet, Text, View,Animated,Dimensions } from 'react-native';
import {TouchableHighlight,TextInput,ToastAndroid} from 'react-native';
import {Button, Container,Picker, Header, Content, Form, Item, Input, Label } from 'native-base';
import store from '../store';
import AnimatedBar from '../components/AnimatedBar';
const window = Dimensions.get('window');
const DELAY = 100;
export default class VotingResultShow extends React.Component {
  constructor(props) {
   super(props);

   this.state = {
     questions:{
       question1:[],
       question2:[]
     },
   };
}
componentDidMount() {
    this.generateData();
  }

  generateData = () => {
    const {state}=this.props.navigation;
    console.log("no. of questions:",state.params.form.length);
    var questions={
      question1:[],
      question2:[]
    };
    for(let index=0;index<state.params.form.length;index++)
    {
     const data = [];
      console.log("type:",state.params.form[index].type);
      if(state.params.form[index].type==="range")
      {
        for (let i = 1; i <= 10; i++) {
          if(i==1)
          {
            console.log("answer"+i+":",state.params.result.range.answer_one);
            data.push(Math.floor(((parseInt(state.params.result.range.answer_one))/12)* window.width));

          }
          else if(i==2)
          {
            console.log("answer"+i+":",state.params.result.range.answer_two);
            data.push(Math.floor(((parseInt(state.params.result.range.answer_two))/12)* window.width));

          }
          else if(i==3)
          {
            console.log("answer"+i+":",state.params.result.range.answer_three);
            data.push(Math.floor(((parseInt(state.params.result.range.answer_three))/12)* window.width));

          }
          else if(i==4)
          {
            console.log("answer"+i+":",state.params.result.range.answer_four);
            data.push(Math.floor(((parseInt(state.params.result.range.answer_four))/12)* window.width));

          }
          else if(i==5)
          {
            console.log("answer"+i+":",state.params.result.range.answer_five);
            data.push(Math.floor(((parseInt(state.params.result.range.answer_five))/12)* window.width));

          }
          else if(i==6)
          {

            console.log("answer"+i+":",state.params.result.range.answer_six);
            data.push(Math.floor(((parseInt(state.params.result.range.answer_six))/12)* window.width));
          }
          else if(i==7)
          {

            console.log("answer"+i+":",state.params.result.range.answer_seven);
            data.push(Math.floor(((parseInt(state.params.result.range.answer_seven))/12)* window.width));
          }
          else if(i==8)
          {
            console.log("answer"+i+":",state.params.result.range.answer_eight);
            data.push(Math.floor(((parseInt(state.params.result.range.answer_eight))/12)* window.width));

          }
          else if(i==9)
          {
            console.log("answer"+i+":",state.params.result.range.answer_nine);
            data.push(Math.floor(((parseInt(state.params.result.range.answer_nine))/12)* window.width));

          }
          else if(i==10)
          {
            console.log("answer"+i+":",state.params.result.range.answer_ten);
            data.push(Math.floor(((parseInt(state.params.result.range.answer_ten))/12)* window.width));

          }
                  }
      questions.question1=data;

      }
      else {
        for (let i = 1; i <= 4; i++) {
          if(i==1)
          {
            console.log("answer"+i+":",state.params.result.check.answer_one);
            data.push(Math.floor(((parseInt(state.params.result.check.answer_one))/12)* window.width));
          }
          else if(i==2)
          {
            console.log("answer"+i+":",state.params.result.check.answer_two);
            data.push(Math.floor(((parseInt(state.params.result.check.answer_two))/12)* window.width));
          }
          else if(i==3)
          {
            console.log("answer"+i+":",state.params.result.check.answer_three);
            data.push(Math.floor(((parseInt(state.params.result.check.answer_three))/12)* window.width));
          }
          else if(i==4)
          {
            console.log("answer"+i+":",state.params.result.check.answer_four);
            data.push(Math.floor(((parseInt(state.params.result.check.answer_four))/12)* window.width));
          }

        }
        questions.question2=data;
      }
    }



    this.setState({
     questions:questions
    });
  }
  render() {
    const {state}=this.props.navigation;
    console.log("questions:",this.state.questions);
         return (
<ScrollView >
<View style={styles.item}>
<Text></Text>
<Text>{state.params.form[1].question}</Text>
{this.state.questions.question2.map((value, index) => <AnimatedBar value={value} data={index} result={state.params.form[1]} delay={DELAY * index} key={index} />)}
<Text></Text>
<Text>{state.params.form[0].question}</Text>
{this.state.questions.question1.map((value, index) => <AnimatedBar value={value} data={index} result={state.params.form[0]} delay={DELAY * index} key={index} />)}

  </View>
</ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  item: {
   flexDirection: 'column',
   marginBottom: 5,
   paddingHorizontal: 10
 },
 label: {
    color: '#CBCBCB',
    flex: 1,
    fontSize: 12,
    position: 'relative',
    top: 2
  },
   dataNumber: {
    color: '#CBCBCB',
    fontSize: 11
  }
});
