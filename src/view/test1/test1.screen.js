import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    ActivityIndicator, Alert
} from 'react-native';
import CodePush from 'react-native-code-push'

const deploymentKey = 'q9KxV_leF6jraQkZ_9TQz3jnlmIp9e515318-4cdf-4005-84de-6d9104d12180'

export default class Test1Screen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            animating: true,
            content: '检查更新',
            receivedBytes: 0,
            totalBytes: 0,
            point: 0
        }
    }

    componentWillMount() {
        CodePush.checkForUpdate(deploymentKey).then(data => {
            // 没有更新的时候data 为null
            if (!data) {
                alert('已经是最新版本啦')
                this.setState({
                    animating: false,
                    content: '最新版本，无需更新'
                })
            } else {
                let _name = '正在查询更新'
                let flag = true
                CodePush.sync({
                    deploymentKey: deploymentKey,
                    updateDialog: {
                        appendReleaseDescription: false,
                        optionalIgnoreButtonLabel: '稍后',
                        optionalInstallButtonLabel: '立即更新',
                        optionalUpdateMessage: '有新版本了，是否更新？',
                        title: '更新提示'
                    },
                    installMode: CodePush.InstallMode.ON_NEXT_RESTART
                }, (status) => {
                    switch (status) {
                        case CodePush.SyncStatus.CHECKING_FOR_UPDATE:
                            console.log("Checking for updates.");
                            _name = '正在从服务端获取数据'
                            flag = true
                            break;
                        case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
                            console.log("Downloading package.");
                            _name = '正在下载更新包'
                            flag = true
                            break;
                        case CodePush.SyncStatus.INSTALLING_UPDATE:
                            console.log("Installing update.");
                            _name = '下载完毕，即将安装'
                            flag = true
                            break;
                        case CodePush.SyncStatus.UP_TO_DATE:
                            console.log("Up-to-date.");
                            flag = false
                            _name = '已是最新版本应用'
                            break;
                        case CodePush.SyncStatus.UPDATE_INSTALLED:
                            console.log("Update installed.");
                            flag = false
                            _name = '最新应用已安装，等待重启'
                            this.refreshApp()
                            break;
                    }
                    this.setState({
                        animating: flag,
                        content: _name
                    })
                }, (progress) => {
                    // console.log('progress = ', progress)
                    let point = Math.floor(parseFloat(progress.receivedBytes) / parseFloat(progress.totalBytes) * 100)
                    console.log(progress.receivedBytes + " of " + progress.totalBytes + " received." + " point = " + point);
                    this.setState({
                        receivedBytes: progress.receivedBytes,
                        totalBytes: progress.totalBytes,
                        point: point
                    })
                })
            }
        }).catch(error => {
            console.warn('检查更新catch = ', error)
        })
    }

    // 重启，刷新App
    refreshApp() {
        Alert.alert('提示', '已经是最新版本啦', [
            {text: '取消', onPress: () => console.log('取消了更新')},
            {text: '立即刷新', onPress: () => CodePush.restartApp(true)},
        ])
    }

    render() {
        const { content, animating, receivedBytes, totalBytes, point } = this.state
        return (
            <View style={styles.container}>
                <Text style={{ marginBottom: 50 }}>当前版本0.0.10</Text>
                <ActivityIndicator animating={animating} size={"large"} />
                <Text style={{ marginTop: 50 }}>{content}</Text>
                <Text style={{ marginTop: 20 }}>{receivedBytes}</Text>
                <Text style={{ marginTop: 20 }}>{totalBytes}</Text>
                <Text style={{ marginTop: 20 }}>{point} %</Text>
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
