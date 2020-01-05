import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import Login from '../pages/login/index'
import Register from './register'
//import Dashboard from './rodapeInicial'

const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    Register,
    //Dashboard
  })
)

export default Routes;