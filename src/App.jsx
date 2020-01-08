import React from 'react';
import './App.sass';
import Header from "./Components/Header/Header";
import Navigation from "./Components/Navigation/Navigation";
import MainContent from "./Components/Main-content/MainContent";

const App = () => {
    return (
        <div className="app">
            <Header/>
            <Navigation/>
            <MainContent/>
        </div>
    );
}

export default App;
