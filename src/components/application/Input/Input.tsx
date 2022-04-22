import React, { Component } from 'react';
import './index.styl';

class Input extends Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            showError: false,
            value: ''
        }
    }
    validateInput() {
        // return validate promise
        return new Promise((resolve) => {
            const {rules} = this.props;
            const {value} = this.state;

            if(rules) {
                // check params && return result
                const {reg, require, maxLength, minLength, callback} = rules;
                const isOk_reg = reg ? reg.test(value) : true;
                const isOk_require = require ? value.length > 0 : true;
                const isOk_maxLength = maxLength ? value.length < maxLength : true;
                const isOk_minLength = minLength ? value.length >= minLength : true;
                const isOk_callback = callback ? callback(value) : true;
                const isOK = [isOk_reg, isOk_require, isOk_maxLength, isOk_minLength, isOk_callback].every((item) => item)
                this.setState({
                    showError: !isOK
                })
                resolve(isOK);
            } else {
                // no need check params
                this.setState({
                    showError: false
                })
                resolve(true);
            }
        });
    }
    inputHandler(e?: any) {
        // change props + validate value
        this.props.onChange(e.target.value);
        this.setState({
            value: e.target.value
        }, () => {
            this.validateInput();
        });
    }
    render() {
        const { showError } = this.state;
        const { placeholder, rules = {}, disabled } = this.props;

        return (
            <div className="invite-input">
                <input placeholder={placeholder} type="text" className="input" disabled={disabled}
                       onChange={(e) => {
                           this.inputHandler(e);
                       }}
                />
                {showError && <span className="error-message">{rules.message || 'error'}</span>}
            </div>
        )
    }
}

export default Input;