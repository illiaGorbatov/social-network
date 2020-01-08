import React from 'react';
import './App.sass';
import Header from "./Components/Header/Header";
import Navigation from "./Components/Navigation/Navigation";
import MainContent from "./Components/Main-content/MainContent";
import {BrowserRouter, Route} from "react-router-dom";
import Messages from "./Components/Messages/Messages";

const App = () => {
    return (
        <BrowserRouter>
            <div className="app">
                <Header/>
                <Navigation/>
                <Route path="/MainContent" component={MainContent}/>
                <Route path="/messages" component={Messages}/>
            </div>
        </BrowserRouter>
);
}

export default App;
