import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

/** Images */
import Hero1 from './assets/hero1.jpg';
import Hero2 from './assets/hero2.jpg';
import Hero3 from './assets/hero3.jpg';
import Hero4 from './assets/hero4.jpg';

import Why1 from './assets/why1.jpg';
import Why2 from './assets/why2.jpg';
import Why3 from './assets/why3.jpeg';

import Dummy from './assets/dummy.png';

/** Components */
import Events from './components/event-section-home/Events';
import Header from './components/header/Header';
import Betski from './text';
import Why from './components/why-section-home/Why';
import Join from './components/join-section-home/Join';
import Footer from './components/footer/Footer';

const navFunctions = [
    () => console.log('club news!'),
    () => console.log('trips!'),
    () => console.log('equipment!'),
    () => console.log('about us!'),
    () => console.log('contact us!')
];

const text =
    'Every year we dedicate a week in September to our JOs. JO week consists of multiple bonding events where our exec board can really get to know the club’s JOs.';

const eventData = [
    {
        title: 'Start of JO week',
        month: 'June',
        day: '10',
        imgPath: Dummy,
        text:
            'Every year we dedicate a week in September to our JOs. JO week consists of multiple bonding events where our exec board can really get to know the club’s JOs.'
    },
    {
        title: 'Start of JO week',
        month: 'June',
        day: '10',
        imgPath: Dummy,
        text:
            'Every year we dedicate a week in September to our JOs. JO week consists of multiple bonding events where our exec board can really get to know the club’s JOs.'
    },
    {
        title: 'Start of JO week',
        month: 'June',
        day: '10',
        imgPath: Dummy,
        text:
            'Every year we dedicate a week in September to our JOs. JO week consists of multiple bonding events where our exec board can really get to know the club’s JOs.'
    }
];

const whyData = [
    {
        title: 'Club Bonding',
        children:
            "We are more than a ski club. We're a group of super closely knit people who want to make lifelong friends and have a great time! Check below to see if we have any events that interest you!",
        buttonText: 'Club Events',
        textSizeMultiplier: 0.8,
        width: '50%'
    },
    {
        title: 'Club Trips',
        children:
            'Every year, we take about 4-5 ski trips to places around the country, including a Winter Break trip to Tremblant and a Spring Break Trip. Some of the places we have gone are Whistler, Snowbird, and Zermatt! Check out below to see where we will be going thsi year.',
        buttonText: 'See Trips',
        textSizeMultiplier: 0.95,
        width: '50%'
    },
    {
        title: 'Greek Peak',
        children:
            'We offer discounted season passes to Greek Peak! In the Spring, we run a bus that transports club members from Cornell to Greek Peak for free. We also host weekend tailgates where you can take a nice break from skiing and grab a burger and some snacks to refuel!',
        buttonText: 'Learn More',
        textSizeMultiplier: 1.1,
        width: '50%'
    }
];

ReactDOM.render(
    <React.StrictMode>
        <Header path={[Hero1, Hero2, Hero3, Hero4]} />
        <Betski />
        <Events>{eventData}</Events>
        <Why data={whyData} imgPaths={[Why1, Why2, Why3]} />
        <Join />
        <Footer />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
