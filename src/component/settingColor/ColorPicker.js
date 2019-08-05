import React,{Component} from 'react';

class ColorPicker extends Component{


    constructor(props){
      super(props);
      this.state ={
        colors: ['red','green','blue','#ccc']
      }
    }
    showColor(color){
      console.log(this.props.color)
      return {
        backgroundColor :color,width: 50,height: 50,marginRight:10
      };
    }
    setActiveColor(color){
      this.props.onReceveColor(color)
    }

    render(){
      var elmColors = this.state.colors.map((color,index)=> {
        return <div key={index}
                    style={this.showColor(color)}
                    className ={this.props.color ===color ?'active':""}
                    onClick={() =>this.setActiveColor(color)}
                >

              </div>
      })

      return (
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">Color Picker</h3>
          </div>
          <div className="panel-body" style={{display:"flex"}}>
            {elmColors}
              <hr/>
          </div>
        </div>
      </div>

    );
    }
   



}
export default ColorPicker;