import * as CommonStyles from '../styles/common-styles';
import LoginBG from '../../assets/LoginBG.png';
import ResponsiveText from '../common-comps/ResponsiveText';
import React from 'react';

export default class Header extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    containStyle = () => {
        return {
            width: '72%',
            height: '56%',
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            margin: 'auto'
        };
    };

    render = () => {
        return <div style={this.containStyle()}></div>;
    };
}
