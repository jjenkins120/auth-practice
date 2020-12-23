import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Signin from './src/screens/SigninScreen'

const navigator = createStackNavigator(
  {
    Signin: SigninScreen
  },
  {
    initialRouteName:'Signin',
    defaultNavigationOptions: {
      title: 'Auth-Practice'
    }
  }
)

const App = createAppContainer(navigator)

export default () => {
  return (
    <App/>
  )
}