const SearchComics=({searchComics, setSearchComics})=>{


    const handleChange = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        setSearchComics(e.target.value);
      };
      
return(
<div>
<input
   type="text"
   placeholder="Search Comic here"
   onChange={handleChange}
   value={searchComics} 
   />
</div>
)

}

export default SearchComics;