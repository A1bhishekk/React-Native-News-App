import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Card, Paragraph, Title } from 'react-native-paper'
import * as WebBrowser from 'expo-web-browser';

const Article = (props) => {
  const goToSource = () => {
    WebBrowser.openBrowserAsync(props.url)
  }

  return (
    <Pressable style={{margin:20}}
    onPress={goToSource}
    >
      <Card>
        
        <Card.Cover source={{ uri:props.image}} />
        <Card.Content>
          <Title>{props.title}</Title>
          <Paragraph>{props.description} </Paragraph>
        </Card.Content>
      </Card>
    </Pressable>
  )
}

export default Article

const styles = StyleSheet.create({})