import Newsitem from './Newsitem'
import Spinner from './Spinner'
import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from 'react';
import { useEffect } from 'react';


export default function Newscontainer(props) {
    
    const [articles, setArticles] = useState([])
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    const [loading, setLoading] = useState(false)
    const [category, setCategory] = useState('general')


    const fetchMoreData = async ()=>{
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=574e1635c0154d4b8e2ef0fb7292ae03&page=${page + 1}&pagesize=9`
      
      let data = await fetch(url);
      let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setPage(page+1)

    }

    const updateNews = async () => {
        setLoading(true)
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=574e1635c0154d4b8e2ef0fb7292ae03&page=1&pagesize=9`;
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        setCategory(props.category)
        document.title = `${props.category} - rtshk News`
    }
    useEffect( () => {
        updateNews()
    }, [])
    

  
    
   
    

  return (
    <>
    <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Spinner></Spinner>}
        >
        <div className="container my-4">
            <div className="row row-cols-3"> 
              {articles.map((element) => {
                return <div key = {element.publishedAt}><Newsitem  imageUrl = {element.urlToImage} title = {element.title} description={element.description} 
                newsDetails = {element.url } mode = {props.mode} author = {element.author} time = {element.publishedAt}
                /></div>
              }
            )}
            </div>
        </div>
    </InfiniteScroll>

    </>
  )
}
 
