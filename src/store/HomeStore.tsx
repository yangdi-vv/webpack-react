import { observable, makeObservable } from 'mobx';
import { HomeStoreType } from '../models/stores';

class HomeStore implements HomeStoreType {
    constructor() {
        makeObservable(this);
    }
    @observable  public name: string = '';

    @observable  public email: string = '';

    @observable  public emailConfirm: string = '';
}

export default HomeStore;