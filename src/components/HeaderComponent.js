import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

class Header extends Component{
    render(){
        return(
            <>
                <Navbar dark >
                    <div className="container">
                        <NavbarBrand href="/">Restorante</NavbarBrand>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="rom rom-header">
                            <div className="col-12 col-sm-6">
                                <h1>Restorante</h1>
                                <p>We take inspiration from the world's best cuisines, and create a unique fusion experice!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </>
        );
    }
}

export default Header;