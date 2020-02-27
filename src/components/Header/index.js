import React from "react";
import { FaUser } from "react-icons/fa";
import logo from "../../assets/fblogo.png";

import "./style.css";

function Header() {
  return (
    <header>
      <nav>
        <img src={logo} alt="facebook" />
        <div>
          <span>
            <FaUser />
            Meu Perfil
          </span>
          <i></i>
        </div>
      </nav>
    </header>
  );
}

export default Header;
