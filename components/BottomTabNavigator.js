// import { createAppContainer } from 'react-navigation';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
// import { Ionicons } from '@expo/vector-icons'; // 6.2.2
// import React from 'react';

// import StackNavigator from './StackNavigator';
// import BookmarkPage from './BookmarkPage';

// const bottomTabNavigator = createBottomTabNavigator(
//     {
//         Home: {
//             screen: StackNavigator,
//             navigationOptions: {
//                 showLabel: false,
//                 tabBarIcon: ({ tintColor }) => (
//                     <Ionicons name="md-home" size={25} color='#E8A87C'
//                     />),
//             }
//         },
//         Bookmarks: {
//             screen: BookmarkPage,
//             navigationOptions: {
//                 showLabel: false,
//                 tabBarIcon: ({ tintColor }) => (
//                     <Ionicons name="md-compass" size={25} color='#E8A87C'
//                     />),
//             }
//         }
//     },
//     {
//         initialRouteName: 'Home',
//         tabBarOptions: {
//             showLabel: false,

//         },

//     }
// );

// export default createAppContainer(bottomTabNavigator);