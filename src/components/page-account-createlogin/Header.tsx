import * as Universal from '../../universal';
import ResponsiveText from '../common-comps/ResponsiveText';
import ResponsiveActionText from '../common-comps/ResponsiveActionText';
import React from 'react';

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
            backgroundColor: Universal.WEB_BLUE,
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
                    hoverColor={Universal.WEB_BLUE_HOVER}
                    padding="1% 0"
                >
                    Back to Home Page
                </ResponsiveActionText>
            </div>
        );
    };
}
