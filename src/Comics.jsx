import { useEffect, useState } from 'react';
import Card from './Components/Card';

const Comics=()=>{
    const [comic,setComic]=useState([])
  
  
    const getComics = async () => {
      const comic = await fetch(
        `https://gateway.marvel.com/v1/public/comics?ts=1&apikey=f335d5599e262281d1cdfd7c9f0a94f5&hash=c74ecbf3bf21ea45e948725a46aab33f`
      ).then((res) => res.json())
      .then(comic => {
        setComic(comic.data.results);
        console.log(comic.data.results.length, "result");
    });
  
        
    };
  
  
    // get getTopAnime() as the site render useEffect is used
    useEffect(() => {
      getComics();
    }, []);


    return (
        <div className="">
      {comic.length > 0 && comic.map(item => {
        
        return (
          
          <div className="content">
         
          
           < Card comic=
           {item}/>
          
         </div>
          )})}
        </div>
      );
    


}

export default Comics;

