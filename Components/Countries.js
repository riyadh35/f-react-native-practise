import { View, Text, ScrollView, TextInput, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import Country from './Country';

export default function Countries() {
    const [countries, setCountries] = useState([]);
    const [seacred, setSeacred] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => {
                setSeacred(data)
                setCountries(data)
            })
    }, [])

    const handleSearch = text => {
        const filter = countries.filter(country => country.name.common.includes(text));
        setSeacred(filter);
    }
    return (
        <View>
            <Text style={styles.header}>Countries: {countries.length}</Text>
            <TextInput
                onChangeText={handleSearch}
                style={styles.input}
            ></TextInput>
            <ScrollView>
                {
                    seacred.map(country => <Country
                        // key={}
                        country={country}
                    ></Country>)
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        marginTop: 50,
        fontSize: 40,
        color: 'red'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    }
});
