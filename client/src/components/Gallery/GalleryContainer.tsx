import React, {useEffect, useRef} from "react";
import {batch, useDispatch, useSelector} from "react-redux";
import {getImages} from "../../redux/actions/imagesAction";
import { withRouter } from "react-router-dom";
import {updatePages, updateParams} from "../../redux/actions/searchAction";
import { AppState } from "../../redux/reducers/rootReducer";
import Gallery from "./Gallery";

type TBooru = '' | 'Konachan' | 'Gelbooru' | 'Danbooru' | 'Yandere' | 'Safebooru' | 'SankakuComplex';
type TOrder = 'd' | 'r';
type TMode = 's' | 'q' | 'e' | 'a';

const GalleryContainer = ({history}: any) => {
  const images = useSelector((state: AppState) => state.images.images);
  const searchParams = useSelector((state: AppState) => state.searchParams);
  const isLoading = useSelector((state: AppState) => state.loading.loading)
  const dispatch = useDispatch();

  const container = useRef(null);
  const frag = useRef(null)

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
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    // return window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleScroll = (e: any) => {
    // console.log(window.screenY)
    // console.log(window.innerHeight)
    // console.log(window.pageYOffset)
    // @ts-ignore
    // console.log(container?.current.clientHeight)
    // @ts-ignore
    // console.log(container?.current.scrollHeight)
    // @ts-ignore
    const bottom = (container?.current.getBoundingClientRect().bottom)
    console.log(bottom)
    // @ts-ignore
    if (bottom <= 1000) {
      if (!isLoading) {
        const {tags, nextPage, order, booru, mode} = searchParams;
        dispatchQuery(nextPage, tags, booru, order, mode);
      }
    }
  }

  return(
    <div className='images-container' ref={container}>
      {images
        ?
        <React.Fragment >
          <Gallery images={images}/>
          <button onClick={handleClick} >dfs </button>
        </React.Fragment>
        :
        <div>попадос</div>
      }
    </div>
  )
}

export default withRouter(GalleryContainer);