import React, { Component } from 'react';
import productDisplay from "./productDisplay";

this.state ={
    productList:[""]
};

class categorie extends Component {
    render() {
        return (
            <div>
                {
                    this.state.productList.map((prod)=>{
                            return <productDisplay key={prod.id} product={prod}/>;
                        }
                    ) 
                }
            </div>
        );
    }
}

export default categorie;
