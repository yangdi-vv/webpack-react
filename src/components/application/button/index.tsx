import React, { Component } from "react";
import "./index.styl";

function getClassName(nameObj: any){
    let className = '';
    for(let key in nameObj) {
            nameObj[key] && (className = `${className} ${key}`)
    }
    return className;
}

class Button extends Component <{
    size?: any,
    type?: any,
    disabled?: any,
    children?: any,
    onClick?: any,
    fluid?: any,
}>{
    constructor(props) {
        super(props);
    }
    render(){
        const { size, disabled, onClick, fluid } = this.props;
        console.log(size, disabled, onClick, fluid);
        const className = getClassName({
            btn: true,
            [`btn_${size ? size : 'default'}`]: size,
            [`btn_${disabled}`]: disabled,
            [`btn_${fluid ? 'fluid' : ''}`]: fluid,
        });
        return (
            <button className={className} onClick={() => {onClick()}}>
                {this.props.children}
            </button>
        );
    }
}

export default Button;