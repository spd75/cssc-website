import * as UniversalConstants from '../../universal/constants';
import ResponsiveText from '../common-comps/ResponsiveText';
import ResponsiveActionText from '../common-comps/ResponsiveActionText';
import React from 'react';
import * as UniNav from '../../universal/navigations';

type HeaderProps = {
    title: String;
    note: String;
};

export default class Header extends React.Component<HeaderProps, any> {
    props: HeaderProps;

    constructor(props: HeaderProps) {
        super(props);
        this.props = props;
    }

    containStyle = () => {
        return {
            backgroundColor: UniversalConstants.WEB_BLUE,
            margin: 'auto',
            padding: '2%'
        };
    };

    render = () => {
        return (
            <div style={this.containStyle()}>
                <ResponsiveText size={42} color={'#FFF'} padding="1% 0">
                    {this.props.title}
                </ResponsiveText>
                <ResponsiveText size={26} color={'#FFF'} padding="1% 0">
                    {this.props.note}
                </ResponsiveText>
                <ResponsiveActionText
                    size={18}
                    underline={true}
                    primColor={'#FFF'}
                    hoverColor={UniversalConstants.WEB_BLUE_HOVER}
                    padding="1% 0"
                    onClick={UniNav.toHome}
                >
                    Back to Home Page
                </ResponsiveActionText>
            </div>
        );
    };
}
