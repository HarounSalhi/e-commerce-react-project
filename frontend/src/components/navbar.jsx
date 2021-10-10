import React,{Component} from "react";
import { NavLink } from "react-router-dom";
export class NavBar extends Component{
    render(){
        return(
        <div className="NavBar text-uppercase">
            <img className="logo" src="../logo.svg" alt="logo"/>
            <nav>
                <ul>
                    <li><NavLink to="#">Home</NavLink></li>
                    <li><NavLink to="#">A propos</NavLink></li>
                    <li><NavLink to="#">Produits</NavLink></li>
                    <li><NavLink to="/categorie">Catégories</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>  

                    (LoggedIn==true)?(
                        <li><NavLink to="/contact">log Out</NavLink></li> 
                        {this.props.updateLoggedIN(true)}
                    ):(
                        <li><NavLink to="/contact">Log In</NavLink></li>
                        {this.props.updateLoggedIN(false)}
                    )
                </ul>    
            </nav>
        </div>    
        ) 
    }
}