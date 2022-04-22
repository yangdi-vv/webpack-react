import React, { Component } from 'react';
import Full from '@layout/Full';
import Content from './Content';
import './index.styl';

class Home extends Component <{},{}> {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Full
                header={
                    <div>BROCCOLI & CO.</div>
                }
                content={
                    <Content/>
                }
                footer={
                    <article className="footer-box">
                        Made with ❤ in Melbourne.<br/> © 2016 Broccoli & Co. All rights reserved.
                    </article>
                }
            />
        );
    }
}

export default Home;