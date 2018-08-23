import {observable, action} from 'mobx';

// useStrict(true);  //这里用到了严格模式，在修改类的成员属性的时候函数前面需要加上 @action 
export class PeopleStore {
    @observable _name;
    @observable _age;
    @observable sex = '男';

    @action
    setName(newName) {
        console.log('设置了名字 = ', newName);
        this._name = newName;
    }

    @action
    setAge(newAge) {
        this._age = newAge;
    }
}