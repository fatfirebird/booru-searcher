import React, { ReactNode } from "react";
import {TImage} from "../../redux/actions/imagesAction";

interface IGallery {
  images: Array<TImage>
}

const Gallery = (props: IGallery) => {
  const createImages = (images: Array<TImage>): ReactNode => images.map((el, id) => {
      return <div key={id} className='image-wrapper'>
        <img src={el.preview || el.source} alt={el.id as string}/>
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