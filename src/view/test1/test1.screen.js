import React from 'react'
import {
    Text,
    View,
    TextInput,
    StyleSheet,
} from 'react-native';
import { inject, observer } from 'mobx-react';

// @observe // 进入观察模式，数据实时变动
@inject('peopleStore')
@observer
export default class Test1Screen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: null,
            age: 0
        }
    }

    render() {
        const { username, age } = this.state
        const { peopleStore } = this.props
        console.log('props = ', this.props);

        return (
            <View style={styles.container}>
                <Text>欢迎来到mobx实战分支</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <Text>请输入名字</Text>
                    <TextInput
                        value={username}
                        style={styles._InputView}
                        onChangeText={v => peopleStore.setName(v)}
                    />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, }}>
                    <Text>请输入年龄</Text>
                    <TextInput
                        value={'' + age}
                        style={styles._InputView}
                    />
                </View>
                <View>
                    <Text>你输入的名字是 = {peopleStore._name}</Text>
                    <Text>{peopleStore.sex}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
    },
    _InputView: {
        width: 200,
        height: 30,
        // backgroundColor: '',
        paddingLeft: 20,
        borderRadius: 5,
        fontSize: 22,
        borderWidth: 1,
        marginLeft: 20,
    }
});
