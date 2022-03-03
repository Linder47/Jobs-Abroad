import React, { Component } from 'react';
import slider1 from '../../Images/slider-1.png';
import slider2 from '../../Images/slider-2.jpg';
import slider3 from '../../Images/slider-3.jpg'; // Tell webpack this JS file uses this image
import { Button, ThemeProvider } from 'react-bootstrap';
import './Slider.css';


// import React from 'react';
// import logo from '../../Images/welder-1.png'; // Tell webpack this JS file uses this image
// import { Button, ThemeProvider } from 'react-bootstrap';
// import './Image.css';

// console.log(logo); // /logo.84287d09.png

// function TryImage() {
//   return <div><img src={logo} alt="Logo" /></div>
//  <Button variant="flat" size="xxl">flat button</Button></div>

// }
// export default TryImage;

//console.log(slider); // /logo.84287d09.png
//<img src={slider} alt="slider" />



// function TryImage(slide) {
//     return <div><img src={slide} alt="Slide 1" /></div>
// }




//trying from here!
// const sliders = [slider1, slider2, slider3];

// class Slider extends Component {
//     movingSlides = setInterval(function (slide) {
//         let position = element.getBoundingClientRect();
//         console.log('position ' + position);
//         position.right == 0 ? clearInterval(movingSlides) : slide.style.left  2px
//     }, 20);


//     render() {


//         return (
//             <div className='sliderBlock'>
//                 <div><img className='slider-1' src={slider1} alt="Slide 1" /></div>
//                 <div><img className='slider-2' src={slider2} alt="Slide 2" /></div>
//                 <div><img className='slider-3' src={slider3} alt="Slide 3" /></div>
//             </div>
//         )
//     }
// }

export default Slider;
//till here!!! tomorrow uncomment THIS block1




///const sliders = [slider1, slider2, slider3];

class Slider extends Component {
    timer = setInterval(function () {
        movingSlides();
    }, 10000);

    movingSlides = (currentSlide) => {
        //let position = element.getBoundingClientRect();
        //console.log('position ' + position);

        document.getElementById({ currentSlide }).animate([
            // keyframes
            { transform: 'translateX(0px)' },
            { transform: 'translateX(-300px)' }
        ], {
            // timing options
            duration: 1000,
            iterations: 1
        });
    }

    render() {
        return (
            <div className='sliderBlock'>
                <div><img className='slider slider-1' src={slider1} alt="Slide 1" /></div>
                <div><img className='slider slider-2' src={slider2} alt="Slide 2" /></div>
                <div><img className='slider slider-3' src={slider3} alt="Slide 3" /></div>
            </div>
        )
    }
}


export default Slider;









// class Slider extends Component {
//     render() {
//         let slideIndex = 1;
//         showSlides(slideIndex);

//         // Next/previous controls
//         function plusSlides(n) {
//             showSlides(slideIndex += n);
//         }

//         // Thumbnail image controls
//         function currentSlide(n) {
//             showSlides(slideIndex = n);
//         }

//         function showSlides(n) {
//             let i;
//             let slides = document.getElementsByClassName("mySlides");
//             let dots = document.getElementsByClassName("dot");
//             console.log('slides ' + slides);
//             console.log('dots ' + dots);
//             if (n > slides.length) { slideIndex = 1 }
//             if (n < 1) { slideIndex = slides.length }
//             for (i = 0; i < slides.length; i++) {
//                 slides[i].style.display = "none";
//             }
//             for (i = 0; i < dots.length; i++) {
//                 dots[i].className = dots[i].className.replace(" active", "");
//             }
//             console.log ('тут затуп');
//             console.log ('slides 1 '+  slides[slideIndex - 1]);
//             // slides[slideIndex - 1].style.display = "block";
//            // dots[slideIndex - 1].className += " active";
//         }
//         // Import result is the URL of your image



//         return (<div className='slider'>

//             <div className="slideshow-container">

//                 <div className="mySlides fade">
//                     <div className="numbertext">1 / 3</div>
//                     <img src={slider1} />
//                     <div className="text">Caption Text</div>
//                 </div>

//                 <div className="mySlides fade">
//                     <div className="numbertext">2 / 3</div>
//                     <img src={slider2} />
//                     <div className="text">Caption Two</div>
//                 </div>

//                 <div class="mySlides fade">
//                     <div className="numbertext">3 / 3</div>
//                     <img src={slider3} />
//                     <div className="text">Caption Three</div>
//                 </div>


//                 <a className="prev" onclick={plusSlides(-1)}>&#10094;</a>
//                 <a className="next" onclick={plusSlides(1)}>&#10095;</a>
//             </div>


//             <div >
//                 <span className="dot" onclick={currentSlide(1)}></span>
//                 <span className="dot" onclick={currentSlide(2)}></span>
//                 <span className="dot" onclick={currentSlide(3)}></span>
//             </div >
//         </div >)

//     }
// }
// export default Slider;