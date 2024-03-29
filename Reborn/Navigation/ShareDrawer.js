import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import MainShareScreen from '../Screens/ShareboardScreens/MainShareScreen';
import EmotionShareScreen from '../Screens/ShareboardScreens/EmotionShareScreen';
import ChatShareScreen from '../Screens/ShareboardScreens/ChatShareScreen';
import ItemShareScreen from '../Screens/ShareboardScreens/ItemShareScreen';
import VolunteerShareScreen from '../Screens/ShareboardScreens/VolunteerShareScreen';

import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const ShareDrawers = () => (
    <NavigationContainer independent={true}>
        <Drawer.Navigator initialRouteName='ShareMain'>
            <Drawer.Screen name='ShareMain' component={MainShareScreen} />
            <Drawer.Screen name='Emotion' component={EmotionShareScreen} />
            <Drawer.Screen name='Chat' component={ChatShareScreen} />
            <Drawer.Screen name='Item' component={ItemShareScreen} />
            <Drawer.Screen name='Volunteer' component={VolunteerShareScreen} />
        </Drawer.Navigator>
    </NavigationContainer>
);


export default ShareDrawers;