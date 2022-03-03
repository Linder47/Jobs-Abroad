import { last } from 'lodash';
import './Consultation.css';
import React, { Component } from 'react';
import { Form, FormGroup, FormControl, rows } from 'react-bootstrap';


class Consultation extends Component {

    state = {
        phoneNumber: ''
    }

    onAddTextChange = (e) => {
        //e.preventDefault();

        console.log(' nothing yet sorry');
        console.log('e ' + e);
        let phoneString = e.slice(4);
        let length = phoneString.length;
        console.log('phonestring ' + phoneString + ' length ' + length);
        if (length > 0) {
            let lastSymbol = e.charAt(e.length - 1);
            console.log('e.target.value.charAt(str.length - 1) lastSymbol ' + lastSymbol);
            if (!isNaN(lastSymbol)) {
                console.log('yes')
                switch (length) {
                    case 1, 2, 6, 9:
                        console.log('case 1st number 5');
                        break;
                    case 4:
                        phoneString = phoneString + ') ';

                    case 5:
                        console.log('case 5!!! phoneString.slice(1,6)   ' + phoneString.slice(0, 3));
                        phoneString = phoneString.slice(0, 3);
                        console.log('new phonestring ' + phoneString);
                        break;

                    case 3:
                        phoneString = phoneString + ') ';
                        break;
                    case 7:
                        phoneString = phoneString + '-';
                        break;
                }
                // this.setState({
                //     phoneNumber: phoneString
                // });
            } else {
                console.log('no')
                switch (length) {
                    // case 5:
                    //     console.log('case 5!!! phoneString.slice(1,6)   ' + phoneString.slice(0, 3));
                    //     phoneString = phoneString.slice(0, 2);
                    //     console.log('new phonestring ' + phoneString);
                    //     break;

                    case 8:
                        console.log('case 8!!! phoneString.slice(1,6)   ' + phoneString.slice(0, 7));
                        phoneString = phoneString.slice(0, 7);
                        console.log('new phonestring ' + phoneString);
                        break;
                }
                // this.setState({
                //     phoneNumber: phoneString
                // });
            }
            //console.log ("before changing state " + this.state.phoneNumber);
            this.setState({
                phoneNumber: phoneString
            });
            //console.log ("after changing state " + this.state.phoneNumber);
        }
        //phoneString.slice(4);

        // this.setState ({
        //     phoneNumber: phoneString
        // });


    }

    render() {
        const fixedPhoneNumber = '+7 (';
        return (
            // < Form >
            //     <FormGroup className="mb-3" controlId="exampleForm.ControlInput1">
            //         <FormLabel>Email address</FormLabel>
            //         <FormControl type="email" placeholder="name@example.com" />
            //     </FormGroup>
            //     <FormGroup className="mb-3" controlId="exampleForm.ControlTextarea1">
            //         <FormLabel>Example textarea</FormLabel>
            //         <FormControl as="textarea" rows={3} />
            //     </FormGroup>
            // </Form >

            <Form>
                <FormGroup className="mb-3" controlId="exampleForm.ControlInput1">
                    <FormControl type="text" placeholder="Имя:" />
                </FormGroup>
                <FormGroup className="mb-3" controlId="exampleForm.ControlInput1">
                    <FormControl type="tel" placeholder="Телефон:" maxLength="14" value={fixedPhoneNumber + this.state.phoneNumber} onChange={(e) => { this.onAddTextChange(e.target.value) }} />
                </FormGroup>
                <FormGroup className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <FormControl as="textarea" placeholder="Комментарий:" rows={3} />
                </FormGroup>
            </Form>
        )
    }
}

export default Consultation;

//value={'+7 ('}