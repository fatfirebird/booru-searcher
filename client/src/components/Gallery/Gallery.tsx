import React, { ReactNode } from "react";
import {TImage} from "../../redux/actions/imagesAction";

interface IGallery {
  images: Array<TImage>,
  handleClick: (id: any) => void
}

const Gallery = (props: IGallery) => {
  const createImages = (images: Array<TImage>): ReactNode => images.map((el, id) => {
      return <div key={id} className='image-wrapper'>
        <img onClick={() => props.handleClick(el)} src={el.preview || el.source} alt={el.id as string}/>
      </div>
    }
  );

  return(
    <div className='row'>
      {createImages(props.images)}
    </div>
  )
}

export default Gallery;