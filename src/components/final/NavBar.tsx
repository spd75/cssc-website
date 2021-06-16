import EnderBar from '../complex/EnderBar';
import NavLinkBar from '../complex/NavLinkBar';
import NavTitleBar from '../complex/NavTitleBar';
import React from 'react';

// CURRENT VALUES ADDED TO NAVBAR
const NAV_LINKS = ['Club News', 'Trips', 'Equipment', 'About Us', 'Contact Us'];
const ON_CLICKS = [
    () => console.log('Club news'),
    () => console.log('Trips'),
    () => console.log('Equipment'),
    () => console.log('About Us'),
    () => console.log('Contact Us')
];

const NAVBAR_WIDTH = '100%';

export default class NavBar extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    containerStyle = () => {
        return {
            display: 'flex',
            width: NAVBAR_WIDTH
        };
    };

    render = () => {
        return (
            <div style={this.containerStyle()}>
                <NavTitleBar />
                <NavLinkBar navLinks={NAV_LINKS} onClicks={ON_CLICKS} textPadding={30} />
                <EnderBar />
            </div>
        );
    };
}
