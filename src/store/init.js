import { PeopleStore } from "./peopleStore";

class RootStore{
    constructor() {
        this.peopleStore = new PeopleStore();
    }
}

export default new RootStore;