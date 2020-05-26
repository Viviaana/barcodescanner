if(__DEV__) {
  import('./utilities/ReactotronConfig').then(() => console.log('Reactotron Configured'))
}

import React, { Component } from 'react';
import Scanner from './app/views/Scanner.js';
import Details from './app/views/Details.js'
import {Provider} from 'react-redux'
import store from './store/index'
import reactotron from 'reactotron-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();


class App extends Component {
  render() {
   reactotron.log('updated')
    return (
      <NavigationContainer>
        <Provider store={store}>
        <Stack.Navigator initialRouteName="Scanner">
          <Stack.Screen name="Scanner" component={Scanner} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
        </Provider>
      </NavigationContainer>
      
    );
  }
}

export default App;



