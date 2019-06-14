import React, { Component } from 'react'
import { Text, View } from 'react-native'

class Dashbaord extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 25, color: "black", fontWeight: 'bold' }}>Dashbaord </Text>
            </View>
        )
    }
}

export default Dashbaord;

