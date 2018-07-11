import React from 'react'
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import CodePush from 'react-native-code-push'

const deploymentKey = 'q9KxV_leF6jraQkZ_9TQz3jnlmIp9e515318-4cdf-4005-84de-6d9104d12180'

export default class Test1Screen extends React.Component {

    componentWillMount() {
        CodePush.checkForUpdate(deploymentKey).then(data => {
            // 没有更新的时候data 为null
            if (!data) {
                alert('已经是最新版本啦')
            } else {
                // 不是最新版本
                // alert('有更新')
                CodePush.sync({
                    deploymentKey: deploymentKey,
                    updateDialog: {
                        appendReleaseDescription: false,
                        optionalIgnoreButtonLabel: '稍后',
                        optionalInstallButtonLabel: '立即更新',
                        optionalUpdateMessage: '有新版本了，是否更新？',
                        title: '更新提示'
                    },
                    installMode: CodePush.InstallMode.IMMEDIATE
                }, (status) => {
                    switch (status) {
                        case CodePush.SyncStatus.CHECKING_FOR_UPDATE:
                            console.log("Checking for updates.");
                            break;
                        case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
                            console.log("Downloading package.");
                            break;
                        case CodePush.SyncStatus.INSTALLING_UPDATE:
                            console.log("Installing update.");
                            break;
                        case CodePush.SyncStatus.UP_TO_DATE:
                            console.log("Up-to-date.");
                            break;
                        case CodePush.SyncStatus.UPDATE_INSTALLED:
                            console.log("Update installed.");
                            break;
                    }
                }, (progress) => {
                    // console.log('progress = ', progress)
                    console.log(progress.receivedBytes + " of " + progress.totalBytes + " received.");
                })
            }
            // console.warn('检查更新 = ', data)
        }).catch(error => {
            console.warn('检查更新catch = ', error)
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>当前版本0.0.2</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
