import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Article from '../components/Article'
import axios from 'axios'

const HomeScreen = () => {
  const [articles, setArticles] = useState([])
  YOUR_API_KEY = '1bfabc7b22da46a5abf1bb59d9da2783'

  const getArticles = async () => {
    const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=1bfabc7b22da46a5abf1bb59d9da2783',{
      params: {
        category:'technology',
      }
    })
    // console.log(response.data.articles)
    setArticles(response.data.articles)
  }

useEffect(() => {
    getArticles()
  }, [])


  return (
    <ScrollView>
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
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})