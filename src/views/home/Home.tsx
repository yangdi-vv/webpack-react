import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
// import Full from '@/components/layout/full/index';
// import Full from '@layout/full/index';
import Full from '../../components/layout/Full';
import Button from '../../components/application/Button';
import Dialog from '../../components/application/Dialog';
import Input from '../../components/application/Input';
import Message from '../../components/application/Message';
import { _request } from '../../utils';
import { sendEmailUrl } from '../../api';
import './index.styl';

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
    mobxStore?: any,
},{
    showSendDialog: boolean,
    showDoneDialog: boolean,
    name: any,
    email: any,
    emailConfirm: any,
    emailRef: any,
    emailConfirmRef: any,
    nameRef: any,
    errorMessage: any,
    disabled: any,
}> {
    constructor(props) {
        super(props);
        this.state = {
            showSendDialog: false,
            showDoneDialog: false,
            name: '',
            email: '',
            emailConfirm: '',
            emailRef: React.createRef(),
            emailConfirmRef: React.createRef(),
            nameRef: React.createRef(),
            errorMessage: '',
            disabled: false,
        };
    }
    async send() {

        const isOkName = await this.state.nameRef.current.validateInput();
        const isOkEmail = await this.state.emailRef.current.validateInput();
        const isOkEmailConfirm = await this.state.emailConfirmRef.current.validateInput();

        if ([isOkName, isOkEmail, isOkEmailConfirm].every((item) => item)) {
            this.setState({
                disabled: true
            })

            const {name, email} = this.state;
            _request({
                type: 'post',
                url: sendEmailUrl,
                data: {name, email},
                success: (res) => {
                    if(res === "Registered"){
                        this.setState({
                            showSendDialog: false,
                            showDoneDialog: true
                        });
                    }else{
                        Message.error('Request error!');
                    }
                },
                error: (error) => {
                    console.log(error, 'error');
                },
                fail: (error) => {
                    this.setState({
                        errorMessage: error?.response?.data?.errorMessage
                    });
                    console.log(error?.response?.data?.errorMessage,this.state.errorMessage,  'fail');
                },
                final: (error) => {
                    this.setState({
                        disabled: false
                    })
                },
            });
        }else{
            Message.error('Please check the input format!');
        }
    }
    render() {
        const {showSendDialog, showDoneDialog,
            name, email, emailConfirm, emailRef,
            emailConfirmRef, nameRef, disabled, errorMessage} = this.state;

        return (
            <Full
                header={
                    <div>BROCCOLI & CO.</div>
                }
                content={
                    <div className="content-box">
                        <article className="content-title">
                            A better way<br/>to enjoy every day.
                        </article>
                        <article className="content-subTitle">
                            Be the first to know when we launch.
                        </article>
                        <Button size="large" type="default" onClick={() => {
                            this.setState({
                                showSendDialog: true
                            });
                        }}
                        >Request an invite</Button>

                        <Dialog visible={showSendDialog} className="dialog-content"
                                close={() => {
                                    this.setState({
                                        showSendDialog: false
                                    });
                                }}
                                header={
                                    <span className="font-italic">Request an invite</span>
                                }
                                content={
                                    <div>
                                        <Input value={name}
                                               disabled={disabled}
                                               rules={{
                                                   require: true,
                                                   minLength: 3,
                                                   message: 'Full name needs to be at least 3 characters long'
                                               }}
                                               placeholder="Full Name"
                                               ref={nameRef}
                                               onChange={(value) => {
                                                   this.setState({
                                                       name: value
                                                   })
                                               }}
                                        />
                                        <Input value={email}
                                               disabled={disabled}
                                               placeholder="Email"
                                               rules={{
                                                   reg: /^([a-zA-Z\d])(\w|-)+@[a-zA-Z\d]+\.[a-zA-Z]{2,4}$/,
                                                   message: 'Please check the email format'
                                               }}
                                               ref={emailRef}
                                               onChange={(value) => {
                                                   this.setState({
                                                       email: value
                                                   })
                                               }}
                                        />
                                        <Input value={emailConfirm}
                                               disabled={disabled}
                                               placeholder="Confirm email"
                                               rules={{
                                                   require: true,
                                                   callback: (value)=>{
                                                       return email === emailConfirm
                                                   },
                                                   message: 'Inconsistent mailbox input'
                                               }}
                                               ref={emailConfirmRef}
                                               onChange={(value) => {
                                                   this.setState({
                                                       emailConfirm: value
                                                   })
                                               }}
                                        />
                                    </div>
                                }
                                footer={
                                    <>
                                        <Button size="default" disabled={disabled} fluid onClick={() => {
                                            this.send();
                                        }}
                                        >{disabled ? 'Senging, please wait...' : 'Send'}</Button>
                                        {
                                            errorMessage && <div className="error-message">
                                                {errorMessage}
                                            </div>
                                        }
                                    </>
                                }
                        >
                        </Dialog>

                        <Dialog visible={showDoneDialog} className="dialog-content"
                                close={() => {
                                    this.setState({
                                        showDoneDialog: false
                                    });
                                }}
                                header={
                                    <span className="message-title">All done!</span>
                                }
                                content={
                                    <article className="message-content">
                                        You will be one of the first to experience<br/>
                                        Broccoli $ Co. when we launch.
                                    </article>
                                }
                                footer={
                                    <Button size="default" fluid onClick={() => {
                                        this.setState({
                                            showDoneDialog: false
                                        });
                                    }}
                                    >OK</Button>
                                }
                        >
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