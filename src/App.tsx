import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import "./index.styl";
// import Full from "@/components/layout/full/index";
// import Full from "@layout/full/index";
import Full from "./components/layout/full/index";
import Button from "./components/application/button/index";
import Dialog from "./components/application/dialog";
import Input from "./components/application/input";
import Message from "./components/application/message";
interface IMobxStore {
    name: string;
    greeting: string;
    setName(name:string):void;
}

interface AppProps {
    mobxStore?: IMobxStore  //  这里比较关键 ？表示可或缺，如果没有就会报错。
}

@inject('mobxStore')
@observer
class App extends Component <{
    mobxStore?: any
},{modalVisible: any}> {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false
        }
        console.log(this.props.mobxStore);
    }
    render() {
        return (
            <Full
                header={
                    <div>BROCCOLI & CO.</div>
                }
                content={
                    <div className="content-box">
                        <article className="email-title">
                            A batter way<br/>to enjoy every day.
                        </article>
                        <article className="email-subTitle">
                            Be the first to know when we launch.
                        </article>
                        <Button size="large" type="default" onClick={() => {
                            Message.alert("测试测试");
                            // this.setState({
                            //     modalVisible: true
                            // });
                        }}>Request an invite</Button>

                        <Dialog visible={this.state.modalVisible}
                                close={() => {
                                    this.setState({
                                        modalVisible: false
                                    });
                                }}
                                header={
                                    <span>Request an invite</span>
                                }
                                content={
                                    <div>
                                        <Input placeholder="Full Name"/>
                                        <Input placeholder="Email"/>
                                        <Input placeholder="Confirm email"/>
                                    </div>
                                }
                                footer={
                                    <Button size="default" fluid>Send</Button>
                                }
                        >
                            <Button>send</Button>
                        </Dialog>
                    </div>
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

export default App;