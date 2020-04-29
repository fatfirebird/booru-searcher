import React, {useEffect} from "react";
import { useForm } from "react-hook-form";
import DefaultInput from "../../UI/Inputs/DefaultInput";
import SelectInput from "../../UI/Inputs/Select";
import Radio from "../../UI/Inputs/Radio";
import {getImagesByProps} from "../../../API/api";
import {batch, useDispatch, useSelector} from "react-redux";
import {updatePages, updateParams} from "../../../redux/actions/searchAction";
import {loadImages} from "../../../redux/actions/imagesAction";
import {withRouter} from "react-router-dom";
// @ts-ignore
import M from 'materialize-css/dist/js/materialize.min.js';


interface IRootState {
  searchParams: {
    cur_page: number
  }
}

type FormInputs = {
  tags: string,
  booru: '' | 'Konachan' | 'Gelbooru' | 'Danbooru' | 'Yandere' | 'Safebooru' | 'SankakuComplex',
  order: 'd' | 'r', //date desc, random
  mode: 's' | 'q' | 'e' | 'a' //safe, questionable, explicit, any
}

const SearchForm = ({history}: any) => {
  const { handleSubmit, register } = useForm<FormInputs>();

  const selectPage = (state: IRootState ) => state.searchParams.cur_page;
  const page = useSelector(selectPage);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updatePages(1, 2))
  }, [])

  const onSubmit = async (data: FormInputs) => {
    const { tags, booru, mode, order } = data;
    // await getImagesByProps(tags, booru, order, mode, page)
    //   .then((res) => {
    //     console.log(res.response)
    //     const { images, next } = res.response.data;
    //     if (images) {
    //       const { query } = res
    //       batch(() => {
    //         dispatch(loadImages(images));
    //         dispatch(updatePages(next, 1));
    //         // dispatch(updateParams(tags, mode, booru, order));
    //       });
    //       history.push(`/gallery${query}`);
    //     } else {
    //       throw new Error('Что-то пошло не так')
    //     }
    //     return res
    //   })
    //   .catch((err) => {
    //     M.toast({html: err})
    //     return err
    //   })
  }

  return(
    <form id='search' className='form col s12' method='get' onSubmit={handleSubmit(onSubmit)}>
      <div className='row'>
        <div className='col s6 input-field'>
          <DefaultInput name='tags' label='Теги' inputRef={register}/>
        </div>
        <div className='col s6 input-field'>
          <SelectInput
            label='Буры'
            name='booru'
            values={['multi', 'Konachan', 'Gelbooru', 'Danbooru', 'Yandere', 'Safebooru', 'SankakuComplex']}
            inputRef={register}
          />
        </div>
      </div>
      <div className='row'>
        <div className='col s2'>
          <Radio label='Порядок' name='order' values={['d', 'r']} inputRef={register}/>
        </div>
        <div className='col s2'>
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