// import React, { Component } from 'react';
// import './Image.css';

// class Image extends Component {
//     render() {
//         return (
//             <img className={this.props.className} src={this.props.src} alt={this.props.alt + " logo"} />
//         )
//     }
// }

// export default Image;

// import { React.Component as Logo } from '../../Images/welder-1.png';

// function TryImage() {
//   return (
//     <div>
//       {/* Logo is an actual React component */}
//       <Logo />
//     </div>
//   );
// }

// export default TryImage;


// // //WORKS1!!
// import React from 'react';
// import logo from '../../Images/welder-1.png'; // Tell webpack this JS file uses this image
// import { Button, ThemeProvider } from 'react-bootstrap';
// import './Image.css';

// console.log(logo); // /logo.84287d09.png

// function TryImage() {
//   // Import result is the URL of your image
//   return <div><img src={logo} alt="Logo" />
//  <Button variant="flat" size="xxl">flat button</Button></div>

// }
// export default TryImage;

// // //WORK!!!


//WORKING BUTTON!!! 
import React, { Component } from "react";
import { Button } from "react-bootstrap";
//import "bootstrap/dist/css/bootstrap.min.css";
import './Image.css';

class CustomStyle extends Component {
  render() {
    return (
      <div>
        <Button variant="default" className="textColor bgColor">
    TEST TEXT
</Button>
      </div>
    );
  }
}

export default CustomStyle;

///WORKING BUTTON








// import React, { Component } from 'react';
//  import {Component as IconMenu } from '../../Images/welder-1.png'

// const TryImage = () => {
//   return (
    
	  
// 	    <IconMenu width="1rem" />
    
//   )
// }

// export  default TryImage;