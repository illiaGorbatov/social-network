import React from 'react';
import './App.sass';
import Header from "./Components/Header/Header";
import Navigation from "./Components/Navigation/Navigation";
import Profile from "./Components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import Dialog from "./Components/Messages/Dialog";
import Newsfeed from "./Components/Newsfeed/Newsfeed";
import Friendslist from "./Components/Friendlist/Friendslist";

const App = () => {
    return (
        <BrowserRouter>
            <div className="app">
                <Header/>
                <Navigation/>
                <Route path="/profile" component={Profile}/>
                <Route path="/newsfeed" component={Newsfeed}/>
                <Route path="/friendlist" component={Friendslist}/>
                <Route path="/messages" component={Dialog}/>
            </div>
        </BrowserRouter>
    );
};

export default App;
