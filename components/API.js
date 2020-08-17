import { NEWS_API_KEY } from '../config';

//async function to fetch array of news articles

export const fetchNews = async (keyword) => {
    const news_re = await fetch(`https://newsapi.org/v2/everything?q=${keyword}&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`);
    const news_json = await news_re.json();
    // console.log(news_json);
    console.log("API fetched articles successfully!");
    return news_json;
}