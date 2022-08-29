import React,{useEffect, useState} from 'react';
import './App.css';
import tmdb from './Tmdb'
import js from './js'
import Movies from './movies';
import FilmeDestaque from './filmeDestaque';






function App() {

const [movieList,setMovie] = useState([])
const [data,setData] = useState(null)





useEffect(()=>{
  const loadAll = async ()=>{
    const list = await tmdb.getBase()
    setMovie(list)

    let originals = list.filter(i=> i.slug === 'originals')
    let random = Math.floor(Math.random() * (originals[0].items.results.length - 1))
    let chose = originals[0].items.results[random]
    let choseInfo = await tmdb.getMovieInfo(chose.id,'tv')
    console.log(chose)
    setData(chose)
  }  

  
  loadAll()
},[])

  return (
  
    <div className="App">
      {
        data && 
        <FilmeDestaque item={data}/ > 
      }
      <section className='lists'>
        {movieList.map((item,key)=>(
          <Movies key={key} titulo={item.title} items={item.items}/>
        ))}
      </section>

    </div>
  );
}

export default App;
