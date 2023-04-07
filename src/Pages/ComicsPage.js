import React from 'react';
import { useEffect, useState } from 'react';

import Card from '../Components/Card';

import SearchComics from '../Components/SearchComics.js';
const ComicsPage = ( {children} ) => {
    const [comic,setComic]=useState([])
    const[filterComics,setFilterComic]=useState('');
    const [searchComics,setSearchComics]=useState("");
    const[model,setModel]=useState(false);
    const[tempData,setTemptData]=useState([]);
   
    const getData=(title,synopsis)=>{
      let tempData=[title,synopsis];
    
      console.warn(tempData,'hello');

    }

    React.useEffect(() => {
        console.log(searchComics.length)
        if (searchComics.length > 0) {
            console.log('hello')
            handleSearchTermChange(searchComics)
        }
    }, [searchComics])

    console.log(comic)

    const handleSearchTermChange = (searchTerm) => {
        console.log(searchTerm, 'searchTerm')
        const filtered = comic.filter((comic) =>
        //needs to be changed to lowercase so it can match correctly
        {
         console.log(comic.characters.items.map, 'comic');
          return comic.title.toLowerCase().includes(searchTerm.toLowerCase())
        }
        );
        console.log(filtered, 'filtered');
        setFilterComic(filtered);
        //if the length in filtered array is 0, it means that character does not exist
       
      };

    const getComics = async () => {
    await fetch(
        `https://gateway.marvel.com/v1/public/comics?offset=100&limit=100&ts=1&apikey=f335d5599e262281d1cdfd7c9f0a94f5&hash=c74ecbf3bf21ea45e948725a46aab33f`
      ).then((res) => res.json())
      .then(comic => {
         console.log(comic.data.results,'test123');
        setComic(comic.data.results);
        setFilterComic(comic.data.results)   

    });

    
    
    };


  
    // get getTopAnime() as the site render useEffect is used
    useEffect(() => {
      getComics();
    }, []);

    return (
        <div> 
        <div className='Search-Comic'>
        <SearchComics  searchComics={searchComics} setSearchComics={setSearchComics}/>
        </div>
             <div className="grid-container">
           {filterComics.length > 0 && filterComics?.map((item) => {
             return (
               <div key={item.id} className="grid-item" >     
             {/* <h1>{item.title}</h1>
             <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} width={100} height={100} key={item.id}/> */}
             <Card title={item.title} image_src={`${item.thumbnail.path}.${item.thumbnail.extension}`}/>
             <button onClick={()=>getData(item.title) } >Click here</button>
               
              </div>
               )})}
             </div>
             </div>
    );
}

export default ComicsPage;