import React from "react";
import CVbutton from "./CVbutton";

const Presentation = () => {
  return (
    <div className="presentation">
      <div className="presentation-container">
        <div className="presentation-container-left">
          <h2>Welcome to my Web Portfolio</h2>
          <p>
            Passionate about computers, at 21 I discover all the possibilities
            offered by digital technology.
          </p>
          <div>
            <CVbutton />
          </div>
        </div>
        <div className="presentation-container-right">
          <img
            src="./publicAssets/tuilier-thomas.jpg"
            alt="Tuilier Thomas"
            className="portrait-ttuilier"
          />
        </div>
      </div>
    </div>

    // <div className="Presentation">
    //   <div className="Presentation-intern">
    //     <div className="Presentation-intern__content">
    //       <div className="Presentation-left">
    //         <h2>Welcome to my Web Portfolio</h2>

    //         <p>
    //           Passionate about computers, at 21 I discover all the possibilities
    //           offered by digital technology.
    //         </p>
    //         <div>
    //           <CVbutton />
    //         </div>
    //       </div>
    //       <div className="Presentation-right">
    //         <img
    //           src="./publicAssets/tuilier-thomas.jpg"
    //           alt="Tuilier Thomas"
    //           className="portrait-ttuilier"
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Presentation;
