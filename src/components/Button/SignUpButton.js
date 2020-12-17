import React, { Component } from 'react'
import './style.scss'

export class SignUpButton extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <button className="signIn__button" style={{margin : this.props.margin}}> 
                Sign up
            </button>
        )
    }
}

export default SignUpButton
