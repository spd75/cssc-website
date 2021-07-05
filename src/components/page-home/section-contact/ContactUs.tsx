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
            subject: '',
            email: '',
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

    print = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
    };

    render = () => {
        return (
            <div style={this.containStyle()}>
                <ResponsiveText size={50}>Have Questions? Contact Us!</ResponsiveText>
                <div style={this.formStyle()}>
                    <div style={this.innerFormStyle()}>
                        <ResponsiveTextField
                            placeholder="Name"
                            onChange={this.print}
                            size={26}
                            width="38%"
                        />
                        <span style={this.spanStyle()} />
                        <ResponsiveTextField
                            placeholder="Email"
                            onChange={this.print}
                            size={26}
                            width="38%"
                        />
                    </div>

                    <div style={this.innerFormStyle()}>
                        <ResponsiveTextField
                            placeholder="Subject / Reason for contact"
                            onChange={this.print}
                            size={26}
                            width="76.7%"
                        />
                    </div>

                    <div style={this.innerFormStyle()}>
                        <ResponsiveTextField
                            placeholder="Message"
                            onChange={this.print}
                            size={26}
                            width="76.7%"
                            height="10%"
                        />
                    </div>

                    <div style={this.buttonContainStyle()}>
                        <StanButton title="Send" onClick={() => {}} textSize={36} padding="1% 6%" />
                    </div>
                </div>
            </div>
        );
    };
}
