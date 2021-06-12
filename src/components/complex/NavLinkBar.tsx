import NavItem from '../elemental/NavItem';
import React from 'react';

type NavLinkBarProps = {
    navLinks: string[];
    textPadding: number;
};

export default class NavLinkBar extends React.Component<NavLinkBarProps, any> {
    constructor(props: NavLinkBarProps) {
        super(props);

        this.state = {
            navLinks: props.navLinks,
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
                    onClick={() => {
                        console.log('hello');
                    }}
                />
            );
        }
        return navLinks;
    };

    containerStyle = () => {
        return {
            background: 'fff',
            display: 'flex'
        };
    };

    render = () => {
        const st = this.state;

        return <div style={this.containerStyle()}>{this.renderNavLinks()};</div>;
    };
}
