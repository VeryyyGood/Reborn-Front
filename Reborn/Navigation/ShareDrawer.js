import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Image, TouchableOpacity, Text } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

import MainShareScreen from '../Screens/ShareboardScreens/MainShareScreen';
import EmotionShareScreen from '../Screens/ShareboardScreens/EmotionShareScreen';
import ChatShareScreen from '../Screens/ShareboardScreens/ChatShareScreen';
import VolunteerShareScreen from '../Screens/ShareboardScreens/VolunteerShareScreen';

import ShareContentScreen from '../Screens/ShareboardScreens/ShareContentScreen';
import ShareWriteScreen from '../Screens/ShareboardScreens/ShareWriteScreen';
import { colors } from '../theme';

const Drawer = createDrawerNavigator();

// const CustomHeaderLeft = () => {
//     const navigation = useNavigation();
//     return (
//       <TouchableOpacity onPress={() => navigation.navigate("Tabs", { screen: "Main" })} style={{ marginLeft: 10 }}>
//         <Image
//           source={require('../Assets/icons/tabIcons/homeicon.png')}
//           style={{marginLeft: "5%",width: 25, height: 25, tintColor: colors.palette.Brown}}
//         />
//       </TouchableOpacity>
//     );
//   };

const CustomHeaderRight = () => {
    const navigation = useNavigation();
    return (
      <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={{ marginLeft: 10 }}>
        <Image
          source={require('../Assets/icons/tabIcons/menuicon.png')}
          style={{marginLeft: "5%",width: 25, height: 25, tintColor: colors.palette.Brown}}
        />
      </TouchableOpacity>
    );
};


const ShareDrawers = () => (
        <Drawer.Navigator initialRouteName='ShareMain' screenOptions={{
            drawerPosition: 'left',
            headerLeft: () => <CustomHeaderRight />,
            headerTitleAlign: 'center',
            
          }}>
            <Drawer.Screen name='ShareMain' component={MainShareScreen} options={{drawerLabel: '전체 나눔', title: '전체 나눔 게시판', headerTitle: () => (
            <Text style={{marginTop:4, fontFamily: 'Poppins-Bold', fontSize: 20, color: colors.palette.BrownDark}}>
                전체 나눔 게시판
            </Text>
        ),}}/>
            <Drawer.Screen name='Emotion' component={EmotionShareScreen} options={{drawerLabel: '감정 나눔', title: '감정 나눔 게시판', headerTitle: () => (
            <Text style={{marginTop:4, fontFamily: 'Poppins-Bold', fontSize: 20, color: colors.palette.BrownDark}}>
                감정 나눔 게시판
            </Text>
        ),}}/>
            <Drawer.Screen name='Chat' component={ChatShareScreen} options={{drawerLabel: '담소 나눔',title: '담소 나눔 게시판', headerTitle: () => (
            <Text style={{marginTop:4, fontFamily: 'Poppins-Bold', fontSize: 20, color: colors.palette.BrownDark}}>
                담소 나눔 게시판
            </Text>
        ),}}/>
            <Drawer.Screen name='Volunteer' component={VolunteerShareScreen} options={{drawerLabel: '봉사 나눔', title: '봉사 게시판', headerTitle: () => (
            <Text style={{marginTop:4, fontFamily: 'Poppins-Bold', fontSize: 20, color: colors.palette.BrownDark}}>
                봉사 나눔 게시판
            </Text>
        ),}}/>
            <Drawer.Screen name='ShareContent' component={ShareContentScreen} options={{title: '나눔 게시판', drawerItemStyle: { height: 0 }}}/>
            <Drawer.Screen name='ShareWrite' component={ShareWriteScreen} options={{headerShown: false, drawerItemStyle: { height: 0 }}}/>
        </Drawer.Navigator>
);


export default ShareDrawers;