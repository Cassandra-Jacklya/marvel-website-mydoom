import { useEffect, useState } from 'react';

import Card from './Components/Card.js';
import SearchComics from './Components/SearchComics.js';

const Comics=()=>{
    const [comic,setComic]=useState([])
    
    const[filterComics,setFilterComic]=useState('')



    const getComics = async () => {
      const comic = await fetch(
        `https://gateway.marvel.com/v1/public/comics?&ts=1&apikey=f335d5599e262281d1cdfd7c9f0a94f5&hash=c74ecbf3bf21ea45e948725a46aab33f`
      ).then((res) => res.json()   )
      .then(comic => {
        // console.log(comic);
        setComic(comic.data.results);
        setFilterComic(comic.data.results)   
    });
  
  
        
    };
    
   

    return (
      <div> 
   <div className='Search-Comic'>
   <SearchComics />
   </div>

        <div className="grid-container">
      {comic.length > 0 && comic?.map(item => {
        return (
          <div key={item.id} className="grid-item" >     
        {/* <h1>{item.title}</h1>
        <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} width={100} height={100} key={item.id}/> */}

        <Card title={item.title} image_src={`${item.thumbnail.path}.${item.thumbnail.extension}`}/>

          
         </div>
          )})}
        </div>
        </div>
      );
    


}

export default Comics;

