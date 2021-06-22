import * as CommonStyles from '../../styles/common-styles';
import NavItem from '../sub-comps/NavItem';
import React from 'react';
import Separator from '../sub-comps/Separator';

const CONTAIN_PRIM_COL = 'rgba(255, 255, 255, 0.9)';
const CONTAIN_FLEX_GROW = 10;

const SEPARATOR_OFFSET_PERCENT = 1.5;

const InvalidProps = Error('Number of navlinks and oncliks are not the same');
InvalidProps.name = 'InvalidProps';

type NavLinkBarProps = {
    children: string[];
    onClicks: (() => void)[];
};

export default class NavLinkBar extends React.Component<NavLinkBarProps, any> {
    props: NavLinkBarProps;

    constructor(props: NavLinkBarProps) {
        super(props);

        if (props.children.length !== props.onClicks.length) {
            throw InvalidProps;
        }

        this.props = props;
        this.state = {};
    }

    renderNavLinks = () => {
        const props = this.props;
        var navLinks = [];
        for (var i = 0; i < props.children.length; i++) {
            navLinks.push(<NavItem onClick={props.onClicks[i]}>{props.children[i]}</NavItem>);
            if (i !== props.children.length - 1) {
                navLinks.push(<Separator offset={SEPARATOR_OFFSET_PERCENT} />);
            }
        }
        return navLinks;
    };

    containerStyle = () => {
        return {
            ...CommonStyles.FlexCS,
            backgroundColor: CONTAIN_PRIM_COL,
            flexGrow: CONTAIN_FLEX_GROW
        };
    };

    render = () => {
        const st = this.state;

        return <div style={this.containerStyle()}>{this.renderNavLinks()}</div>;
    };
}
