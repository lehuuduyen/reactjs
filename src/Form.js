import React ,{Component} from 'react';

class Form extends Component {
    
    constructor(props){
        super(props);
        this.state ={
            'username':'',
            'password':'',
            'status':''
          }    
    }
    onChangeForm = (event) =>{
        const {name, value} = event.target
        this.setState({
            [name]: value
          });    
          
    }
    onSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
    }
    
  render(){
  
    return (
        
        
        
        <form action="" method="POST">
            <legend>Form title</legend>
        
            <div className="form-group">
                <label >username</label>
                <input type="text" className="form-control" name="username" onChange={this.onChangeForm} id="" placeholder="Input field username"/>
            </div>
        
            <div className="form-group">
                <label>Pass</label>
                <input type="text" className="form-control" id="" onChange={this.onChangeForm} name="password" placeholder="Input field password"/>
            </div>
            <div className="form-group">
                <label>Status</label>
                
                <select name="status" id="select" className="form-control" required="required">
                    <option value={1}>abc</option>
                    <option value={2}>def</option>
                    <option value={3}>ghi</option>

                </select>
                
            </div>
            <button type="submit" onClick={this.onSubmit} className="btn btn-primary">Submit</button>
        </form>
        


    ); 
  }

}

export default Form;
