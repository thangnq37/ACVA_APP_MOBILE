import { WebView } from 'react-native-webview';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {Alert, Dimensions} from 'react-native';

const windowHeight = Dimensions.get('screen').height;

const ExamExampleDetail = ({navigation}) => {
    const [t, i18n] = useTranslation();
    const [isNotificationBack, setIsNotificationBank] = useState(true);
    const isNotificationBackNew = {check: true};
    handleWebViewNavigationStateChange = (newNavState) => {
        const { url } = newNavState;
        console.log(url);
        if((url).indexOf("resultSuccess") > -1){
            setIsNotificationBank(false);
            isNotificationBackNew.check = false;
            if(!isNotificationBackNew.check){
                navigation.goBack();
            }
        }
    };
    useEffect(
        () =>{
            const navigationData = navigation.addListener('beforeRemove', (e) => {
                if(!isNotificationBackNew.check){
                    return;
                }
                e.preventDefault();
                Alert.alert(
                    t('notification'),
                    t('back_exit'),
                    [
                        { text: t('no'), style: 'cancel', onPress: () => {} },
                        {
                            text: t('yes'),
                            style: 'destructive',
                            onPress: () => navigation.dispatch(e.data.action),
                        },
                    ]
                );
            })
            return navigationData;
        }
        ,
        [navigation, isNotificationBackNew]
    );
    const urlData = 'http://acva.vn/quiz/public/exam-example?lang='+i18n.language+"&windowHeight="+(windowHeight-75)+"&v="+new Date().getTime();
    // const urlData = 'http://acva.vn/page-example.php'+"?v="+new Date().getTime();

    return <WebView 
        source={{ uri: urlData}} style={{ flex: 1 }} 
        onNavigationStateChange={this.handleWebViewNavigationStateChange}
        />;
};

export default ExamExampleDetail;

