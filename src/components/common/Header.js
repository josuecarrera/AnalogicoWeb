import React from "react";
import { Menu } from "@mui/icons-material"
import { Link } from "react-router-dom";
import logo from "../data/images/sistemas.png";
import { navlink } from "../data/dummydata";
import { useState } from "react";
export const Header = () => {
    const [responsive, setResponsive] = useState(false);
  return (
    <>
      <header>
        <div className="container flexsb">
          <div className="logo">
            <img src={logo} alt="" data-aos='zoom-in-right'/>
          </div>
          <div className={responsive ? "hideMenu" : "nav"}>
            {navlink.map((links, i) => (
              <Link to={links.url} key={i}>
                {links.text}
              </Link>
            ))}
          </div>
          <button className='toggle' onClick={() => setResponsive(!responsive)}>
            <Menu className='icon' />
          </button>
        </div>
      </header>
    </>
  );
};
