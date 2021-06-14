import React from 'react';
import { ReactComponent as Logo } from '../../assets/Logo.svg';
import ResponsiveText from '../elemental/ResponsiveText';

class Comp {}

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
            width: '10%',
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
            width: '85%',
            height: 'auto',
            margin: '10% 0'
        };
    };

    render = () => {
        return (
            <div style={this.containerStyle()}>
                <Logo style={this.logoStyle()} />
            </div>
        );
    };
}
