import React from 'react';

const ContentSection = (props: any) => {

  return(
    <div className='col l9 m9 s12 main-image-container'>
      {
        ['jpeg', 'png', 'gif', 'jpg'].includes(props.extension)
        ?
           <a href={props.url} target='_blank'>
             <img className='main-image'src={props.url} alt={props.id}/>
           </a>
        :
          <a href={props.url} target='_blank'>
            <video className='main-image' controls={true}>
              <source src={props.url} type= {`video/${props.extension}`} />
            </video>
          </a>
      }
    </div>
  )
}

export default ContentSection