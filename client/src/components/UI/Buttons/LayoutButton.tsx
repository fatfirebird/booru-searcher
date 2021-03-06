import React from "react";

type TProps = {
  position: 'left' | 'right' | 'center';
  icon: 'close' | 'menu';
  onClick: () => void;
}

const LayoutButton = (props: TProps) => {
  return(
    <div className={`button-container col s1 ${props.position}`}>
      <button
        id='layout-menu'
        className={`btn-floating btn-large waves-effect waves-light right blue-grey darken-4`}
        type="button"
        onClick={props.onClick}
      >
        <i className="material-icons">{props.icon}</i>
      </button>
    </div>
  )
}

export default LayoutButton