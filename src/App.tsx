import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
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
},{clickHandler: any}> {
    constructor(props) {
        super(props);
        console.log(this.props.mobxStore);
    }
    render() {
        const { name, setName } = this.props.mobxStore;
        const clickAdd = (name: string) => {
            setName(name);
        }
        return (
            <div>
                <h1>{name}</h1>
                {/*<div>{this.props.mobxStore.count}</div>*/}
                <button onClick={() => {clickAdd('jack')}}>add</button>
                {/*<button onClick={this.props.mobxStore.reduce}>reduce</button>*/}
            </div>
        );
    }
}

export default App;