import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect} from 'react';
import  Header from './components/Header';
import { StyleSheet, Text, View, Button } from 'react-native';

import { fetchNews } from './components/API';
import Articles from './components/Articles';
// import Nav from 'react-bootstrap/Nav';


const App = () => {
  const keyword = 'computer';

  //attempt to figure out wth is going on with lifecycle hooks
  const [articles, setArticles] = useState([]);      //article list
  const [fetchErr, setFetchErr] = useState("");     //Current fetch error
  const [ref, setRef] = useState(false);            //refresh flag

  //executed at init render or comp update
  useEffect(() => {
    const getNews = async () =>{
      try{
        const curr_news = await fetchNews(keyword);
        setArticles(curr_news.articles);
      } catch (error) {
        setFetchErr("APIError: Unable to fetch news articles.");
        console.log(fetchErr);
      }
    };

    getNews();

    return function cleanup(){};
  }
  ,[ref]);
  //second argument is variable to check if changed

  return (
    <View style={styles.container}>
      <Header title="Welcome!"/>
      <StatusBar style="auto" />
      <Articles articles={articles}/>
      <Button onPress={() => {setRef(!ref); alert("Page refreshed successfully.")}}title="Refresh"/>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'space-between',
  },
  bar: {
    height: 25,
    backgroundColor: 'purple',
    justifyContent:'center',
    alignItems: 'center',
  },
});
