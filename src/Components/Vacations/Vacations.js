import React, { Component } from 'react';
//import { render } from 'react-dom';
import './Vacations.css';
console.log('vacations component ');

class Pro extends Component {
    render() {
        console.log('vacations component!! inside');
        //console.log(this.props + ' !!! ' + this.props.text);
        const element = this.props.element;
        //const text = element.text;
        //const image = element.image;
        //const { image, text } = this.props;
        //console.log('!!!!!!!!!!!we re in vacatioNSSS component ' + text);

        return (

            <div className='vacation'>
                <img className='vacation-image'></img>
                <h3>{element.vacancy}</h3>
                <p className='vacation-location'>{element.location}</p>
                <p>{element.salary} $/мес</p>
            </div>
        )
    }
}

export default Pro;