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
        padding: '3%'
    });

    render = () => {
        return (
            <div style={this.containerStyle()}>
                <ResponsiveText size={42} color="#48A8DE">
                    {this.props.title}
                </ResponsiveText>
                <ResponsiveText size={24}>{this.props.children}</ResponsiveText>
            </div>
        );
    };
}
