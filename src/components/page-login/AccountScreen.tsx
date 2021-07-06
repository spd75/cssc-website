import * as CommonStyles from '../styles/common-styles';
import LoginBG from '../../assets/LoginBG.png';
import React from 'react';
import MainHeader from './MainHeader';

export default class AccountScreen extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    containStyle = () => {
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

    innerContainStyle = () => {
        return {
            width: '76%',
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            margin: 'auto'
        };
    };

    render = () => {
        return (
            <div style={this.containStyle()}>
                <div style={this.innerContainStyle()}>
                    <MainHeader />
                </div>
            </div>
        );
    };
}
