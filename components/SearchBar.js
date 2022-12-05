import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const SearchBar = (props) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search"
        value={props.searchText} 
        onChangeText={(text) => props.setSearchText(text)}
        onSubmitEditing={props.onSubmit}

      />
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    container:{
        // flex:1,
        // // backgroundColor:'#fff',
       
    },
    input:{
        backgroundColor:'#e0e0e0',
        padding:10,
        margin:10,
        borderRadius:5,
        fontSize:18,
        borderWidth:1,
    }

})