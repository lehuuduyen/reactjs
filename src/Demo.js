import React ,{Component} from 'react';
import './App.css';
import ColorPicker from './component/settingColor/ColorPicker';
import SizeSetting from './component/settingColor/SizeSetting';
import Result from './component/settingColor/Result';

class Demo extends Component {

  constructor(probs){
    super(probs);
    this.state ={
      'color':'red',
      'size':15
    } 
  }
  onSetColor = (color) =>{
    this.setState({ 
      'color':color,
      
    })
  }
  onSetSize =(size)=>{
    this.setState({ 
      'size':size,
      
    })
  }

  render(){

    return (
        
      <div className='container mt-50'>
          <div className='row'>
            {/* color picker */}
            <ColorPicker color={this.state.color} onReceveColor={this.onSetColor}/>

            <SizeSetting size={this.state.size} onReceiverSize={this.onSetSize} />
            
            <Result color={this.state.color} size={this.state.size}  />

  
            
          </div>
        </div>


    ); 
  }

}

export default Demo;
