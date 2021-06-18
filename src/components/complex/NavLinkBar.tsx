import NavItem from '../elemental/NavItem';
import React from 'react';
import Separator from '../elemental/Separator';

const BAR_PRIM_COL = 'rgba(255, 255, 255, 0.90)';

const SEPARATOR_OFFSET = 10;

const InvalidProps = Error('Number of navlinks and oncliks are not the same');
InvalidProps.name = 'InvalidProps';

type NavLinkBarProps = {
    navLinks: string[];
    onClicks: (() => void)[];
};

export default class NavLinkBar extends React.Component<NavLinkBarProps, any> {
    props: NavLinkBarProps;

    constructor(props: NavLinkBarProps) {
        super(props);

        if (props.navLinks.length !== props.onClicks.length) {
            throw InvalidProps;
        }

        this.props = props;
        this.state = {};
    }

    renderNavLinks = () => {
        const props = this.props;
        var navLinks = [];
        for (var i = 0; i < props.navLinks.length; i++) {
            navLinks.push(<NavItem text={props.navLinks[i]} onClick={props.onClicks[i]} />);
            if (i !== props.navLinks.length - 1) {
                navLinks.push(<Separator offset={SEPARATOR_OFFSET} />);
            }
        }
        return navLinks;
    };

    containerStyle = () => {
        return {
            display: 'flex',
            alignItems: 'stretch',
            backgroundColor: BAR_PRIM_COL,
            flexGrow: 10
        };
    };

    render = () => {
        const st = this.state;

        return <div style={this.containerStyle()}>{this.renderNavLinks()}</div>;
    };
}
