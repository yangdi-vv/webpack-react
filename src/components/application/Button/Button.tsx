import React, { Component } from 'react';
import { ButtonTypes } from '@models/components';
import { getClassName } from '@utils/index';
import './index.styl';

class Button extends Component <ButtonTypes, {}>{
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
