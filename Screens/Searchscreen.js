import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import SearchBar from '../components/SearchBar'
import Article from '../components/Article'
import axios from 'axios'

const Searchscreen = () => {
    const [searchText, setSearchText] = React.useState('')
    const [articles, setArticles] = useState([])
    const searchArticles = () => {
        axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=1bfabc7b22da46a5abf1bb59d9da2783',{
            params: {
              category:'technology',
                q:searchText,
            }
          })
            .then((response) => {
                // console.log(response.data.articles)r
                setArticles(response.data.articles)
            }
            )
       
    }
    return (
        <View style={styles.container}>
            <SearchBar searchText={searchText} setSearchText={setSearchText} 
            onSubmit={searchArticles}
            />
            <FlatList
                data={articles}
                renderItem={({item}) => <Article
                    title={item.title}
                    description={item.description}
                    image={item.urlToImage}
                    url={item.url}
                />}
                keyExtractor={item => item.url}
            />

            

         
        </View>
    )
}

export default Searchscreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    }
})