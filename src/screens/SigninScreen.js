import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, Button, Input } from 'react-native-elements'
import Spacer from '../components/Spacer'

const SigninScreen = () => {
    return (
        <View style={styles.screen}>
            <Spacer>
                <Text style={styles.header}>Welcome to Auth Practice</Text>
            </Spacer>
            <Spacer>
                <Input placeholder='Name'/>
            </Spacer>
            <Spacer>
                <Input placeholder='Password'/>
            </Spacer>
            <Spacer>
                <Button 
                    title='Sign In'
                    raised
                    type=''
                    containerStyle={styles.button}
                    titleStyle={styles.title}
                />
            </Spacer>
        </View>
    )
}

SigninScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
};

const styles = StyleSheet.create({
    header: {
        textAlign: 'center',
        fontSize: 25, 
        fontWeight: 'bold',
        color: '#8A2BE2',

    },
    screen: {
        marginTop: 100,
        flex: 1
    },
    button: {
        marginHorizontal: 9,
    },
    title: {
        color:'#8A2BE2'
    }
})

export default SigninScreen