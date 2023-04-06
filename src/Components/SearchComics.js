import { useEffect, useState } from 'react';

const SearchComics=()=>{
    const [searchComics,setSearchComics]=useState("")

    const handleChange = (e) => {
        e.preventDefault();
        setSearchComics(e.target.value);
      };
      
return(
<div>
<input
   type="text"
   placeholder="Search Comic here"
   onChange={handleChange}
   value={searchComics} />
</div>
)

}

export default SearchComics;