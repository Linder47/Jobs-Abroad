import React, { Component } from 'react';
import './Main.css';
import * as JAData from '../../JAData';
//import Header from '../../Components/Header/Header';
//import Slider from '../../Components/Slider/Slider';
import Block from '../../Components/Block/Block';
//import Footer from '../../Components/Footer/Footer';
import Pro from '../../Components/Pro/Pro';
import Vacations from '../../Components/Vacations/Vacations';
import FourSteps from '../../Components/FourSteps/FourSteps';
import Articles from '../../Components/Articles/Articles';
import Consultation from '../../Components/Consultation/Consultation';
//import Image from '../../Components/Image/Image';
import  TryImage  from '../../Components/Image/Image';
//import Slider from '../../Components/Slider/Slider';


class Main extends Component {
    render() {
        return (
            <div className='main' >
                <div className='block'>
                    <TryImage/>
                </div>
                {/* <div className='block'>
                    <Slider/>
                </div> */}
                <div className='block'>
                    <Block
                        title='Высокооплачиваемая работа в Европе'
                        elementName={Pro}
                        count='2'
                        arr={JAData.prosArr}
                        viewClassName='pros'
                    />
                </div>
                <div className='block'>
                    <Block
                        title='Горячие вакансии'
                        elementName={Vacations}
                        count='8'
                        arr={JAData.vacationsArr}
                        viewClassName='vacations'
                        button={JAData.vacationsButton}
                    />
                </div>
                <div className='block'>
                    <Block
                        title='4 шага до получения работы в Европе'
                        elementName={FourSteps}
                        count='4'
                        arr={JAData.fourStepsArr}
                        viewClassName='four-steps'
                        button={JAData.fourStepsButton}
                    />
                </div>
                <div className='block'>
                    <Block
                        title='Статьи'
                        elementName={Articles}
                        count='6'
                        arr={JAData.articlesArr}
                        viewClassName='articles'
                        button={JAData.articlesButton}
                    />
                </div>
                <div className='form'>
                    <Consultation />
                </div>

            </div >
        )
    }
}

/* <UserSearch
                    onAddTextChange={this.handleAddTextChange}
                    value={this.state.addText}
                    onAddSearch={this.handleAddSearch} />
                {
                    this.state.searched ? <ArtistSearchResult
                        searchingArtist={this.state.oldArtist} />
                        : null
                }
                */

export default Main;