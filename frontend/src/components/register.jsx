import React, { Component } from 'react';

class register extends Component {
    constructor(props){
        super(props);
        this.state= {
            name:"",phone:"",address:"",email:"", password:"",passwordConfiramtion:"",
            nameError:"",phoneError:"",emailError:"",passwordError:"",passwordConfiramtionError:""
        };
    }

    render() {
        return (
            <div className="col-lg-9">
                <h4>Registre</h4>
                {/* name field */}
                <div className="form-group form-row">
                    <label className="col-lg-4">name: </label>
                    <input type="text" className="form-control" value={this.state.name} onChange={(event)=>{
                        this.setState({name:event.target.value});
                        this.checkField();
                    }} />
                    {this.nameError}
                </div>
                {/* phone field */}
                <div className="form-group form-row">
                    <label className="col-lg-4">Phone: </label>
                    <input type="number" className="form-control" value={this.state.phone} onChange={(event)=>{
                        this.setState({phone:event.target.value});
                        this.checkField();
                    }} />
                    {this.phoneError}
                </div>
                {/* address field */}
                <div className="form-group form-row">
                    <label className="col-lg-4">Address: </label>
                    <input type="text" className="form-control" value={this.state.address} onChange={(event)=>{
                        this.setState({address:event.target.value});
                        this.checkField();
                    }} />
                    {this.addressError}
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
                {/* password field */}
                <div className="form-group form-row">
                    <label className="col-lg-4">Password: </label>
                    <input type="password" className="form-control" value={this.state.password} onChange={(event)=>{
                        this.setState({password:event.target.value});
                        this.checkField();
                    }}/>
                    {this.passwordError}
                </div>
                {/* password confirmation field */}
                <div className="form-group form-row">
                    <label className="col-lg-4">Confirm Password: </label>
                    <input type="password" className="form-control" value={this.state.passwordConfiramtion} onChange={(event)=>{
                        this.setState({passwordConfiramtion:event.target.value});
                        this.checkField();
                    }}/>
                    {this.passwordConfiramtionError}
                </div>

                <div>
                    <button className="btn btn-primary">Register</button>
                </div>
            </div>
        );
    }

    checkField=()=>{
        const validEmail = new RegExp(
            '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
         );
        const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');

        if(!this.name){
            this.setState({nameError:"This field cannot be empty!"});
        }else{
            this.setState({nameError:""});
        }
        if(!this.phone){
            this.setState({phoneError:"This field cannot be empty!"});
        }else{
            this.setState({phoneError:""});
        }
        if(!this.address){
            this.setState({addressError:"This field cannot be empty!"});
        }else{
            this.setState({addressError:""});
        }
        if(!this.email){
            this.setState({emailError: "This field cannot be empty!"});
        }else if(!validEmail.test(this.email)){
            this.setState({emailError: "please enter a valid mail"}); 
        }else{
            this.setState({emailError:""});
        }
        if(!this.password){
            this.setState({passwordError: "This field cannot be empty!"});
        }else if(!validPassword.test(this.password)){
            this.setState({passwordError: "please enter a valid mail"}); 
        }else{
            this.setState({passwordError:""});
        }
        if(!this.passwordConfiramtion){
            this.setState({passwordConfiramtionError:"This field cannot be empty!"});
        }else if(!this.password===this.passwordConfiramtion){
            this.setState({passwordConfiramtionError:"You have entred a different value!"});
        }else{
            this.setState({passwordConfiramtionError:""});
        }
    }
}

export default register;
