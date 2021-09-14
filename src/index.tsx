import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import WWC from './windowWidthContext';
import { useRoutes } from 'hookrouter';
import { homeLocURL, loginLocURL, createAccountLocURL } from './universal/navigations';

import HomeScreen from './components/page-home/HomeScreen';
import AccountScreen from './components/page-account-createlogin/CreateOrLoginScreen';
import ClubNewsScreen from './components/page-club-news/ClubNewsScreen';

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

function Website() {
    // Routes are hardcoded. Make sure the same as in universal/navigations
    const routes = {
        '/': () => <HomeScreen />,
        '/member/login': () => <AccountScreen isCreateAccountScreen={false} />,
        '/member/create-account': () => <AccountScreen isCreateAccountScreen={true} />,
        '/club-news': () => <ClubNewsScreen />
    };
    const routeResults = useRoutes(routes);
    return <App> {routeResults} </App>;
}

// *** Main Function that Runs Site ***
ReactDOM.render(<Website />, document.getElementById('root'));

// reportWebVitals();
