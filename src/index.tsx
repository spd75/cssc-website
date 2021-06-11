import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import StanButton from './StanButton';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <StanButton
            onClick={() => {
                console.log('it worked!');
            }}
            title="Hello there sir"
            traditional={true}
        />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
