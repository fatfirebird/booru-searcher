import React, {useEffect} from "react";
import axios from 'axios';
// @ts-ignore
import M from 'materialize-css/dist/js/materialize.min.js';
import Radio from "../UI/Inputs/Radio";
import DefaultInput from "../UI/Inputs/DefaultInput";
import SelectInput from "../UI/Inputs/Select";

const Search = () => {

  useEffect(() => {
    M.AutoInit();
  },[])

  const submitForm = async (e: any) => {
    e.preventDefault()
    const data = await axios.get('http://localhost:5000/images')
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })

  }

  return (
    <React.Fragment>
      <div className='row'>
        <form id='search' className='form col s12' method='get' onSubmit={submitForm}>
          <div className='row'>
            <div className='col s6 input-field'>
              <DefaultInput name='tags' label='Теги'/>
            </div>
            <div className='col s6 input-field'>
              <SelectInput
                label='Буры'
                name='booru'
                values={['multi', 'Konachan', 'Gelbooru', 'Danbooru', 'Yandere', 'Safebooru', 'SankakuComplex']}
              />
            </div>
          </div>
          <div className='row'>
            <div className='col s2'>
              <Radio label='Порядок' name='order' values={['d', 'r']}/>
            </div>
            <div className='col s2'>
              <Radio label='Мод' name='mode' values={['s', 'q', 'e', 'a']}/>
            </div>
          </div>
          <div className='row'>
            <div className='col s6 right'>
              <button className='waves-effect waves-light blue-grey darken-4 btn right' type='submit'>Отправить</button>
            </div>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

export default Search
//