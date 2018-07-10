import {
    createStackNavigator,
    createBottomTabNavigator,
} from 'react-navigation';
import { StyleSheet } from 'react-native'

import Test1Screen from './view/test1/test1.screen';
import ListScreen from './view/list/sectionlist/list.screen';
import TableView from './view/list/tableView/list.screen';

const UiDemoApp = createStackNavigator({
    Home: { screen: Test1Screen },
});

/**
 * 底部tab页面
 */
const TabView = createBottomTabNavigator({
    Home: {
        screen: UiDemoApp,
        navigationOptions: ({ navigation }) => ({
            tabBarLabel: '主页',
        }),
    },
    Home2: {
        screen: ListScreen,
        navigationOptions: ({ navigation }) => ({
            tabBarLabel: 'Sectionlist'
        }),
    },
    Home3: {
        screen: TableView,
        navigationOptions: ({ navigation }) => ({
            tabBarLabel: 'tableView'
        }),
    },
}, {
        backBehavior: null,
        tabBarOptions: {
            showIcon: true,
            activeTintColor: 'green',      // 活动选项卡的标签和图标颜色
            activeBackgroundColor: 'white',  // 活动选项卡的背景颜色
            inactiveTintColor: '#666',         //非活动选项卡的标签和图标颜色
            inactiveBackgroundColor: 'white',    //非活动选项卡的背景颜色
        }
    })

const styles = StyleSheet.create({
    icon: {
        width: 25,
        height: 25,
        resizeMode: 'contain'
    }
});

export default TabView;