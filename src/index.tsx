import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import WWC from './windowWidthContext';

/** Images */
import Hero1 from './assets/hero1.jpg';
import Hero2 from './assets/hero2.jpg';
import Hero3 from './assets/hero3.jpg';
import Hero4 from './assets/hero4.jpg';

import Why1 from './assets/why1.jpg';
import Why2 from './assets/why2.jpg';
import Why3 from './assets/why3.jpeg';

import Ikon1 from './assets/ikon.jpg';

import Dummy from './assets/dummy.png';

/** Components for Home */
import Events from './components/page-home/section-event/Events';
import Header from './components/header/Header';
import Betski from './text';
import Why from './components/page-home/section-why/Why';
import Join from './components/page-home/section-join/Join';
import Footer from './components/footer/Footer';
import Ikon from './components/page-home/section-ikon/Ikon';
import ContactUs from './components/page-home/section-contact/ContactUs';
import { ThisExpression } from 'typescript';

/** Components for Login */
import AccountScreen from './components/page-account-createlogin/CreateOrLoginScreen';

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

const joinData = [
    {
        children:
            'Convinced? Sign up below with a Cornell email to become a full member of Cornell Ski and Snowboard Club!',
        buttonTitle: 'Sign Up to Become a Member'
    },
    {
        children:
            'Dont want to be committed to being a full member? Join the ListServ to receive club updates to stay tuned!',
        buttonTitle: 'Join the ListServ'
    }
];

const ikonText =
    'Cornell Ski and Snowboard Club has joined the Ikon Pass College Club to offer exclusive college pricing to the Cornell community and beyond on Ikon Passes. For the 21/22 season, current students at any level of study from ANY SCHOOL will be eligible to purchase the Ikon Pass for $619, the Ikon Base Pass with Add-On for $599, and the Ikon Base Pass for $449.  Please check out the Ikon Pass online to learn more about the incredible portfolio of mountains that the Ikon Pass unlocks.';

const ikonButtonText = 'Learn More';

const ikonContainData = {
    children:
        'Gain access to 45 mountains including Snowbird, Alta, Big Sky, Killington, Jackson Hole, Sugarbush, and so many more.'
};

class App extends React.Component<any, any> {
    props: any;

    constructor(props: any) {
        super(props);
        this.props = props;
        this.state = { windowWidth: 0 };
    }

    componentDidMount = () => {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    };

    componentWillUnmount = () => window.removeEventListener('resize', this.updateWindowDimensions);

    updateWindowDimensions = () => {
        this.setState({ windowWidth: window.innerWidth });
    };

    render = () => {
        return <WWC.Provider value={this.state.windowWidth}>{this.props.children}</WWC.Provider>;
    };
}

// *** HomeScreen ***
// ReactDOM.render(
//     <React.StrictMode>
//         <App>
//             <Header path={[Hero1, Hero2, Hero3, Hero4]} />
//             <Betski />
//             <Events>{eventData}</Events>
//             <Why data={whyData} imgPaths={[Why1, Why2, Why3]} />
//             <Join data={joinData} />
//             <Ikon
//                 containImg={Ikon1}
//                 containData={ikonContainData}
//                 infoText={ikonText}
//                 buttonText={ikonButtonText}
//             />
//             <ContactUs />
//             <Footer />
//         </App>
//     </React.StrictMode>,
//     document.getElementById('root')
// );

// *** Login Screen ***
ReactDOM.render(
    <React.StrictMode>
        <App>
            <AccountScreen isCreateAccountScreen={false} />
        </App>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
