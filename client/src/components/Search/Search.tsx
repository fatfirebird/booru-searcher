import React, {useEffect} from "react";
// @ts-ignore
import M from 'materialize-css/dist/js/materialize.min.js';
import SearchForm from "./SearchForm/SearchForm";


const Search = () => {

  useEffect(() => {
    M.AutoInit();
  },[])


  return (
    <React.Fragment>
      <div className='row'>
        <SearchForm />
      </div>
    </React.Fragment>
  );
}

export default Search
//