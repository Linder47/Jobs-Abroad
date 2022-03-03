import React, { Component } from 'react';
//import { render } from 'react-dom';
import './FourSteps.css';
console.log('4steps component ');

class FourSteps extends Component {
    render() {
        const element = this.props.element;
        const text = element.text;
        const icon = element.icon;
        //const { image, text } = this.props;
        console.log('!!!!!!!!!!!we re in pro component ' + text);

        return (

            <div className='fourStepElement'>
                <p>{text}</p>
            </div>
        )
    }
}

export default FourSteps;