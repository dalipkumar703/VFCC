import React, { Component } from 'react';
import { Animated } from 'react-native';
import randomcolor from 'randomcolor';

class AnimatedBar extends Component {
  constructor(props) {
    super(props);
 this._width = new Animated.Value(0);
    this.state = {
      color: randomcolor(),
      choice:''
    };

  }

  componentDidMount() {
   const { value } = this.props;
   Animated.timing(this._width, {
     toValue: value,
   }).start();
   const {data}=this.props;
   const {result}=this.props;
    if(data==1)
    {
      this.setState({choice:result.answer_1});
    }
    else if(data==2)
    {
      this.setState({choice:result.answer_2});

    }
    else if(data==3)
    {
      this.setState({choice:result.answer_3});

    }else if(data==4)
    {
      this.setState({choice:result.answer_4});

    }else if(data==5)
    {
      this.setState({choice:result.answer_5});

    }else if(data==6)
    {
      this.setState({choice:result.answer_6});

    }else if(data==7)
    {
      this.setState({choice:result.answer_7});

    }else if(data==8)
    {
      this.setState({choice:result.answer_8});

    }else if(data==9)
    {
      this.setState({choice:result.answer_9});

    }else if(data==10)
    {
      this.setState({choice:result.answer_10});

    }

 }

  render() {

    const barStyles = {
      backgroundColor: this.state.color,
      height: 25,
      width: this._width,
      borderTopRightRadius: 4,
      borderBottomRightRadius: 4,
    };
        return (
      <Animated.View>
      <Animated.Text>{this.state.choice}</Animated.Text>
      <Animated.View style={barStyles}/>
  
     </Animated.View>
    );
  }
}

export default AnimatedBar;
