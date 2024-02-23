import React from "react";

const Presentation = () => {
  return (
    <div className="Presentation">
      <div className="left">
        <h2>Tuilier Thomas</h2>
        <p>
          Passionate about computers, at 21 I discover all the possibilities
          offered by digital technology.
        </p>
      </div>
      <div className="right">
        <img
          src="./publicAssets/tuilier-thomas.jpg"
          alt="Tuilier Thomas"
          className="portrait-ttuilier"
        />
      </div>
    </div>
  );
};

export default Presentation;
