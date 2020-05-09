import React from "react";
import InfoSection from "./InfoSection/InfoSection";
import ContentSection from "./ContentSection/ContentSection";
import LayoutButton from "../../UI/Buttons/LayoutButton";
import {TImageInfo} from "../GalleryContainer";

type TProps = {
  width: number;
  isInfoOpened: boolean;
  info: TImageInfo;
  closeInfo: () => void;
  toggleMenu: () => void;
  handleKeyPressed: () => string;
}

const ImageInfo = (props: TProps) => {
  const {date, extension, id, rating, size, source, tags, url} = props.info;
  const {closeInfo, toggleMenu, isInfoOpened, width} = props;

  return(
    <React.Fragment>
      {
        props.handleKeyPressed() !== 'Escape'
        &&
        <div className='layout-container row'>
          <div className='layout' onClick={closeInfo}/>
          {isInfoOpened && <InfoSection id={id} tags={tags} date={date} source={source} rating={rating} size={size}/>}
          <ContentSection extension={extension} url={url} id={id}/>
          <LayoutButton position='right' icon='close' onClick={closeInfo}/>
          {
            width < 601
            &&
            <LayoutButton position='left' icon='menu' onClick={toggleMenu}/>
          }
        </div>
      }
    </React.Fragment>
  )
}

export default ImageInfo;