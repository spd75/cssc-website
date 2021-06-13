import React from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg';

export default class NavTitleBar extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    containerStyle = () => {
        return {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#48A8DE',
            fontFamily: 'Mogra',
            color: '#fff',
            fontSize: '55px',
            padding: '5px 30px',
            width: 'max-content',
            flexGrow: 1
        };
    };

    textStyle = () => {
        return {
            padding: '12px 0 0 0',
            margin: '0'
        };
    };

    logoStyle = () => {
        return {
            padding: '0',
            margin: '0'
        };
    };

    render = () => {
        return (
            <div style={this.containerStyle()}>
                <p style={this.textStyle()}>CSSC</p>
                <Logo style={this.logoStyle()} />
            </div>
        );
    };
}
