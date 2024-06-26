import React, { useState } from 'react';
import UserInfo from '../screens/Profile/UserInfo';
import VideoDetail from '../screens/Video/VideoDetail';
import { ChangePassword, DetailExam, QA,ExamExampleDetail } from '../screens';
import { Text } from 'react-native';
import { Button } from 'react-native-paper';
import RegisterExam from '../screens/RegisterExam/RegisterExam';
import Notification from '../screens/Notification/Notification';
import { useTranslation } from 'react-i18next';

function SubStack(Stack) {
  const { t } = useTranslation();
  return (
    <>
      <Stack.Screen name="UserInfo"
        options={{
          headerBackVisible: true,
          headerTitle: t('UserInfo'),
          title: 'Aligned Center',
          headerTitleAlign: 'center',
        }}
        component={UserInfo} />
      <Stack.Screen
        name="VideoDetail"
        component={VideoDetail}
        options={{
          headerBackVisible: true,
          headerTitle: t('VideoDetail'),
          title: 'Aligned Center',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="DetailExam"
        component={DetailExam}
        options={{
          headerBackVisible: true,
          headerTitle: t('DetailExam'),
          title: 'Aligned Center',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{
          headerBackVisible: true,
          headerTitle: t('ChangePassword'),
          title: 'Aligned Center',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{
          headerBackVisible: true,
          headerTitle: t('Notification'),
          title: 'Aligned Center',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="RegisterExam"
        component={RegisterExam}
        options={{
          headerBackVisible: true,
          headerTitle: t('register_exam'),
          title: 'Aligned Center',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="ExamExampleDetail"
        component={ExamExampleDetail}
        options={{
          headerBackVisible: true,
          headerTitle: t('practice_test'),
          title: 'Aligned Center',
          headerTitleAlign: 'center'
        }}
      />
      <Stack.Screen
        name="QA"
        component={QA}
        options={{
          headerBackVisible: true,
          headerTitle: t('Q&A'),
          title: 'Aligned Center',
          headerTitleAlign: 'center',
        }}
      />
    </>
  );
}

export default SubStack;
