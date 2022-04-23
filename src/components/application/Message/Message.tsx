import './index.styl';

class Message {
    messageDom: any
    constructor() {
        // check insert message dom  && insert message dom
        if (document.getElementById('invite-message')) {
            this.messageDom = document.getElementById('invite-message');
        } else {
            this.messageDom = document.createElement('div');
            this.messageDom.id = 'invite-message';
            document.body.appendChild(this.messageDom)
        }
    }
    alert(text: string, type?: string) {
        // init message dom && remove message dom
        const textDom = document.createElement('span');
        textDom.innerText = text;
        textDom.className = `message_${type}`;
        this.messageDom.appendChild(textDom);
        setTimeout(() => {
            textDom.remove();
        },3000);
    }
    error(text) {
        // multiplexing alert
        this.alert(text, 'error')
    }
}

export default new Message();
