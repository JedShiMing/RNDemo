import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, SectionList, TouchableOpacity } from 'react-native'

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

    renderItems = ({ item, index }) => (
        <View style={{ height: 50, marginBottom: 5, backgroundColor: 'green' }} key={index}>
            <Text>{item}</Text>
        </View>
    )

    _onPressButton = (code) => {
        const sectionIndex = this.state.list.findIndex(section => {
            return section.title === code
        })
        console.log('sectionIndex = ', sectionIndex)
        this.sectionlist.scrollToLocation({
            animated: false,
            sectionIndex,
            itemIndex: 0,
            viewPosition: 0,
            viewOffset: 38
        })
    }

    render() {
        const { list, rightList } = this.state
        console.log('list = ', list)
        console.log('rightList = ', rightList)
        let rightListEle
        if (rightList) {
            rightListEle = rightList.map(
                (code) => {
                    return (
                        <TouchableOpacity activeOpacity={0.8} key={code} onPressIn={() => { this._onPressButton(code) }}>
                            <Text style={{ backgroundColor: 'yellow' }}>{code}</Text>
                        </TouchableOpacity>
                    )
                }
            )
        }
        return (
            <SafeAreaView style={styles._conf}>
                {
                    list ? <SectionList
                        ref={ref => this.sectionlist = ref}
                        sections={list}
                        initialNumToRender={10}
                        renderItem={this.renderItems}
                        stickySectionHeadersEnabled={true}
                        decelerationRate={'fast'}
                        renderSectionHeader={({ section: { id, title } }) => (
                            <View key={id} style={{ backgroundColor: 'red', height: 30 }}>
                                <Text style={{ fontWeight: 'bold' }}>{title}</Text>
                            </View>
                        )}
                      /> : null
                }
                <View style={styles.fixedView}>
                    {rightListEle}
                </View>
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