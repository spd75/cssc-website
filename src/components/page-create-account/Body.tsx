import * as CommonStyles from '../styles/common-styles';
import * as Universal from '../../universal';
import React from 'react';
import ResponsiveActionText from '../common-comps/ResponsiveActionText';
import ResponsiveTextField from '../common-comps/ResponsiveTextField';
import ResponsiveText from '../common-comps/ResponsiveText';
import StanButton from '../common-comps/StanButton';

const TITLE_SIZE = 36;
const TEXT_FIELD_SIZE = 28;

const PERSONAL_TEXT_FIELD_WIDTH = '32%';
const EMAIL_TEXT_FIELD_WIDTH = '56%';
const PASS_TEXT_FIELD_WIDTH = '49%';

const SUBMIT_SECTION_TEXT_SIZE = 20;

export default class Body extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            gradeLevel: '',
            cornellEmail: '',
            firstPassword: '',
            confirmPassword: ''
        };
    }

    containerStyle = () => ({
        ...CommonStyles.FlexColCC,
        width: '100%'
    });

    innerContainerStyle = () => ({
        width: '92%'
    });

    personalFieldContainerStyle = () => ({
        ...CommonStyles.FlexCSpace,
        width: '100%'
    });

    accountFieldContainerStyle = () => ({
        ...CommonStyles.FlexColCStart,
        width: '100%'
    });

    passwordContainerStyle = () => ({
        ...CommonStyles.FlexCSpace,
        marginTop: '1.5%',
        width: '100%'
    });

    submitSectionStyle = () => ({
        ...CommonStyles.FlexColCC,
        padding: '3% 0'
    });

    clickHereTextStyle = () => {
        return {
            ...CommonStyles.FlexCC
        };
    };

    updateFirstName = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            firstName: event.target.value
        });
    };

    updateLastName = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            lastName: event.target.value
        });
    };

    updateGradeLevel = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            gradeLevel: event.target.value
        });
    };

    updateCornellEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            cornellEmail: event.target.value
        });
    };

    updateFirstPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            firstPassword: event.target.value
        });
    };

    updateConfirmPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            confirmPassword: event.target.value
        });
    };

    submitAccountInformation = () => {
        console.log(this.state);
    };

    render = () => {
        return (
            <div style={this.containerStyle()}>
                <div style={this.innerContainerStyle()}>
                    <ResponsiveText size={TITLE_SIZE} padding="2.5% 0 1% 0">
                        Personal Information
                    </ResponsiveText>
                    <div style={this.personalFieldContainerStyle()}>
                        <ResponsiveTextField
                            placeholder="First Name"
                            onChange={this.updateFirstName}
                            size={TEXT_FIELD_SIZE}
                            width={PERSONAL_TEXT_FIELD_WIDTH}
                        ></ResponsiveTextField>
                        <ResponsiveTextField
                            placeholder="Last Name"
                            onChange={this.updateLastName}
                            size={TEXT_FIELD_SIZE}
                            width={PERSONAL_TEXT_FIELD_WIDTH}
                        ></ResponsiveTextField>
                        <ResponsiveTextField
                            placeholder="Grade Level"
                            onChange={this.updateGradeLevel}
                            size={TEXT_FIELD_SIZE}
                            width={PERSONAL_TEXT_FIELD_WIDTH}
                        ></ResponsiveTextField>
                    </div>
                </div>

                <div style={this.innerContainerStyle()}>
                    <ResponsiveText size={TITLE_SIZE} padding="2.5% 0 1% 0">
                        Account Information
                    </ResponsiveText>
                    <div style={this.accountFieldContainerStyle()}>
                        <ResponsiveTextField
                            placeholder="Cornell Email"
                            onChange={this.updateCornellEmail}
                            size={TEXT_FIELD_SIZE}
                            width={EMAIL_TEXT_FIELD_WIDTH}
                        ></ResponsiveTextField>
                        <div style={this.passwordContainerStyle()}>
                            <ResponsiveTextField
                                placeholder="Create Password"
                                onChange={this.updateFirstPassword}
                                size={TEXT_FIELD_SIZE}
                                width={PASS_TEXT_FIELD_WIDTH}
                                password={true}
                            ></ResponsiveTextField>
                            <ResponsiveTextField
                                placeholder="Confirm Password"
                                onChange={this.updateConfirmPassword}
                                size={TEXT_FIELD_SIZE}
                                width={PASS_TEXT_FIELD_WIDTH}
                                password={true}
                            ></ResponsiveTextField>
                        </div>
                    </div>
                </div>

                <div style={this.submitSectionStyle()}>
                    <StanButton
                        title="Create Account and Become a Member!"
                        onClick={this.submitAccountInformation}
                        padding="4% 8%"
                        textSize={30}
                    />
                    <div style={this.clickHereTextStyle()}>
                        <ResponsiveText size={SUBMIT_SECTION_TEXT_SIZE} padding="2% 0">
                            Already a member?&nbsp;
                        </ResponsiveText>
                        <ResponsiveActionText
                            size={SUBMIT_SECTION_TEXT_SIZE}
                            padding="2% 0"
                            underline={true}
                            primColor="#505050"
                            hoverColor={Universal.WEB_BLUE_HOVER}
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
