import * as CommonStyles from '../styles/common-styles';
import * as Universal from '../../universal';
import LoginBG from '../../assets/LoginBG.png';
import MainHeader from './MainHeader';
import React from 'react';
import ResponsiveText from '../common-comps/ResponsiveText';
import ResponsiveActionText from '../common-comps/ResponsiveActionText';
import StanButton from '../common-comps/StanButton';

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

    innerContainStyle = () => ({
        ...CommonStyles.FlexColCC,
        padding: '3% 0'
    });

    clickHereTextStyle = () => {
        return {
            ...CommonStyles.FlexCC
        };
    };

    render = () => {
        return (
            <div style={this.windowStyle()}>
                <div style={this.containStyle()}>
                    <MainHeader />

                    <div style={this.innerContainStyle()}>
                        <StanButton
                            title="Create Account and Become a Member!"
                            onClick={() => console.log()}
                            padding="4% 8%"
                            textSize={30}
                        />
                        <div style={this.clickHereTextStyle()}>
                            <ResponsiveText size={16} padding="2% 0">
                                Already a member?&nbsp;
                            </ResponsiveText>
                            <ResponsiveActionText
                                size={16}
                                padding="2% 0"
                                underline={true}
                                primColor="#505050"
                                hoverColor={Universal.WEB_BLUE_HOVER}
                            >
                                Click here
                            </ResponsiveActionText>
                            <ResponsiveText size={16} padding="2% 0">
                                &nbsp;to sign up.
                            </ResponsiveText>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}
