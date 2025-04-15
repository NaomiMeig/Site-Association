import "../../styles/Images.css"
import { useEffect, useState } from "react";

function Images() {

    return (
      <div className="child-image">
        <img src="src/assets/forum1.jpeg" alt ="Forum" className="child-image1" />
        <img src="src/assets/forum6.jpeg" alt ="Forum" className="child-image2" />
        <img src="src/assets/forum7.jpeg" alt ="Forum" className="child-image3" />
      </div>
    );
  }
  
  export default Images;