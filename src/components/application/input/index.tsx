import React, { Component } from 'react';
import "./index.styl"

class Input extends Component<any, any>{

    render(){
        return (
            <input type="text" className="input" placeholder={this.props.placeholder}/>
        )
    }
}

export default Input;