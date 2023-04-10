import React from 'react';
import { useEffect, useState } from 'react';
import Card from '../Components/Card';
import SearchComics from '../Components/SearchComics.js';
import cancel from '../Images/cancel.svg';
import FilterComics from '../Components/FilterComics';


const ComicsPage = ( {children} ) => {
    const [comic,setComic]=useState([])
    const[filterComics,setFilterComic]=useState('');
    const [searchComics,setSearchComics]=useState("");
    const[model,setModel]=useState(false);
    const[tempData,setTemptData]=useState([]);
    const[popupcontent,setPopUpContent]=useState([]);
    const [popuptogle,setPopUpToggle]=useState(false);
    const [styling,setStyling]=useState(null)

//setter for on and off the modal
     const changecontent=(item)=>{
    setPopUpContent([item]);
    setPopUpToggle(!popuptogle);
    
       }

    const [,setFilterForALL]=useState("All")
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

    //function to handle filter
    const handleFilterChange=(filter)=>{
     setFilterForALL(filter)
     switch (filter) {
      case "All":
        setFilterComic(comic);
        break;
      case "Popular":
        const topComics = comic.filter(
          (comic) => comic.characters.available >= 2
        );
        console.log(comic.digitalId,'testing ID')

        setFilterComic(topComics);
        break;
      case "The Avengers":
        console.log(comic.title)
 
        const bottomComics = comic.filter(
          (comic) => comic.title.includes("Avengers"),  
        );

        const IronComics=comic.filter(
          (comic) => comic.title.includes("Iron Man"),
        )
        setFilterComic(bottomComics);
        break;
      
        case "Star Wars":
          console.log(comic.title)
          const StarWarsComics = comic.filter(
            (comic) => comic.title.includes('Star Wars')
            
          );
          setFilterComic(StarWarsComics);
          break;
        default:
        setFilterComic(comic);
        break;
    }

    }

    const handleSearchTermChange = (searchTerm) => {
        console.log(searchTerm, 'searchTerm')
        const filtered = comic.filter((comic) =>
        {
       
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
        <div className="search-bar input">
        <SearchComics  searchComics={searchComics} setSearchComics={setSearchComics}/>
        </div>
        <div>
        <FilterComics onFilterChange={handleFilterChange} />
      </div>
             <div className="grid-container" style={styling}>
           {filterComics.length > 0 && filterComics?.map((item) => {
             return (
               <div key={item.id} className="grid-item" onClick={()=>changecontent(item) } >     
             {/* <h1>{item.title}</h1>
             <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} width={500} height={800} key={item.id}/> */}
             <Card title={item.title} image_src={`${item.thumbnail.path}.${item.thumbnail.extension}`}/>
               
              </div>
               )})}
             </div>
          {popuptogle&&<div className="pop_up_container">  
           <div className='pop_up_body' onClick={(e)=>e.stopPropagation}>  
           <div className="pop_up_header">
            <img src={cancel} onClick={changecontent} height={35} width={26}/>
           </div>
             <div className="pop_up_content">
              {popupcontent.map((item)=>{
                console.log(item.title)
                return(
                  <div className='pop_up_card' >
                    <div className='img'>
                     <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} className='img'/>
                     </div>
                     <div className='cardcontent'>
                    <p>Title:{item.title}</p>
                   <p>Issue number:{item.issueNumber}</p>
                   <p>Page count:{item.pageCount}</p>
                   <p></p>
                   {/* <p>Prices:{item.prices[0]}</p> */}
                   </div>
                    </div>
                )
              })}
             </div>
             </div>
             </div> }
             </div>
    );
}

export default ComicsPage;