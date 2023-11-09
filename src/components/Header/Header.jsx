import React from "react";
import Logo from "../../images/logo.png";

const Header = () => {
  return (
    <>
      <header>
        <div className="mb-4">
          <img
            id="logo"
            className="img-fluid mt-4"
            src={Logo}
            alt="Logo Curso Beta"
            width="180"
          />
        </div>
      </header>
      <br />
      <br />
    </>
  );
};

export default Header;
