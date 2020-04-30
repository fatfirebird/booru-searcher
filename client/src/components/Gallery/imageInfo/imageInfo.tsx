import React from "react";

const ImageInfo = (props: any) => {
  const {date, extension, id, rating, size, source, tags, url} = props.info;

  return(
    <React.Fragment>
      <div>layout</div>
      <div>
        <div>info</div>
        <div>
          <img src={url} alt={id}/>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ImageInfo