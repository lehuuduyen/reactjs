import React ,{Component} from 'react';
import './App.css';
import ColorPicker from './component/settingColor/ColorPicker';
import SizeSetting from './component/settingColor/SizeSetting';
import Result from './component/settingColor/Result';

class Demo extends Component {

  constructor(probs){
    super(probs);
    this.state ={
      'color':'red'
    }
  }
  onSetColor = (color) =>{
    this.setState({
      'color':color
    })
  }


  render(){

    return (
        
      <div className='container mt-50'>
          <div className='row'>
            {/* color picker */}
            <ColorPicker color={this.state.color} onReceveColor={this.onSetColor}/>

            <SizeSetting/>
            
            <Result/>

  
            
          </div>
        </div>


    ); 
  }

}

export default Demo;
