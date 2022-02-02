import { makeAutoObservable, toJS } from "mobx";
import { IUser } from "./interfaces/User";

class Store {
    users: IUser[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    addUser(username: string, firstname: string, lastname: string, lastlogin: Date, enabled: boolean) {
        this.users.push({ id: this.users.length + 1, username, fullname: `${firstname} ${lastname}`, lastlogin, enabled });
    }

    updateUser(id: number, user: IUser) {
        this.users.splice(id - 1, 1, user);
    }
}

const store = new Store();

export default store;