import {action, computed, observable, makeObservable} from 'mobx'
import { IMobxStore } from '../models/IMobxStores'

class MobxStore implements IMobxStore {
    constructor() {
        makeObservable(this);
    }
    @observable  public name: string = "world"

    @computed
    public get greeting(): string {
        return `hello ${this.name}`
    }

    @action.bound
    public setName = (name: string): void => {
        this.name = name
    }

}

export default MobxStore