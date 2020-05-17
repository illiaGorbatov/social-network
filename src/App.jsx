import React from 'react';
import './App.sass';
import Navigation from "./Components/Navigation/Navigation";
import {Route, withRouter} from "react-router-dom";
import Newsfeed from "./Components/Newsfeed/Newsfeed";
import Friendslist from "./Components/Friendlist/Friendslist";
import DialogContainer from "./Components/Messages/Dialog-container";
import ProfileContainer from "./Components/Profile/Profile-container";
import UsersPageContainer from "./Components/Users/UsersPage-container";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/app-reducer";
import Preloader from "./Components/common/preloader";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) return <Preloader/>
        return (
            <div className="app">
                <HeaderContainer/>
                <Navigation/>
                <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                <Route path="/newsfeed" render={() => <Newsfeed/>}/>
                <Route path="/friendlist" render={() => <Friendslist/>}/>
                <Route path="/messages" render={() => <DialogContainer/>}/>
                <Route path="/users" render={() => <UsersPageContainer/>}/>
                <Route path="/login" render={() => <Login/>}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

export default compose(withRouter, connect(mapStateToProps, {initializeApp}))(App);
