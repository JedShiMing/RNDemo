import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import TableView from 'react-native-tableview'

const { Section, Item } = TableView

const list2 = [
    { id: '1', title: 'name1', data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'] },
]
export default class ListScreen extends React.Component {
    constructor(props) {
        super(props)
        state = {
            list: null,
            rightList: null
        }
    }
    sectionlist

    componentWillMount() {
        // console.log('初始化页面数据 = ', list2, this)
        let _list = []
        let _rightList = []
        for (let i = 1; i <= 10; i++) {
            let _data = []
            for (let j = (i - 1) * 10; j < i * 10; j++) {
                _data.push('' + j)
            }
            let obj = {
                id: '-' + i,
                title: 'name' + i,
                data: _data
            }
            _list.push(obj)
            _rightList.push('name' + i)
        }

        console.log('componentWillMount list = ', _list)
        console.log('componentWillMount rightList = ', _rightList)
        this.setState({
            list: _list,
            rightList: _rightList
        })
    }

    render() {
        const { list, rightList } = this.state
        console.log('list = ', list)
        console.log('rightList = ', rightList)
        return (
            <SafeAreaView style={styles._conf}>
                {
                    list ?
                        <TableView
                            style={{ flex: 1 }}
                            tableViewStyle={TableView.Consts.Style.Grouped}
                            sectionIndexTitlesEnabled
                            allowsToggle
                        >
                            {
                                list.map(a => <Section label={a.title} canMove headerHeight={30}>
                                    {
                                        a.data.map((b, b_index) =>
                                            <Item key={b_index}>
                                                {/* <View style={{ backgroundColor: 'green' }} key={b_index}>
                                                    <Text>{b}</Text>
                                                </View> */}
                                                {b}
                                            </Item>)
                                    }
                                </Section>)
                            }
                        </TableView> : null
                }
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    _conf: {
        flex: 1,
        backgroundColor: 'white'
    },
    fixedView: {
        position: 'absolute',
        width: 70,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
})