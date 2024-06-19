import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import {useSelector} from 'react-redux';

import {isLoginSelector} from '../redux/selectors';
import SubStack from './SubStack';

const Stack = createStackNavigator();
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

function Router() {
  const isLogin = useSelector(isLoginSelector);
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerBackTitle:" "
        }}
        >
        {isLogin ? MainStack(Stack) : AuthStack(Stack)}
        {SubStack(Stack)}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Router;
