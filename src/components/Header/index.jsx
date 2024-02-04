
import React from "react";
import Menu from "../Menu";

const Header = () => {
  const menuItems = ['Home', 'Sobre mim', 'Comentários', 'Contato']
  
  return (
    <header>
      <Menu items={menuItems}/>
    </header>
  )
}

export default Header