import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import MainShareScreen from '../Screens/ShareboardScreens/MainShareScreen';
import EmotionShareScreen from '../Screens/ShareboardScreens/EmotionShareScreen';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const ShareDrawers = () => (
    <NavigationContainer independent={true}>
        <Drawer.Navigator initialRouteName='ShareMain'>
            <Drawer.Screen name='ShareMain' component={MainShareScreen} />
            <Drawer.Screen name='Emotion' component={EmotionShareScreen} />
        </Drawer.Navigator>
    </NavigationContainer>
);


export default ShareDrawers;