
import React from "react";
import Menu from "../Menu";

const Header = () => {
  const menuItems = [{
    name: 'Home',
    linkTo: '/'
  },
  {
    name: 'Sobre mim',
    linkTo: '/sobre'
  },
  {
    name: 'Comentários',
    linkTo: '/comentarios'
  },
  {
    name: 'Contato',
    linkTo: '/contato'
  }]

  return (
    <header>
      <Menu items={menuItems}/>
    </header>
  )
}

export default Header