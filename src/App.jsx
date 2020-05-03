import React from 'react';
import './App.sass';
import Navigation from "./Components/Navigation/Navigation";
import {Route} from "react-router-dom";
import Newsfeed from "./Components/Newsfeed/Newsfeed";
import Friendslist from "./Components/Friendlist/Friendslist";
import DialogContainer from "./Components/Messages/Dialog-container";
import ProfileContainer from "./Components/Profile/Profile-container";
import UsersPageContainer from "./Components/Users/UsersPage-container";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";

const App = () => {
    return (
        <div className="app">
            <HeaderContainer/>
            <Navigation/>
            <Route path="/profile/:userId?" render={() => <ProfileContainer />}/>
            <Route path="/newsfeed" render={() => <Newsfeed />}/>
            <Route path="/friendlist" render={() => <Friendslist />}/>
            <Route path="/messages" render={() => <DialogContainer />}/>
            <Route path="/users" render={() => <UsersPageContainer />}/>
            <Route path="/login" render={() => <Login />}/>
        </div>
    );
};

export default App;
