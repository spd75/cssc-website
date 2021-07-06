import * as CommonStyles from '../styles/common-styles';
import * as Universal from '../../universal';
import ResponsiveText from '../common-comps/ResponsiveText';
import ResponsiveActionText from '../common-comps/ResponsiveActionText';
import React from 'react';

export default class Header extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    containStyle = () => {
        return {
            backgroundColor: Universal.WEB_BLUE,
            margin: 'auto',
            padding: '2%'
        };
    };

    render = () => {
        return (
            <div style={this.containStyle()}>
                <ResponsiveText size={42} color={'#FFF'}>
                    Create an Account to Become a Member of CSSC
                </ResponsiveText>
                <ResponsiveText size={26} color={'#FFF'}>
                    Note: Members that want full access to club trips, events, and services will
                    first have to pay club dues. This year, club dues will be $30. You will be
                    limited in your access to the club website and club events until you pay this
                    small fee.
                </ResponsiveText>
                <ResponsiveActionText
                    size={18}
                    underline={true}
                    primColor={'#FFF'}
                    hoverColor={Universal.WEB_BLUE_HOVER}
                >
                    Back to Home Page
                </ResponsiveActionText>
            </div>
        );
    };
}
