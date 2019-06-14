import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

class Details extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 25, color: "black", fontWeight: 'bold' }}>Details </Text>
            </View>
        )
    }
}

export default Details;

