import React, { Component } from 'react';
import { Provider } from "react-redux";
import store from "./store/store";
import * as Font from 'expo-font';
import { createAppContainer } from 'react-navigation';

import Home from "./components/Home";
import AppNavigator from "./components/BottomTabNavigator";
import StackNavigator from "./components/StackNavigator";
const AppContainer = createAppContainer(AppNavigator);
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      "Montserrat-Regular": require("./assets/fonts/Montserrat/Montserrat-Regular.ttf"),
      "Montserrat-SemiBold": require("./assets/fonts/Montserrat/Montserrat-SemiBold.ttf"),
      "Montserrat-ExtraBold": require("./assets/fonts/Montserrat/Montserrat-ExtraBold.ttf"),
      "OpenSans-Regular": require("./assets/fonts/Open_Sans/OpenSans-Regular.ttf"),
      "OpenSans-SemiBold": require("./assets/fonts/Open_Sans/OpenSans-SemiBold.ttf"),
      "PlayfairDisplay-Regular": require("./assets/fonts/Playfair_Display/PlayfairDisplay-Regular.ttf"),
      "PlayfairDisplay-Bold": require("./assets/fonts/Playfair_Display/PlayfairDisplay-Bold.ttf"),
      "PlayfairDisplay-Black": require("./assets/fonts/Playfair_Display/PlayfairDisplay-Black.ttf"),
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      <Provider store={store}>
        {this.state.fontLoaded ? (<StackNavigator />) : null}
      </Provider>
    );
  }
}
