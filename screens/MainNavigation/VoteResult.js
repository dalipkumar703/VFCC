import React from 'react';
import {Content,Button,Body,Card,CardItem,Container} from 'native-base';
import {View, Text,StyleSheet} from 'react-native';
import {getAadharDetail} from '../../api/getUserDetail';
import {getVotingResult,getForm} from '../../api/getFormDetail';
import store from '../../store';
class VoteResult extends React.Component {
      constructor(props){
        super(props);
            this.state={
              res:null,
              form:null
            }
          getAadharDetail(store.getState().login[0].email).then((res)=>{
             console.log("pincode :",res.address_code);
             getVotingResult(res.address_code).then((res)=>{
       console.log("voting result:",res);
               this.setState({res:res});
             })
             getForm(res.address_code).then((result)=>{
               console.log("Form Data",result);
          this.setState({form:result});
             })

        })
      }
render() {
const {navigate}=this.props.navigation;
  return (
    <Container>
    <Content>
  <Card>
  <CardItem header>
               <Text style={styles.title}>Road Cleanliness</Text>
             </CardItem>
        <CardItem button onPress={()=>{
          navigate('VotingResultShow',{result:this.state.res,form:this.state.form});
        }}>
          <Body>
            <Text>
           I am very glad you all given feedback to our Cleanliness program. Thanks for voting us. Check Result :) !!
            </Text>
            <Text></Text>
            <View style={styles.vertical}>
            <Button style={styles.button} rounded>
              <Text>Result!</Text>
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
  },
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
});

export default VoteResult
