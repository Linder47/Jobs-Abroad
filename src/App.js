import React from 'react';
import './App.css';
//import { Switch, Route } from 'react-router-dom';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Main from './Containers/Main/Main';
//import Vacations from './containers/Albums/Albums';
//import Contacts from './containers/Contacts/Contacts';
//import { PageHeader } from 'react-bootstrap';
import Header from './Components/Header/Header';

const App = () => {
  console.log('hi');
  return (
    <div className="app-main-page">
      <div className='page-header'>
        <Header />
      </div>

      {/* <Main /> */}
      {/* <Switch> */}
      {/* <Route path='/artist/' component={Albums} />
          <Route path='/album/' component={AlbumsInfo} /> */}
      {/* <Route path='/' component={Main} />
        </Switch>  */}


      {/* <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />}>
            <Main />
          </Route>
        </Routes>
      </BrowserRouter> */}



      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<Main />} />
            {/* <Route path="teams" element={<Teams />}>
              <Route path=":teamId" element={<Team />} />
              <Route path="new" element={<NewTeamForm />} />
              <Route index element={<LeagueStandings />} />
            </Route> */}
            <Route
              path="*"
              element={<Navigate to="/" />}
            />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App;
//EDIT!