import React from 'react';
import './App.sass';
import Header from "./Components/Header/Header";
import Navigation from "./Components/Navigation/Navigation";
import {Route} from "react-router-dom";
import Newsfeed from "./Components/Newsfeed/Newsfeed";
import Friendslist from "./Components/Friendlist/Friendslist";
import DialogContainer from "./Components/Messages/Dialog-container";
import ProfileContainer from "./Components/Profile/Profile-container";
import UsersPageContainer from "./Components/Users/UsersPage-container";

const App = () => {
    return (
        <div className="app">
            <Header/>
            <Navigation/>
            <Route path="/profile" render={() => <ProfileContainer />}/>
            <Route path="/newsfeed" render={() => <Newsfeed />}/>
            <Route path="/friendlist" render={() => <Friendslist />}/>
            <Route path="/messages" render={() => <DialogContainer />}/>
            <Route path="/users" render={() => <UsersPageContainer />}/>
        </div>
    );
};

export default App;
