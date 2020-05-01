import React, {useEffect, useState} from "react";
import InfoSection from "./InfoSection/InfoSection";
import ContentSection from "./ContentSection/ContentSection";
import LayoutButton from "../../UI/Buttons/LayoutButton";
import {hideImage} from "../../../redux/actions/imagesAction";
import {useDispatch} from "react-redux";

const ImageInfoContainer = (props: any) => {
  const {date, extension, id, rating, size, source, tags, url} = props.info;
  const dispatch = useDispatch();

  const [isInfoOpened, openInfo] = useState(false);


  useEffect(() => {
    if (window.innerWidth >= 601) {
      openInfo(true)
    }
  }, [])

  return(
    <div className="layout row">
      {isInfoOpened && <InfoSection id={id} tags={tags} date={date} source={source} rating={rating} size={size}/>}
      <ContentSection extension={extension} url={url} id={id}/>
      <LayoutButton position='right' icon='close' onClick={() => {dispatch(hideImage())}}/>
      {
        window.innerWidth < 601
        &&
        <LayoutButton position='left' icon='menu' onClick={() => {openInfo(!isInfoOpened)}}/>
      }
    </div>
  )
}

export default ImageInfoContainer;