import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

/** Components */
import StanButton from './components/elemental/StanButton';
import NavItem from './components/elemental/NavItem';
import NavLinkBar from './components/complex/NavLinkBar';
import EnderBar from './components/complex/EnderBar';

const navFunctions = [
    () => console.log('club news!'),
    () => console.log('trips!'),
    () => console.log('equipment!'),
    () => console.log('about us!'),
    () => console.log('contact us!')
];

ReactDOM.render(
    <React.StrictMode>
        <StanButton
            onClick={() => {
                console.log('it worked!');
            }}
            title="Hello there sir"
            traditional={true}
        />
        <NavItem
            onClick={() => {
                console.log('It worked pt 2');
            }}
            text="Equipment"
            textPadding={20}
        />
        <NavLinkBar
            navLinks={['Club News', 'Trips', 'Equipment', 'About Us', 'Contact Us']}
            onClicks={navFunctions}
            textPadding={25}
        />
        <EnderBar />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
