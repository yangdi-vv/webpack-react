import React, { Component } from 'react';
import "./index.styl"

class Input extends Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            showError: false
        }
    }
    // static getDerivedStateFromProps (nextProps, prevState){
    //     console.log("________________", nextProps, prevState)
    //     if(nextProps.value !== prevState.value){
    //         console.log("________________", nextProps, prevState)
    //
    //         // this.validateInput();
    //     }
    //     return {};
    // }
    validateInput() {
        // return validate promise
        return new Promise((re) => {
            const {rules, value} = this.props;

            if(rules){
                // check params && return result
                const {reg, require, maxLength, callback} = rules;
                const isOk_reg = reg ? reg.test(value) : true;
                const isOk_require = require ? value.length > 0 : true;
                const isOk_maxLength = maxLength ? value.length < maxLength : true;
                const isOk_callback = callback ? callback(value) : true;
                const isOK = [isOk_reg, isOk_require, isOk_maxLength, isOk_callback].every((item) => item)
                this.setState({
                    showError: !isOK
                })
                re(isOK);
            } else {
                // no need check params
                this.setState({
                    showError: false
                })
                re(true);
            }
        });
    }
    inputHandler(e?: any){
        // change props + validate value
        this.props.onClick(e.target.value);
        setTimeout(() => {
            this.validateInput();
        }, 100);
    }
    render(){
        const { showError } = this.state;
        const { placeholder, rules = {} } = this.props;

        return (
            <div className="invite-input">
                <input placeholder={placeholder} type="text" className="input"
                       onChange={(e) => {
                            this.inputHandler(e);
                       }}
                />
                {showError ? <span className="error-message">{rules.message || 'error'}</span> : ''}
            </div>
        )
    }
}

export default Input;