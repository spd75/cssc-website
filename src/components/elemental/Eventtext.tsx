import * as CommonStyles from '../styles/common-styles';
import React from 'react';
import ResponsiveText from './ResponsiveText';

type EventTextType = {
    children: string;
    title: string;
};

export default class EventText extends React.Component<EventTextType, any> {
    props: EventTextType;

    constructor(props: EventTextType) {
        super(props);
        this.props = props;
    }

    containerStyle = () => ({
        ...CommonStyles.FlexCenterColText,
        backgroundColor: '#F9F9F9',
        padding: '4%'
    });

    render = () => {
        return (
            <div style={this.containerStyle()}>
                <ResponsiveText size={42} color="#48A8DE" padding="0">
                    {this.props.title}
                </ResponsiveText>
                <ResponsiveText size={24} padding="4% 0 3% 0">
                    {this.props.children}
                </ResponsiveText>
            </div>
        );
    };
}
