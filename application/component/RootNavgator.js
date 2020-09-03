import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//importing screens
import { Splash, Calculate, Result } from '../screens';

//root stack variable
const RootStack = createStackNavigator();

function RootNavigator(){
    return(
        <NavigationContainer>
            <RootStack.Navigator
                initialRouteName='splash'
                headerMode='none'>
                <RootStack.Screen
                    name='splash'
                    component={Splash}
                />
                <RootStack.Screen 
                    name='calculate'
                    component={Calculate}
                />
                <RootStack.Screen
                    name='result'
                    component={Result}
                />
            </RootStack.Navigator>
        </NavigationContainer>
    );
}

export default RootNavigator;