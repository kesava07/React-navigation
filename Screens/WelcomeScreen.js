import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

class WelcomeScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 25, color: "black", fontWeight: 'bold' }}>Welcome </Text>
                <Button title="Login" onPress={() => this.props.navigation.navigate("Dashboard")} />
            </View>
        )
    }
}

export default WelcomeScreen;

