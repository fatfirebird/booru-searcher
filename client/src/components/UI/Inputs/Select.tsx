import React from "react";

type TSelectInput = {
  name: string,
  label: string,
  values: Array<string>
}

const SelectInput = (props: TSelectInput) => {
  const { name, label, values } = props;
  const createOptions = () => values.map(value => <option key={value} value={value}>{value}</option>);

  return(
    <React.Fragment>
      <select id={name} name={name}>
        {createOptions()}
      </select>
      <label htmlFor={name}>{label}</label>
    </React.Fragment>
  )
}

export default SelectInput