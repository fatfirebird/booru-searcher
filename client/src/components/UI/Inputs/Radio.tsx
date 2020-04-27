import React from 'react';

type TRadioValue = 's' | 'q' | 'e' | 'a' | 'd' | 'r';
type TRadioProps = {
  label: string,
  name: string,
  values: Array<TRadioValue>
}

const Radio = (props: TRadioProps) => {
  const { label, name, values } = props;

  enum inputLabels {
    a = 'Any',
    s = 'Safe',
    q = 'Questionable',
    e = 'Explicit',
    d = 'Date desc',
    r = 'Random'
  }

  const createRadio = (name: string, values: Array<TRadioValue>) => values.map((value, id) => {
    return(
      <div key={id}>
        <label>
          <input className='with-gap' name={name} value={value} type='radio' defaultChecked={id === 0}/>
          <span>{inputLabels[value]}</span>
        </label>
      </div>
    )
  });

  return(
    <React.Fragment>
      <label>{label}</label>
      {createRadio(name, values)}
    </React.Fragment>
  )
}

export default Radio