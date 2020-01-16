import React from 'react';
import './App.sass';
import Header from "./Components/Header/Header";
import Navigation from "./Components/Navigation/Navigation";
import Profile from "./Components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import Dialog from "./Components/Messages/Dialog";
import Newsfeed from "./Components/Newsfeed/Newsfeed";
import Friendslist from "./Components/Friendlist/Friendslist";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app">
                <Header/>
                <Navigation/>
                <Route path="/profile" render={() => <Profile />} />
                <Route path="/newsfeed" render={() => <Newsfeed news={props.data.news} />} />
                <Route path="/friendlist" render={() => <Friendslist friends={props.data.friends} />} />
                <Route path="/messages" render={() => <Dialog chats={props.data.chat} />} />
            </div>
        </BrowserRouter>
    );
};

export default App;
