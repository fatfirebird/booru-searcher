import React from "react";
import popados from '../../../static/popados.webp'

type TProps = {
  error: '404' | 'no_images' | ''
}

const ErrorPage = (props: TProps) => {
  const createErrorDescription = (error: string) => {
    switch (error) {
      case '404': {
        return <p className='flow-text'>Ошибка 404, такой страницы не существует.</p>
      }
      case 'no_images': {
        return <p className='flow-text'>Ошибка, удовлетворяющие запросу изображения не найдены.</p>
      }
      default: {
        return <p className='flow-text'>Что-то пошло не так!</p>
      }
    }
  }

  return(
    <div className='col s12 center'>
      <img className='error-image' src={popados} alt='Попадос'/>
      {createErrorDescription(props.error)}
    </div>
  )
}

export default ErrorPage