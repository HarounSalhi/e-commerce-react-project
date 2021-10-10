import React, { Component } from 'react';

class contact extends Component {
    
    constructor(props){
        super(props);
        this.state= {
            name:"",email:"", message:"",
            nameError:"",emailError:"",messageError:""
        };
    }
    render() {
        return (
            <div className="col-lg-9">
                <h4>Contact</h4>
                {/* name field */}
                <div className="form-group form-row">
                    <label className="col-lg-4">Name: </label>
                    <input type="text" className="form-control" value={this.state.name} onChange={(event)=>{
                        this.setState({name:event.target.value});
                        this.checkField();
                    }} />
                    {this.nameError}
                </div>
                {/* email field */}
                <div className="form-group form-row">
                    <label className="col-lg-4">Email: </label>
                    <input type="text" className="form-control" value={this.state.email} onChange={(event)=>{
                        this.setState({email:event.target.value});
                        this.checkField();
                    }} />
                    {this.emailError}
                </div>
                {/* message field */}
                <div className="form-group form-row">
                    <label className="col-lg-4">Message: </label>
                    <textarea cols="30" rows="10" className="form-control" value={this.state.message} onChange={(event)=>{
                        this.setState({message:event.target.value});
                        this.checkField();
                    }}/>
                    {this.messageError}
                </div>

                <div>
                    <button className="btn btn-primary">Send</button>
                </div>
            </div>
        );
    }

    checkField=()=>{
        const validEmail = new RegExp(
            '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
         );

        if(!this.name){
            this.setState({nameError:"This field cannot be empty!"});
        }else{
            this.setState({nameError:""});
        }
        if(!this.email){
            this.setState({emailError: "This field cannot be empty!"});
        }else if(!validEmail.test(this.email)){
            this.setState({emailError: "please enter a valid mail"}); 
        }else{
            this.setState({emailError:""});
        }
        if(!this.message){
            this.setState({messageError:"This field cannot be empty!"});
        }else{
            this.setState({messageError:""});
        }
    }
}

export default contact;
