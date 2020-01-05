import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from '../pages/login/index'
import Register from '../pages/register/index'

const AppNavigator = createStackNavigator({
    Login: {
      screen: Login, 
      navigationOptions : {
        header: null
      }
    },
    Register: {
        screen: Register,
        navigationOptions : {
          headerTintColor: '#fff' ,
          headerStyle: {
            backgroundColor: '#333',
          }
        }
    }
  });
  
  export default createAppContainer(AppNavigator);