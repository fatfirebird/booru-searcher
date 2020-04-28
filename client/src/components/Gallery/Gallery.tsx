import React, {ReactNode, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loadImages, TImage} from "../../redux/actions/imagesAction";
import { withRouter } from "react-router-dom";
import {getImagesByQuery} from "../../API/api";
import {updatePages} from "../../redux/actions/searchAction";

interface IRootState {
  images: {
    images: Array<TImage>
  },
  searchParams: {
    cur_page: number | ''
  }
}

const Gallery = ({history}: any) => {
  const selectImages = (state: IRootState) => state.images.images;
  const selectPage = (state: IRootState) => state.searchParams.cur_page;
  const images = useSelector(selectImages);
  const page = useSelector(selectPage);


  const dispatch = useDispatch();

  const createImages = (pics: typeof images): ReactNode => pics.map((el, id) => {
    if (el) {
      return <div key={id} className='image-wrapper'>
        <img src={el.preview || el.source} alt={el.id as string}/>
      </div>
    }
    }
  );


  const fetchImages = async (search: string) => {
    await getImagesByQuery(search)
      .then(res => {
        const newImages = images.concat(res.data.images)
        dispatch(loadImages(newImages));
        dispatch(updatePages(res.data.next))
      })
      .catch(err => {alert(err)})
  }

  useEffect(() => {
      if (images.length === 0) {
        console.log(history.location.search)
        const { search } = history.location
        fetchImages(search)
      }
  }, [images]);

  const handleClick = async () => {
    const query = history.location.search;
    const nextParamIndex = query.indexOf('&');
    const search = `?page=${page}` + query.slice(nextParamIndex)
    // console.log(query)
    fetchImages(search)
  }

  return(
    <div className='images-container'>
      <div className='row'>
        {createImages(images)}
      </div>
      <div className='row'>
        <button onClick={handleClick}>fsdf</button>
      </div>
    </div>
  )
}

export default withRouter(Gallery);