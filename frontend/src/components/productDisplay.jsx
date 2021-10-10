import React, { Component } from 'react';

class productDisplay extends Component {
    render() {
        return (
            <div className="product-display-item">
                <img src="#{this.props.product.img}" alt="Product" />
                <h3>#{this.props.product.title}</h3>
                <p>#{this.props.product.description}</p>
                <a href="#">View product</a>    
            </div>
        );
    }
}

export default productDisplay;
