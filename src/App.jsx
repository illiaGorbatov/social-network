import React from 'react';
import './App.sass';
import Header from "./Components/Header/Header";
import Navigation from "./Components/Navigation/Navigation";
import Profile from "./Components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import Messages from "./Components/Messages/Messages";
import Newsfeed from "./Components/Newsfeed/Newsfeed";
import Friends from "./Components/Friends/Friends";

const App = () => {
    return (
        <BrowserRouter>
            <div className="app">
                <Header/>
                <Navigation/>
                <Route path="/profile" component={Profile}/>
                <Route path="/newsfeed" component={Newsfeed}/>
                <Route path="/friends" component={Friends}/>
                <Route path="/messages" component={Messages}/>
            </div>
        </BrowserRouter>
    );
};

export default App;
