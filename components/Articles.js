import React from "react";
import { FlatList, Text, Linking, StyleSheet, View, Image } from "react-native";

const extractKey = ({ url }) => url;

const Articles = (props) => {
    console.log(props.articles);
  return (
    <View>
        <FlatList 
            contentContainerStyle = {styles.container}
            data = {props.articles}

            renderItem = { ({item}) => {
            return(
                <View style={styles.item}>
                <Text 
                    style={styles.text}
                    onPress={() => Linking.openURL(item.url)}>
                    {item.title}</Text>
                <Image source = {{ uri : item.urlToImage }} style={styles.image}/>
                </View>
            );
            }}

    keyExtractor = {extractKey}
    />
    </View>
  );
};

export default Articles;

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding: 20,
    },
    item:{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 5
    },
    text:{
        flex: 2, padding: 10, backgroundColor: 'lightblue', fontSize: 18, fontWeight: "bold",
    },
    image:{
        flex: 1
    }


});