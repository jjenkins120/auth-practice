import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import SigninScreen from './src/screens/SigninScreen'

const navigator = createStackNavigator(
  {
    Signin: SigninScreen
  },
  {
    initialRouteName:'Signin',
    defaultNavigationOptions: {
      title: 'Auth-Practice',
      cardStyle: {
        backgroundColor: '#FFFFFF'
      }
    }
  }
)

const App = createAppContainer(navigator)

export default () => {
  return (
    <App/>
  )
}