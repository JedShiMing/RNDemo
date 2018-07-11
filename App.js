/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react'
import Test1Screen from './src/view/test1/test1.screen';

export default class App extends React.Component {
    componentWillMount() {
        console.disableYellowBox = true
    }
    render() {
        return <Test1Screen />
    }
}