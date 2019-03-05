import React from 'react'
import {
    StyleSheet,
    Text,
    View, SafeAreaView
} from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation';

export default class Test1Screen extends React.Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <MaterialTopTabNavigator />
            </SafeAreaView>
        )
    }
}

class HomeScreen extends React.Component {
    render() {
        return (
            <View style = {styles.container} >
                <Text>主页</Text> 
            </View>
        );
    }
}

class SettingsScreen extends React.Component {
    render() {
        return (
            <View style={styles.container} >
                <Text>设置</Text>
            </View>
        );
    }
}
class ProfileScreen extends React.Component {
    render() {
        return (
            <View style={styles.container} >
                <Text>个人主页</Text>
            </View>
        );
    }
}
class FeedScreen extends React.Component {
    render() {
        return (
            <View style={styles.container} >
                <Text>反馈</Text>
            </View>
        );
    }
}
const MaterialTopTabNavigator = createMaterialTopTabNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarLabel: '主页',
        }
    },
    Settings: {
        screen: SettingsScreen,
        navigationOptions: {
            tabBarLabel: '设置',
        }
    },
    Profile: {
        screen: ProfileScreen,
        navigationOptions: {
            tabBarLabel: '个人中心',
        }
    },
    Feed: {
        screen: FeedScreen,
        navigationOptions: {
            tabBarLabel: '反馈',
        }
    },
}, {
        initialRouteName: 'Home',
        // swipeEnabled: false, // 是否允许滑动切换tabs 默认是true
        animationEnabled: false, // 点击tab label切换tab时是否开启动画 默认为true
        // order: ['Settings', 'Home'],
        // tabBarPosition: 'bottom', // tab bar显示的位置，默认是 'top'
        // tabBarOptions: {
        //     activeTintColor: 'orange',
        //     inactiveTintColor: 'grey',
        //     style: {
        //         backgroundColor: '#f2f2f2',
        //         borderTopWidth: 0.5,
        //         borderTopColor: 'grey',
        //     },
        //     indicatorStyle: {
        //         height: 0, // 不显示indicator
        //     },
        //     showIcon: false, // 是否显示图标, 默认为false
        //     showLabel: false, // 是否显示label
        // },
    });


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});
