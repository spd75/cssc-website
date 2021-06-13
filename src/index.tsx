import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

/** Components */
import NavBar from './components/complex/NavBar';
import Betski from './text';

const navFunctions = [
    () => console.log('club news!'),
    () => console.log('trips!'),
    () => console.log('equipment!'),
    () => console.log('about us!'),
    () => console.log('contact us!')
];

ReactDOM.render(
    <React.StrictMode>
        <NavBar />
        <Betski />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
