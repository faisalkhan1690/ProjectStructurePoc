/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider } from 'mobx-react';

import HomeScreen from './src/HomeScreenComponent'
import HomeScreenStore from './src/HomeScreenStore'

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
});
  
const RootNavigator = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return (
      <Provider HomeScreenStore={HomeScreenStore}>
        <RootNavigator />
      </Provider>
    );
  }
}