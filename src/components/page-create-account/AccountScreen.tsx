import * as CommonStyles from '../styles/common-styles';
import Body from './Body';
import LoginBG from '../../assets/LoginBG.png';
import MainHeader from './MainHeader';
import React from 'react';

export default class AccountScreen extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    windowStyle = () => {
        return {
            ...CommonStyles.FlexCC,
            backgroundImage: `url(${LoginBG})`,
            position: 'fixed' as 'fixed',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            width: '100%',
            height: '100%'
        };
    };

    containStyle = () => {
        return {
            ...CommonStyles.FlexColCC,
            width: '76%',
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            margin: 'auto'
        };
    };

    render = () => {
        return (
            <div style={this.windowStyle()}>
                <div style={this.containStyle()}>
                    <MainHeader />
                    <Body />
                </div>
            </div>
        );
    };
}
