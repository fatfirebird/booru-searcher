import React from 'react';
import { Link } from "react-router-dom";

type TParams = {
  link: '/' | '/search' | '/images' | string,
  text: string
}

type TLinkParams = {
  params: Array<TParams>
}

const HeaderLink = (props: TLinkParams) => {
  const { params } = props;

  const createLink = (params: Array<TParams>) => params.map((element) => {
    const { link, text } = element;

    return(
      <li key={text}>
        <Link to={link}>{text}</Link>
      </li>
    );
  })

  return (
    <React.Fragment>
      {createLink(params)}
    </React.Fragment>
  )
}


export default HeaderLink