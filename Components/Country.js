import { View, Text, Image } from 'react-native'
import React from 'react'

export default function Country({ country }) {
    return (
        <View>
            <Text>Country:{country.name.common}</Text>
            <Image
                source={{
                    uri: country.flags.png
                }}
                style={{ width: 20, height: 20 }}
            />
        </View>
    )
}