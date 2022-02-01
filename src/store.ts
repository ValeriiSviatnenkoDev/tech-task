import { makeAutoObservable } from "mobx";

interface IUser {
    username: string,
    firstname: string,
    lastname: string,
    enabled: boolean
}

type TUser = {
    username: string,
    firstname: string,
    lastname: string,
    enabled: boolean
}

const addUser = (users: IUser[], username: string, firstname: string, lastname: string, enabled: boolean): IUser[] => [
    ...users,
    {
        username,
        firstname,
        lastname,
        enabled
    }
];

class Store {
    users: IUser[] = [];
    newUser: TUser = {
        username: '',
        firstname: '',
        lastname: '',
        enabled: false
    }

    constructor() {
        makeAutoObservable(this);
    }

    addUser() {
        this.users = addUser(this.users, this.newUser.username, this.newUser.firstname, this.newUser.lastname, this.newUser.enabled);
        this.newUser = {
            username: '',
            firstname: '',
            lastname: '',
            enabled: false
        };
    }
}

const store = new Store();

export default store;