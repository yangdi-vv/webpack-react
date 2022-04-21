import React, { Component } from 'react';
import "./index.styl"

class Message {
    messageDom?: any
    constructor() {
        if(document.getElementById('invite-message')){
            this.messageDom = document.getElementById('invite-message');
        }else{
            this.messageDom = document.createElement('div');
            this.messageDom.id = "invite-message";
            document.body.appendChild(this.messageDom)
        }
    }
    alert(text: string, duration?: number, type?: string){
        const textDom = document.createElement('span');
        textDom.innerText = text;
        this.messageDom.appendChild(textDom);
        textDom.style.transition = 'all ease 3s';
        textDom.style.opacity = '0';
        setTimeout(() => {
            textDom.remove();
        }, duration || 3000);
    }
}

export default new Message()