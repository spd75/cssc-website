import React from 'react';
import { useState, useEffect } from 'react';
import './index.css';

type StanButtonProps = {
    title: string;
    traditional: boolean;
    onClick: () => void;
};

export default class StanButton extends React.Component<StanButtonProps, any> {
    constructor(props: StanButtonProps) {
        super(props);

        this.state = {
            title: props.title,
            primColor: props.traditional ? '#48A8DE' : '#fff',
            secColor: props.traditional ? '#fff' : '#505050',
            hoverColor: props.traditional ? '#4084CB' : '#aaa',
            hovering: false,
            onClick: props.onClick
        };
    }

    setButtonHovered = () => {
        this.setState({
            hovering: true
        });
    };

    setButtonUnhovered = () => {
        this.setState({
            hovering: false
        });
    };

    buttonStyle = (width: number): any => {
        const state = this.state;

        return {
            width: `${width}px`,
            height: `${width * 0.2}px`,
            backgroundColor: !state.hovering ? state.primColor : state.hoverColor,
            cursor: !state.hovering ? 'auto' : 'pointer',
            border: 'none',
            padding: '0'
        };
    };

    textStyle = (fontSize: number): object => {
        return {
            fontSize: `${fontSize}px`,
            color: this.state.secColor,
            margin: '0',
            fontFamily: 'Arvo'
        };
    };

    render = () => {
        return (
            <button
                style={this.buttonStyle(150)}
                className={this.buttonStyle(150)}
                onClick={this.state.onClick}
                onMouseEnter={this.setButtonHovered}
                onMouseLeave={this.setButtonUnhovered}
            >
                <p style={this.textStyle(12)}>{this.state.title}</p>
            </button>
        );
    };
}
