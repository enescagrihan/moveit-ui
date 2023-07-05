import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import SearchResultCard from '../components/SearchResultCard'

// @ts-ignore
const SearchResults = ({ navigation }) => {
    return (
        <ScrollView style={{ backgroundColor: 'white', padding: 15 }}>
            <SearchResultCard />
            <SearchResultCard />
            <SearchResultCard />
            <SearchResultCard />
            <SearchResultCard />
            <SearchResultCard />
        </ScrollView>
    )
}

export default SearchResults