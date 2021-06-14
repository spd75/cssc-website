import React, { useState, useEffect } from 'react';

type ResponsiveTextProps = {
    text: string;
    size: number;
    family: string;
    color: string;
};

export default class ResponsiveText extends React.Component<any, any> {
    size: number;
    family: string;
    color: string;

    constructor(props: any) {
        super(props);

        this.size = props.size;
        this.family = props.family;
        this.color = props.color;

        this.style = this.style.bind(this);

        this.state = {
            winWidth: 0,
            text: props.text,
            hover: props.hover
        };
    }

    componentDidMount = () => {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    };

    componentWillUnmount = () => {
        window.removeEventListener('resize', this.updateWindowDimensions);
    };

    updateWindowDimensions = () => {
        this.setState({ winWidth: window.innerWidth });
        console.log(this.state.winWidth);
    };

    componentWillReceiveProps = (props: any) => {
        this.color = props.color;
    };

    style = () => {
        const st = this.state;
        console.log(this.size);
        return {
            color: this.color,
            fontFamily: this.family,
            padding: '12px 0',
            fontSize: `${this.size * st.winWidth * 0.0004}px`,
            margin: '0'
        };
    };

    render = () => {
        console.log('rebuilt');
        return <p style={this.style()}>{this.state.text}</p>;
    };
}
