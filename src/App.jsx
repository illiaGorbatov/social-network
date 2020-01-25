import React from 'react';
import './App.sass';
import Header from "./Components/Header/Header";
import Navigation from "./Components/Navigation/Navigation";
import {Route} from "react-router-dom";
import Newsfeed from "./Components/Newsfeed/Newsfeed";
import Friendslist from "./Components/Friendlist/Friendslist";
import DialogContainer from "./Components/Messages/Dialog-container";
import ProfileContainer from "./Components/Profile/Profile-container";

const App = (props) => {
    return (
        <div className="app">
            <Header/>
            <Navigation/>
            <Route path="/profile" render={() => <ProfileContainer store={props.store}/>}/>
            <Route path="/newsfeed" render={() => <Newsfeed />}/>
            <Route path="/friendlist" render={() => <Friendslist />}/>
            <Route path="/messages" render={() => <DialogContainer store={props.store}/>}/>
        </div>
    );
};

export default App;
