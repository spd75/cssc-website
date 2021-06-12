import NavItem from '../elemental/NavItem';
import React from 'react';
import Separator from '../elemental/Separator';

const InvalidProps = Error('Number of navlinks and oncliks are not the same');
InvalidProps.name = 'InvalidProps';

type NavLinkBarProps = {
    navLinks: string[];
    onClicks: (() => void)[];
    textPadding: number;
};

export default class NavLinkBar extends React.Component<NavLinkBarProps, any> {
    constructor(props: NavLinkBarProps) {
        super(props);

        if (props.navLinks.length !== props.onClicks.length) {
            throw InvalidProps;
        }

        this.state = {
            navLinks: props.navLinks,
            onClicks: props.onClicks,
            textPadding: props.textPadding
        };
    }

    renderNavLinks = () => {
        const st = this.state;
        var navLinks = [];
        for (var i = 0; i < st.navLinks.length; i++) {
            navLinks.push(
                <NavItem
                    text={st.navLinks[i]}
                    textPadding={st.textPadding}
                    onClick={st.onClicks[i]}
                />
            );
            if (i !== st.navLinks.length - 1) {
                navLinks.push(<Separator offset={10} />);
            }
        }
        return navLinks;
    };

    containerStyle = () => {
        return {
            background: 'fff',
            display: 'flex',
            alignItems: 'stretch'
        };
    };

    render = () => {
        const st = this.state;

        return <div style={this.containerStyle()}>{this.renderNavLinks()}</div>;
    };
}
