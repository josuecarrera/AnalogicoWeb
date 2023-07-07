import React from 'react'

export const NavBar = () => {
  const Menu = ['Profile', 'Your apps', 'Setting', 'Logout'];

  const Button = ({ text }) => {
    return (
      <button>{text}</button>
    );
  };
  return (
    <div>
      <div className="bg-white">
      <nav>
      <ul>
        {
          Menu.map((menu) => (
            <li key={menu}>{menu}</li>
          ))
        }
      </ul>
      <Button text="Iniciar sesión" />
    </nav>
      </div>
    </div>
  )
}
