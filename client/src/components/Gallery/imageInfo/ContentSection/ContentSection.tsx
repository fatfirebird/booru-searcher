import React from 'react';

type TProps = {
  extension: 'jpeg' | 'jpg' | 'png' | 'gif' | 'webm' | 'mp4';
  url: string;
  id: string | number;
}


const ContentSection = (props: TProps) => {

  console.log(props.extension)

  return(
    <div className='col l9 m9 s12 main-image-container'>
      <a href={props.url} target='_blank'>
        {
          ['webm', 'mp4'].includes(props.extension)
            ?
            <video className='main-image' controls={true}>
              <source src={props.url} type= {`video/${props.extension}`} />
            </video>
            :
            <img className='main-image' src={props.url} alt={props.id as string}/>
        }
      </a>
    </div>
  )
}

export default ContentSection