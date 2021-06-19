import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

/** Hero Images */
import Hero1 from './assets/hero1.jpg';
import Hero2 from './assets/hero2.jpg';
import Hero3 from './assets/hero3.jpg';
import Hero4 from './assets/hero4.jpg';

import Dummy from './assets/dummy.png';

/** Components */
import EventBanner from './components/final/EventBanner';
import Header from './components/sections/Header';
import Betski from './text';

const navFunctions = [
    () => console.log('club news!'),
    () => console.log('trips!'),
    () => console.log('equipment!'),
    () => console.log('about us!'),
    () => console.log('contact us!')
];

const text =
    'Every year we dedicate a week in September to our JOs.  JO week consists of multiple bonding events where our exec board can really get to know the club’s JOs.';

ReactDOM.render(
    <React.StrictMode>
        <Header path={[Hero1, Hero2, Hero3, Hero4]} />
        <Betski />
        <EventBanner title="Start of JO Week" month="June" day="10" imgPath={Dummy}>
            {text}
        </EventBanner>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
