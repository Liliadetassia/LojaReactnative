import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';

import Home from './pages/Home';
import Detail from './pages/Detail';
import { StackRouter } from 'react-navigation';

const stack=createStackNavigator();

function Routes(){
      return(
          <NavigationContainer>
              <StackRouter.Navigator>
                  <StackRouter.Screen 
                  name="Home"
                  component={Home}
                  options={{headerShown: false}}
                  />
                  <Stack.Screen 
                  name="Detail"
                  componente={Detail}
                  />
              </StackRouter.Navigator>
          </NavigationContainer>
      )
}

export default Routes;