import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from '../pages/Login';
import Register from '../pages/cadastro'

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
            backgroundColor: '#fff',
          }
        }
    }
  });
  
  export default createAppContainer(AppNavigator);