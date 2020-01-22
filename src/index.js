
import storage from './Data/Data';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

export let render = (data) => {
    ReactDOM.render(
        <App data={data} addPost={storage.addPost.bind(storage)}
             updatePostCurrentValue={storage.updatePostCurrentValue.bind(storage)}/>,
        document.getElementById('root'));
};
render(storage.getData());
storage.subscribe(render);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

