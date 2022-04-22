import React from 'react';
import './index.styl';

interface FullProps {
    header?: any,
    content?: any,
    footer?: any,
}

class Full extends React.Component<FullProps, {}> {
    constructor(props) {
        super(props);
    }
    render() {
        const { header, content, footer} = this.props;

        return (
            <div className="invite-full">
                <section className="invite-header">{header}</section>
                <section className="invite-content">{content}</section>
                <section className="invite-footer">{footer}</section>
            </div>
        );
    }
}

export default Full;