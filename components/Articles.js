import React from "react";
import { FlatList, Text, Linking, StyleSheet, View, Image, List} from "react-native";
import {fetchImage} from "./API"
const extractKey = ({ url }) => url;

const Articles = (props) => {
    // fetchImage();
    // console.log(props.articles)
    return (
        <View style={styles.container}>
        <FlatList 
            data = {props.articles}
            renderItem = { ({item}) => {
            return(
                <View style={styles.item}> 
                    <Text style={styles.text} onPress={() => Linking.openURL(item.url)}>
                        {item.title}</Text>
                    <Image source = {{ uri : item.urlToImage }} style={styles.image}/>
                </View>
            );
            }}
        keyExtractor = {extractKey}/>
        </View>
    );
};

export default Articles;

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    item:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        alignContent:"stretch",
        paddingTop: 2, 
        paddingBottom: 2,
    },
    text:{
        flex: 3, padding: 3, backgroundColor: 'lightblue', fontSize: 14, fontWeight: "bold",
    },
    image:{
        flex: 2,
        alignSelf: "stretch",
        width: undefined,
        height: undefined,
    }
});