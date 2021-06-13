import { any } from 'prop-types';
import EnderBar from './EnderBar';
import NavLinkBar from './NavLinkBar';
import NavTitleBar from './NavTitleBar';
import React from 'react';

export default class NavBar extends React.Component<any, any> {
    navLinks = ['Club News', 'Trips', 'Equipment', 'About Us', 'Contact Us'];
    onClicks = [
        () => console.log('Club news'),
        () => console.log('Trips'),
        () => console.log('Equipment'),
        () => console.log('About Us'),
        () => console.log('Contact Us')
    ];
    constructor(props: any) {
        super(props);
    }

    containerStyle = () => {
        return {
            display: 'flex',
            width: '100%'
        };
    };

    render = () => {
        return (
            <div style={this.containerStyle()}>
                <NavTitleBar />
                <NavLinkBar navLinks={this.navLinks} onClicks={this.onClicks} textPadding={30} />
                <EnderBar />
            </div>
        );
    };
}
