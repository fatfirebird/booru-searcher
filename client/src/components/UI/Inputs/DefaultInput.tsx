import React from "react";

type TDefaultInput = {
  name: string,
  label: string
}

const DefaultInput = (props: TDefaultInput) => {
  const { name, label } = props

  return(
    <React.Fragment>
      <input id={name} className='validate' name={name} type='text'/>
      <label htmlFor={name}>{label}</label>
    </React.Fragment>
  )
}

export default DefaultInput