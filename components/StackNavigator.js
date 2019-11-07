import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './Home';
import ArticlePage from './ArticlePage';

const AppNavigator = new createStackNavigator({
    Home: {
        screen: Home, navigationOptions: {
            header: null,
        }
    },
    ArticlePage: {
        screen: ArticlePage, navigationOptions: {
            header: null,
        }
    }
}, {
    initialRouteName: 'Home'
});

AppNavigator.navigationOptions = ({ navigation }) => {
    let tabBarVisible;
    if (navigation.state.routes.length > 1) {
        navigation.state.routes.map(route => {
            if (route.routeName === "CustomHide") {
                tabBarVisible = false;
            } else {
                tabBarVisible = true;
            }
        });
    }

    return {
        tabBarVisible
    };
};

export default createAppContainer(AppNavigator);