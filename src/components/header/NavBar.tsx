import EnderBar from './elements/EnderBar';
import NavLinkBar from './elements/NavLinkBar';
import NavTitleBar from './elements/NavTitleBar';
import React from 'react';

// CURRENT VALUES ADDED TO NAVBAR
const NAVBAR_WIDTH = '100%';
const NAVBAR_TOP = '0';
const NAVBAR_SHADOW = '0 2px 6px #7f7f7f';

type NavBarProps = {
    navLinks: string[];
    onClicks: (() => void)[];
};

export default class NavBar extends React.Component<NavBarProps, any> {
    props: NavBarProps;

    constructor(props: NavBarProps) {
        super(props);
        this.props = props;
    }

    containerStyle = () => {
        return {
            display: 'flex',
            width: NAVBAR_WIDTH,
            position: 'fixed' as 'fixed',
            top: NAVBAR_TOP,
            boxShadow: NAVBAR_SHADOW
        };
    };

    render = () => {
        return (
            <div style={this.containerStyle()}>
                <NavTitleBar />
                <NavLinkBar onClicks={this.props.onClicks}>{this.props.navLinks}</NavLinkBar>
                <EnderBar />
            </div>
        );
    };
}
