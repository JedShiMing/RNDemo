/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react'
import UiDemoApp from './src/navigation';

export default class App extends React.Component {
    componentWillMount() {
        console.disableYellowBox = true
    }
    render() {
        return <UiDemoApp />
    }
}