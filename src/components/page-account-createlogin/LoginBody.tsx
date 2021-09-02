import * as CommonStyles from '../styles/common-styles';
import * as UniversalConstants from '../../universal/constants';
import React from 'react';
import ResponsiveActionText from '../common-comps/ResponsiveActionText';
import ResponsiveTextField from '../common-comps/ResponsiveTextField';
import ResponsiveText from '../common-comps/ResponsiveText';
import StanButton from '../common-comps/StanButton';
import * as UniNav from '../../universal/navigations';

const TITLE_SIZE = 36;
const TEXT_FIELD_SIZE = 28;
const TEXT_FIELD_WIDTH = '100%';

const SUBMIT_SECTION_TEXT_SIZE = 20;

export default class LoginBody extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            cornellEmail: '',
            password: ''
        };
    }

    containerStyle = () => ({
        ...CommonStyles.FlexColCC,
        width: '100%'
    });

    innerContainerStyle = () => ({
        padding: '1%',
        width: '50%'
    });

    loginFieldContainerStyle = () => ({
        ...CommonStyles.FlexColCSpace,
        width: '100%'
    });

    submitSectionStyle = () => ({
        ...CommonStyles.FlexColCC,
        padding: '1% 0 3% 0'
    });

    clickHereTextStyle = () => {
        return {
            ...CommonStyles.FlexCC
        };
    };

    updateCornellEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            cornellEmail: event.target.value
        });
    };

    updatePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            password: event.target.value
        });
    };

    submitLogin = () => {
        console.log(this.state);
    };

    render = () => {
        return (
            <div style={this.containerStyle()}>
                <div style={this.innerContainerStyle()}>
                    <ResponsiveText size={TITLE_SIZE} padding="2.5% 0 1% 0">
                        Sign In
                    </ResponsiveText>
                    <div style={this.loginFieldContainerStyle()}>
                        <ResponsiveTextField
                            placeholder="Cornell Email"
                            onChange={this.updateCornellEmail}
                            size={TEXT_FIELD_SIZE}
                            width={TEXT_FIELD_WIDTH}
                            margins="1% 0 2% 0"
                        ></ResponsiveTextField>
                        <ResponsiveTextField
                            placeholder="Password"
                            onChange={this.updatePassword}
                            size={TEXT_FIELD_SIZE}
                            width={TEXT_FIELD_WIDTH}
                            password={true}
                        ></ResponsiveTextField>
                    </div>
                </div>

                <div style={this.submitSectionStyle()}>
                    <StanButton
                        title="Sign in to Your CSSC Account!"
                        onClick={this.submitLogin}
                        padding="6% 10%"
                        textSize={30}
                    />
                    <div style={this.clickHereTextStyle()}>
                        <ResponsiveText size={SUBMIT_SECTION_TEXT_SIZE} padding="2% 0">
                            Not a member?&nbsp;
                        </ResponsiveText>
                        <ResponsiveActionText
                            size={SUBMIT_SECTION_TEXT_SIZE}
                            padding="2% 0"
                            underline={true}
                            primColor="#505050"
                            hoverColor={UniversalConstants.WEB_BLUE_HOVER}
                            onClick={UniNav.toCreateAccount}
                        >
                            Click here
                        </ResponsiveActionText>
                        <ResponsiveText size={SUBMIT_SECTION_TEXT_SIZE} padding="2% 0">
                            &nbsp;to sign up.
                        </ResponsiveText>
                    </div>
                </div>
            </div>
        );
    };
}
