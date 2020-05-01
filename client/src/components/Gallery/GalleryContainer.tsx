import React, {useEffect, useRef, useState} from "react";
import {batch, useDispatch, useSelector} from "react-redux";
import {getImages, openImage} from "../../redux/actions/imagesAction";
import { withRouter } from "react-router-dom";
import {updateParams} from "../../redux/actions/searchAction";
import { AppState } from "../../redux/reducers/rootReducer";
import Gallery from "./Gallery";
import ImageInfo from "./imageInfo/imageInfo";

type TBooru = '' | 'Konachan' | 'Gelbooru' | 'Danbooru' | 'Yandere' | 'Safebooru' | 'SankakuComplex';
type TOrder = 'd' | 'r';
type TMode = 's' | 'q' | 'e' | 'a';
type TImageInfo = {
  url: string,
  size: {
    height: number,
    width: number
  },
  tags: string,
  preview: string,
  id: string | number,
  source?: string,
  rating: 's' | 'q' | 'e' | 'a',
  date: number,
  extension: 'jpeg' | 'jpg' | 'png' | 'gif' | 'webm' | 'mp4',
  md5: string // hash of the image
}

const GalleryContainer = ({history}: any) => {
  const images = useSelector((state: AppState) => state.images.images);
  const isOpened = useSelector((state: AppState) => state.images.opened);
  const searchParams = useSelector((state: AppState) => state.searchParams);
  const isLoading = useSelector((state: AppState) => state.loading.loading)
  const dispatch = useDispatch();

  const [imageInfo, setImageInfo] = useState({});

  const container = useRef(null);

  const transformParamsToState = (search: string) => {
    const params = new URLSearchParams(search);
    const tags = params.get('tags') as string;
    const page = Number(params.get('page'));
    const booru = params.get('booru') as TBooru;
    const order = params.get('order') as TOrder;
    const mode = params.get('mode') as TMode;
    return {tags, page, booru, order, mode}
  }

  const dispatchQuery = (
    page: number | null | '',
    tags: string,
    booru: TBooru,
    order: TOrder,
    mode: TMode
  ) => {
    if (page !== '') {
      const queryString = `?page=${page}&tags=${tags}&booru=${booru}&order=${order}&mode=${mode}`;
      dispatch(getImages(queryString, page))
      history.push(`/gallery${queryString}`)
    }
  }

  const handleClick = () => {
    const {tags, nextPage, order, booru, mode} = searchParams;
    dispatchQuery(nextPage, tags, booru, order, mode);
  }

  useEffect(() => {
    if (images.length === 0) {
      const { search } = history.location;
      const {booru, tags, page, order, mode} = transformParamsToState(search);
      batch(() => {
        dispatch(updateParams(tags, mode, booru, order));
        dispatchQuery(page, tags, booru, order, mode);
      })
    }
  }, [dispatch]);

  const showInfo = (a: TImageInfo) => {
    console.log(a.md5)
    dispatch(openImage(a.md5));
    setImageInfo(a);
  }

  console.log(isLoading)
  return(
    <div className='images-container' ref={container}>
      {
        images.length > 0
        ?
        <React.Fragment >
          <Gallery images={images} handleClick={showInfo}/>
          {
            searchParams.nextPage !== '' && <a onClick={handleClick} >dfs </a>
          }
        </React.Fragment>
        :
        !isLoading && <div>Popados</div>
      }
      {isLoading && <div>Лоадинг плиз вейт...</div>}
      {isOpened && <ImageInfo info={imageInfo}/>}
    </div>
  )
}

export default withRouter(GalleryContainer);