import React, { Component } from 'react';
import './index.styl';

function getClassName(nameObj: any) {
    let className = '';
    for (let key in nameObj) {
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
    render() {
        const { size, disabled, onClick, fluid } = this.props;
        const className = getClassName({
            btn: true,
            [`btn_${size ? size : 'default'}`]: size,
            btn_disabled: disabled,
            btn_fluid: fluid,
        });
        return (
            <button className={className} onClick={() => {onClick()}} disabled={disabled}>
                {this.props.children}
            </button>
        );
    }
}

export default Button;
