import React, { Component } from 'react';
//import { render } from 'react-dom';
import './Articles.css';

class Articles extends Component {
    render() {
        //console.log(this.props + ' !!! ' + this.props.text);
        const element = this.props.element;
        // const text = element.text;
        // const icon = element.icon;
        //const { image, text } = this.props;
        console.log('!!!!!!!!!!!we re in articles ');

        return (
            <div className='articleElement'>
                <div className='articleImage'></div>
                <h4>{element.articleTitle}</h4>
                <p>{element.articleText}</p>
            </div>
        )
    }
}

export default Articles;