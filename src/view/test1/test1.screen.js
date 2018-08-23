import React from 'react'
import {
    StyleSheet,
    View, NativeModules
} from 'react-native';
import { Button } from 'teaset'

// const ShareDialog = NativeModules.FBShareDialog
const FBSDK = require('react-native-fbsdk');
// const {
//   ShareDialog,
// } = FBSDK;
// import {ShareDialog} from 'react-native-fbsdk'
const shareLinkContent = {
    contentType: 'link',
    contentUrl: "https://facebook.com",
    contentDescription: 'Wow, check out this great site!',
};
export default class Test1Screen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shareLinkContent: shareLinkContent
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Button title={'分享到facebook'} onPress={() => this.shareLinkWithShareDialog()} />
            </View>
        );
    }

    // Share the link using the share dialog.
    shareLinkWithShareDialog() {
        console.log('分享到fb')
        let tmp = this;
        ShareDialog.canShow(tmp.state.shareLinkContent).then(
            function (canShow) {
                if (canShow) {
                    return ShareDialog.show(tmp.state.shareLinkContent);
                }
            }
        ).then(
            function (result) {
                if (result.isCancelled) {
                    alert('Share cancelled');
                } else {
                    alert('Share success with postId: '
                        + result.postId);
                }
            },
            function (error) {
                alert('Share fail with error: ' + error);
            }
        );
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
