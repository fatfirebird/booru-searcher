import React from "react";

type TProps = {
  id: string | number;
}

const IdSection = (props: TProps) => {
  return(
    <div className="row">
      <div className="col">
        <h5>{props.id}</h5>
      </div>
    </div>
  )
}

export default IdSection