import React from "react";

type TDefaultInput = {
  name: string,
  label: string,
  inputRef: React.ElementRef<any>
}

const DefaultInput = (props: TDefaultInput) => {
  const { name, label, inputRef } = props

  return(
    <React.Fragment>
      <input id={name} className='validate' name={name} ref={inputRef} type='text'/>
      <label htmlFor={name}>{label}</label>
    </React.Fragment>
  )
}

export default DefaultInput