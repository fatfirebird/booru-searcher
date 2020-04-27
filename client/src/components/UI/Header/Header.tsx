import React from "react";
import HeaderLink from "./HeaderLink";

const Header = () => {
  return(
    <nav className='header grey darken-1'>
      <ul id='nav-mobile'>
        <HeaderLink params={[{link: '/search', text: 'Поиск'}]} />
        <div className='right'>
          <HeaderLink params={[{link: '/', text: 'Главная'}]} />
          <HeaderLink params={[{link: '/search', text: 'Soon...'}]} />
        </div>
      </ul>
    </nav>
  )
}

export default Header