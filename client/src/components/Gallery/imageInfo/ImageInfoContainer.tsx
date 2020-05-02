import React, {useEffect, useState} from "react";
import {hideImage} from "../../../redux/actions/imagesAction";
import {useDispatch} from "react-redux";
import {useWindowSize} from "../../../hooks/useWindowSize";
import ImageInfo from "./imageInfo";
import {TImageInfo} from "../GalleryContainer";
import {useWindowKeydown} from "../../../hooks/useWindowKeydown";

type TProps = {
  info: TImageInfo
}

const ImageInfoContainer = (props: TProps) => {
  const dispatch = useDispatch();
  const [isInfoOpened, openInfo] = useState(false);
  const { width } = useWindowSize();
  const keyPressed = useWindowKeydown();

  useEffect(() => {
    if (width >= 601) {
      openInfo(true)
    }
  }, [width]);

  console.log(width)

  const closeInfo = () => {
    dispatch(hideImage());
  }

  const toggleMenu = () => {
    openInfo(!isInfoOpened);
  }

  const handleKeyPressed = () => {
    if (keyPressed === 'Escape') {
      closeInfo();
    }
    return keyPressed
  }

  return(
    <ImageInfo
      width={width}
      isInfoOpened={isInfoOpened}
      info={props.info}
      closeInfo={closeInfo}
      toggleMenu={toggleMenu}
      handleKeyPressed={handleKeyPressed}
    />
  )
}

export default ImageInfoContainer;