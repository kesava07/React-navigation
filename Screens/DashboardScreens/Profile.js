import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

class Profile extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 25, color: "black", fontWeight: 'bold' }}>Profile </Text>
            </View>
        )
    }
}

export default Profile;

