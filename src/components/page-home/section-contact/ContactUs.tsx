import * as CommonStyles from '../../styles/common-styles';
import StanButton from '../../common-comps/StanButton';
import ResponsiveText from '../../common-comps/ResponsiveText';
import ResponsiveTextField from '../../common-comps/ResponsiveTextField';
import React from 'react';

export default class ContactUs extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            name: '',
            email: '',
            subject: '',
            message: ''
        };
    }

    containStyle = () => ({
        backgroundColor: '#fff',
        textAlign: 'center' as 'center',
        padding: '5% 0'
    });

    formStyle = () => ({
        ...CommonStyles.FlexCC,
        paddingTop: '1.5%',
        flexDirection: 'column' as 'column'
    });

    innerFormStyle = () => ({
        ...CommonStyles.FlexCC,
        width: '100%',
        paddingBottom: '0.7%'
    });

    inputStyle = () => ({
        padding: '0.7%',
        borderRadius: '0',
        fontFamily: 'Arvo',
        paddingBottom: '10%',
        resize: 'none' as 'none'
    });

    buttonContainStyle = () => ({
        ...CommonStyles.FlexCC,
        width: '100%',
        paddingTop: '1.5%'
    });

    spanStyle = () => ({
        width: '0.7%'
    });

    updateName = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            name: event.target.value
        });
    };

    updateEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            email: event.target.value
        });
    };

    updateSubject = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            subject: event.target.value
        });
    };
    updateMessage = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            message: event.target.value
        });
    };

    send = () => {
        console.log('Name: ' + this.state.name);
        console.log('Email: ' + this.state.email);
        console.log('Subject: ' + this.state.subject);
        console.log('Message: ' + this.state.message);
    };

    render = () => {
        return (
            <div style={this.containStyle()}>
                <ResponsiveText size={50}>Have Questions? Contact Us!</ResponsiveText>
                <div style={this.formStyle()}>
                    <div style={this.innerFormStyle()}>
                        <ResponsiveTextField
                            placeholder="Name"
                            onChange={this.updateName}
                            size={26}
                            width="38%"
                        />
                        <span style={this.spanStyle()} />
                        <ResponsiveTextField
                            placeholder="Email"
                            onChange={this.updateEmail}
                            size={26}
                            width="38%"
                        />
                    </div>

                    <div style={this.innerFormStyle()}>
                        <ResponsiveTextField
                            placeholder="Subject / Reason for contact"
                            onChange={this.updateSubject}
                            size={26}
                            width="76.7%"
                        />
                    </div>

                    <div style={this.innerFormStyle()}>
                        <ResponsiveTextField
                            placeholder="Message"
                            onChange={this.updateMessage}
                            size={26}
                            width="76.7%"
                            height="10%"
                        />
                    </div>

                    <div style={this.buttonContainStyle()}>
                        <StanButton
                            title="Send"
                            onClick={this.send}
                            textSize={36}
                            padding="1% 6%"
                        />
                    </div>
                </div>
            </div>
        );
    };
}
