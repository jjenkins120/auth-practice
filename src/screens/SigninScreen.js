import React from 'react'
import { StyleSheet } from 'react-native'
import { Text, Button, Input } from 'react-native-elements'

const Signin = () => {
    return <>
        <Text>Welcome to Auth Practice</Text>
        <Input placeholder='Name'/>
        <Input placeholder='Password'/>
        <Button title='Sign In'/>
    </>
}

const styles = StyleSheet.create({

})

export default Signin