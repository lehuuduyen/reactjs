import React,{Component} from 'react';
import SettingReset from './Reset';
class SizeSetting extends Component  {

  downSize = ()=> {
    this.props.onReceiverSize(this.props.size - 1)

  }
  upSize = ()=> {
    this.props.onReceiverSize(this.props.size +1)

  }

  render(){
   
    
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <div className="panel panel-warning">
            <div className="panel-heading">
              <h3 className="panel-title">Size : {this.props.size} px</h3>
            </div>
            <div className="panel-body">
              <button type="button" className="btn btn-success" onClick={() => this.downSize()} >Giảm</button>&nbsp;
              <button type="button" className="btn btn-success" onClick={() => this.upSize()}  >Tăng</button>
            </div>
          </div>
          <SettingReset/>
        </div>

  );

  }
   


}
export default SizeSetting;