import React from "react";

const DescriptionSection = (props: any) => {
  const createDesc = (source: any, rating: any, size: any, date: any) => {
    const localDate = new Date(date).toLocaleDateString();
    return(
      <React.Fragment>
        {source && <a href={source} target="_blank">Оригинал</a>}
        {rating && <div>Рейтинг: {rating}</div>}
        {size && <div>Размер: {size.width}x{size.height}</div>}
        {date && <div>Дата: {localDate}</div>}
      </React.Fragment>
    )
  }

  return(
    <div className="section">
      {createDesc(props.source, props.rating, props.size, props.date)}
    </div>
  )
}

export default DescriptionSection