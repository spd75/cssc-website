import React, { useState, useEffect } from 'react';

const INIT_WINDOW_WIDTH = 0;
const TEXT_PADD = '12px 0';
const TEXT_MARGIN = '0';

type ResponsiveTextProps = {
    text: string;
    size: number;
    family: string;
    color: string;
};

export default class ResponsiveText extends React.Component<ResponsiveTextProps, any> {
    props: ResponsiveTextProps;

    constructor(props: ResponsiveTextProps) {
        super(props);

        this.props = props;
        this.state = { winWidth: INIT_WINDOW_WIDTH };
    }

    componentDidMount = () => {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    };

    componentWillUnmount = () => window.removeEventListener('resize', this.updateWindowDimensions);

    updateWindowDimensions = () => {
        this.setState({ winWidth: window.innerWidth });
        console.log(this.state.winWidth);
    };

    componentWillReceiveProps = (props: ResponsiveTextProps) => {
        this.props = {
            ...this.props,
            color: props.color
        };
    };

    style = () => {
        const st = this.state;

        return {
            fontFamily: this.props.family,
            fontSize: `${this.props.size * st.winWidth * 0.0004}px`,
            color: this.props.color,
            padding: TEXT_PADD,
            margin: TEXT_MARGIN
        };
    };

    render() {
        return <p style={this.style()}>{this.props.text}</p>;
    }
}
