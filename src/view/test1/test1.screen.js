import React from 'react'
import {
    Platform,
    StyleSheet,
    Text,
    View, Animated
} from 'react-native';
import {Label, Overlay, Button} from 'teaset'

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class Test1Screen extends React.Component {
    state = {
        _posLeft: new Animated.Value(0)
    }
    _Animated

    componentWillMount() {
        _Animated = Animated.decay(this.state._posLeft, {
            toValue: 200,
        })
    }

    render() {
        const {_posLeft} = this.state
        return (
            <View style={styles.container}>
                <Button title={'点击出来弹框'} onPress={() => this.showPopView()}/>
                <Button title={'点击移动长方形'} onPress={() => {
                    console.log('_postLeft = ', _posLeft._value)
                    if (_posLeft._value >= 400) {
                        Animated.timing(_posLeft, {
                            toValue: 0,
                        }).start()
                    } else {
                        Animated.timing(_posLeft, {
                            toValue: 400,
                        }).start()
                    }
                }}/>
                <Animated.View
                    style={{backgroundColor: 'green', height: 30,marginTop: 30, position: 'relative', right: _posLeft}}>
                    <Text>hhhhhhhhhhhhhhhhh</Text>
                </Animated.View>
            </View>
        );
    }

    showPopView() {
        let overlayView = (
            <Overlay.PopView
                style={{alignItems: 'center', justifyContent: 'center'}}
            >
                <View style={{
                    backgroundColor: '#fff',
                    minWidth: 260,
                    minHeight: 180,
                    borderRadius: 15,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Label type='title' size='xl' text='Pop Overlay'/>
                </View>
            </Overlay.PopView>
        )
        Overlay.show(overlayView)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
