import React, { Component } from 'react';
//import { render } from 'react-dom';
import './Pro.css';
console.log('pro component ');

class Pro extends Component {
    render() {
        console.log('pro component 3');
        //console.log(this.props + ' !!! ' + this.props.text);
        const element = this.props.element;
        const text = element.text;
        const image = element.image;
        //const { image, text } = this.props;
        console.log('!!!!!!!!!!!we re in pro component ' + text);

        return (

            <div className='proElement'>
                <p>{text}</p>
            </div>
        )
    }
}

export default Pro;