import React, { Component } from 'react';

class Result extends Component {

    constructor(props) {
        super(props)
      

    }
    showColor = (color)=>{
        return {
            border: '3px solid '+color,
            borderColor:color,
            textAlign: 'center',
            marginTop: 10,
            color:color,
            fontSize:this.props.size
          };
    }

    setBorderColor=(color)=>{
       console.log(color)
    }

    render(){
        return (
            <div style={this.showColor(this.props.color)} className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <p>Color : {this.props.color} - Fontsize : {this.props.size}</p>
            <div id="content" >
                Nội dung setting
            </div> 
            </div>

        );
    }



}
export default Result;