import React, {Component} from "react";
import './Hello.css';
// import Hello from "./Hello.js";
// eslint-disable-next-line no-undef,no-unused-vars
class Hello extends Component  {
    render() {
        return(
        <div className={'f1 tc'}>
            <h1> Hello World </h1>
            <p>Welcome to React</p>
            <p1>{this.props.greeting}</p1>
        </div>
        );
    }
}

export default Hello;