import React from "react";

const LayoutButton = (props: any) => {
  return(
    <div className={`col s1 button-container ${props.position}`}>
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