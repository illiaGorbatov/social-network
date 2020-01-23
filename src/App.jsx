import React from 'react';
import './App.sass';
import Header from "./Components/Header/Header";
import Navigation from "./Components/Navigation/Navigation";
import Profile from "./Components/Profile/Profile";
import {Route} from "react-router-dom";
import Dialog from "./Components/Messages/Dialog";
import Newsfeed from "./Components/Newsfeed/Newsfeed";
import Friendslist from "./Components/Friendlist/Friendslist";

const App = (props) => {
    return (

            <div className="app">
                <Header/>
                <Navigation/>
                <Route path="/profile" render={() => <Profile profile={props.data.profile} dispatch={props.dispatch}/>}/>
                <Route path="/newsfeed" render={() => <Newsfeed news={props.data.news}/>}/>
                <Route path="/friendlist" render={() => <Friendslist friends={props.data.friends}/>}/>
                <Route path="/messages" render={() => <Dialog chats={props.data.chat} dispatch={props.dispatch}/>}/>
            </div>

    );
};

export default App;
