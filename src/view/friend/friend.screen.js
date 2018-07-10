import React from 'react'
import {View, Text, StyleSheet, SafeAreaView} from 'react-native'
export default class FriendScreen extends React.Component {
    render() {
        return (
           <SafeAreaView style={styles._conf}>
               <Text>
                   好友页面
               </Text>
           </SafeAreaView> 
        )
    }
}

const styles = StyleSheet.create({
    _conf: {
        flex: 1,
        backgroundColor: 'white'
    }
})