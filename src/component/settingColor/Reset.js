import React, {Component} from 'react';





class SettingReset extends Component {

    constructor(props){
        super(props)

    }
    clickReset =(a) => {
        console.log(123)
        this.setState({
            color:'red',
            size:'15'
        })
    }



    render(){

        return (
            <button type="button" className="btn btn-primary" onClick={()=>this.clickReset(1)} >reset</button>


         );
    }
   



}
export default SettingReset;