import React from "react";

const SearchBox = ({searchChange}) => {
    return (
        <>
        <input 
        type="search" 
        placeholder ="search robots" 
        className="pa3 bg-blue-200 rounded text-center"
        onChange={searchChange}/>
        </>
    )
    
}

export default SearchBox