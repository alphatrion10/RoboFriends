import React from "react";



const SearchBox = ({ searchfield, searchchange}) =>{
    return(
            <div >
                <input 
                type= 'search' 
                placeholder= 'search robots' 
                onChange={searchchange} />
            </div>);
}
export default SearchBox;