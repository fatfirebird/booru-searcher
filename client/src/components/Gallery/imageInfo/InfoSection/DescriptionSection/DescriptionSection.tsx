import React from "react";

type TSize = {
  width: number;
  height: number;
}

type TProps = {
  date: number;
  source: string | null;
  rating: 's' | 'q' | 'e' | 'a';
  size: TSize;
}

const DescriptionSection = (props: TProps) => {
  const createDesc = (
    source: string | null,
    rating: 's' | 'q' | 'e' | 'a',
    size: TSize,
    date: number
  ) => {
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