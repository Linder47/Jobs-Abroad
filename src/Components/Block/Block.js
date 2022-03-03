import React, { Component } from 'react';
import './Block.css';
import { Button, ThemeProvider } from 'react-bootstrap';
import Pro from '../Pro/Pro';
import Vacations from '../Vacations/Vacations';
import Articles from '../Articles/Articles';
//import { Panel, Table, ButtonToolbar, Button, Image } from 'react-bootstrap';
//import Song from '../../components/Song/Song';

class Block extends Component {

    render() {
        const { title, elementName, count, arr, viewClassName, button } = this.props;
        const ElementName = elementName;
        //надо тогда слайс эррея под нужное кол-во из каунта и сколько весит слайс

        console.log('block component');
        console.log(arr);
        return (
            <div>
                <h3 className="title">{title}</h3>
                <div className={viewClassName}>
                    {arr.map(elem => {
                        console.log('arr.map elem is:  ' + elem.text + ' elem ' + elem + ' !!! ')
                        return <ElementName element={elem} key={elem.id} /> 
                    })};

                </div>
                 {button ? ( button.className === 'button-void' ? <Button  variant="outline-primary" className={button.className} >{button.text}</Button> : <Button className={button.className} >{button.text}</Button> ): null} 
            </div>
        )
    }
}
//bsClass="btn-void"
//{button ? ( button.className === 'button-void' ? (<ThemeProvider prefixes={{ btn: 'my-btn' }}> <Button  variant="outline-primary" className={button.className} >{button.text}</Button></ThemeProvider>) : <Button className={button.className} >{button.text}</Button> ): null} 

// onClick={button.onClick()} !!!!!!!!!!!!!!!




// image={elem.image}
//                         text={elem.text}


export default Block;

// for (let i = 0; i < count; i++) { //add -1
//     console.log(' HELLO elem component ' + elementComponent + ' arr[i] ' + arr[i] + ' i ' + i);
//     console.log(arr[i]);
//     <Pro element={miniArr} /> //мб не заробит!!!
// }

{/* <div className={viewClassName}>
{elementCreator(count, arr)};
<Pro element={miniArr}/>
</div> */}


//Block recieving props and

// for (let i; i < count - 1; i++) {
//     console.log ('elem component' + {elementComponent});
//     <elementComponent element={arr[i]} /> //мб не заробит!!!
// }

// for (let elem of arr) {
//     console.log ('elem component ' + elementName + ' elem is ' + elem);
//     <elementComponent element={elem} />
// }

// function elementCreator(count, arr) {
        //     console.log('in function')
        //     let elementComponent = elementName;
        //     console.log('in function 2 ' + count) //console.log ('elem component ' + elementName + ' elem is ' + elem);
        //     for (let i = 0; i < count; i++) { //add -1
        //         console.log(' HELLO elem component ' + elementComponent + ' arr[i] ' + arr[i] + ' i ' + i);
        //         console.log(arr[i]);
        //         <Pro element={miniArr} /> //мб не заробит!!!
        //     }
        // }