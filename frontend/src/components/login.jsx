import React, { Component } from 'react';

class login extends Component {
    constructor(props){
        super(props);
        this.state= {
            email:"", password:"",
            emailError:"",passwordError:""
        };
    }
    render() {
        return (
            <div className="col-lg-9">
                <h4>Login</h4>
                {/* email field */}
                <div className="form-group form-row">
                    <label className="col-lg-4">Email: </label>
                    <input type="text" className="form-control" value={this.state.email} onChange={(event)=>{
                        this.setState({email:event.target.value});
                        this.checkField();
                    }} />
                    {this.emailError}
                </div>
                {/* password field */}
                <div className="form-group form-row">
                    <label className="col-lg-4">Password: </label>
                    <input type="password" className="form-control" value={this.state.password} onChange={(event)=>{
                        this.setState({password:event.target.value});
                        this.checkField();
                    }}/>
                    {this.passwordError}
                </div>

                <div>
                    <button className="btn btn-primary">Login</button>
                </div>
            </div>
        );
    }
    checkField=()=>{
        const validEmail = new RegExp(
            '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
         );

        if(!this.email){
            this.setState({emailError: "This field cannot be empty!"});
        }else if(!validEmail.test(this.email)){
            this.setState({emailError: "please enter a valid mail"}); 
        }else{
            this.setState({emailError:""});
        }
        if(!this.password){
            this.setState({passwordError:"This field cannot be empty!"});
        }else{
            this.setState({passwordError:""});
        }
    }
}

export default login;
