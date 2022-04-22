import React, { Component } from 'react';
import './index.styl';

class Dialog extends Component<any, any> {
    constructor(props) {
        super(props);
    }
    render() {
        const className = `invite-mask ${this.props.className}`;

        return this.props.visible ? (
            <div className={className}>
                <div className="invite-dialog">
                    <span className="dialog-close" onClick={() => {this.props.close()}}>x</span>
                    {this.props.header ?
                        <section className="dialog-header">
                            {this.props.header}
                        </section> : <></>}
                    {this.props.content ?
                        <section className="dialog-content">
                            {this.props.content}
                        </section> : <></>}
                    {this.props.footer ?
                        <section className="dialog-footer">
                            {this.props.footer}
                        </section> : <></>}
                </div>
            </div>
        ):(<></>)
    }
}
export default Dialog
