import React, {useEffect} from "react";
import { useForm } from "react-hook-form";
import DefaultInput from "../../UI/Inputs/DefaultInput";
import SelectInput from "../../UI/Inputs/Select";
import Radio from "../../UI/Inputs/Radio";
import {useDispatch} from "react-redux";
import {resetParams} from "../../../redux/actions/searchAction";
import {resetImages} from "../../../redux/actions/imagesAction";
import {withRouter} from "react-router-dom";

type FormInputs = {
  tags: string,
  booru: '' | 'Konachan' | 'Gelbooru' | 'Danbooru' | 'Yandere' | 'Safebooru' | 'SankakuComplex',
  order: 'd' | 'r', //date desc, random
  mode: 's' | 'q' | 'e' | 'a' //safe, questionable, explicit, any
}

const SearchForm = ({history}: any) => {
  const { handleSubmit, register } = useForm<FormInputs>();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetParams());
    dispatch(resetImages());
  }, [])

  const onSubmit = async (data: FormInputs) => {
    const { tags, booru, mode, order } = data;
    const queryString = `?page=1&tags=${tags}&booru=${booru}&order=${order}&mode=${mode}`;
    history.push(`/gallery${queryString}`);
  }

  return(
    <form id='search' className='form col s12' method='get' onSubmit={handleSubmit(onSubmit)}>
      <div className='row'>
        <div className='col s12 m6 input-field'>
          <DefaultInput name='tags' label='Теги' inputRef={register}/>
        </div>
        <div className='col s12 m6 input-field'>
          <SelectInput
            label='Буры'
            name='booru'
            values={['multi', 'Konachan', 'Gelbooru', 'Danbooru', 'Yandere', 'Safebooru', 'SankakuComplex']}
            inputRef={register}
          />
        </div>
      </div>
      <div className='row'>
        <div className='col s6 m3'>
          <Radio label='Порядок' name='order' values={['d', 'r']} inputRef={register}/>
        </div>
        <div className='col s6 m3'>
          <Radio label='Мод' name='mode' values={['s', 'q', 'e', 'a']} inputRef={register}/>
        </div>
      </div>
      <div className='row'>
        <div className='col s6 right'>
          <button className='waves-effect waves-light blue-grey darken-4 btn right' type='submit'>Отправить</button>
        </div>
      </div>
    </form>
  )
}

export default withRouter(SearchForm)