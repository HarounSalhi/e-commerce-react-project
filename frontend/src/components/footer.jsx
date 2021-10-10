import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="row">
                    <div className="col-4 ">
                        <h3>about us</h3>
                        <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti esse, architecto nam voluptates deserunt earum cupiditate optio omnis accusamus totam, magni eaque, animi nostrum est dolorem officia recusandae incidunt pariatur!</p>
                    </div>
                    <div className="col-4">
                        <h3>Information légales</h3>
                        <ul>
                            <li><a href="#">livraison</a></li>
                            <li><a href="#">conditions d'utilisation</a></li>
                            <li><a href="#">paiement securisé</a></li>
                        </ul>
                    </div>
                    <div className="col-4">
                        <h3>Contact</h3>
                        <ul>
                            <li><FontAwesomeIcon icon="fa-solid fa-location-dot" /></li>
                            <li><FontAwesomeIcon icon={faCoffee} /></li>
                            <li><FontAwesomeIcon icon={faCoffee} /></li>
                        </ul>
                    </div>
                    <hr/>
                    <div>
                        <p>All rights reserved &copy; this website is developped by <strong>Haroun Salhi</strong></p>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;
