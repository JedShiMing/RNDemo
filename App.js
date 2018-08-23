/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react'
import { Provider } from 'mobx-react'
import RootStack from './src/nav'
import _store from './src/store/init';

export default class App extends React.Component {
    componentWillMount() {
        console.disableYellowBox = true
    }
    render() {
        return <Provider {..._store}>
            <RootStack />
        </Provider>
    }
}