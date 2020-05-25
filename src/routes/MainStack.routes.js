import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import List from '../pages/List';
import EditNote from '../pages/EditNote';

const MainStack = createStackNavigator();

export default () => (
  <MainStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#cc9e83',
      },
      headerTintColor: '#fff',
    }}>
    <MainStack.Screen name="List" component={List} />
    <MainStack.Screen name="EditNote" component={EditNote} />
  </MainStack.Navigator>
);
