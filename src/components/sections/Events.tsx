import EventBanner, { EventBannerProps } from '../final/EventBanner';
import React from 'react';
import ResponsiveText from '../elemental/ResponsiveText';

type EventData = {
    text: string;
    title: string;
    month: string;
    day: string;
    imgPath: string;
};

type EventSectionProps = {
    children: EventData[];
};

export default class EventSection extends React.Component<EventSectionProps> {
    props: EventSectionProps;

    constructor(props: EventSectionProps) {
        super(props);
        this.props = props;
    }

    renderNavLinks = () => {
        var events = [];
        for (var i = 0; i < this.props.children.length; i++) {
            const curEvent = this.props.children[i];
            events.push(
                <EventBanner
                    title={curEvent.title}
                    month={curEvent.month}
                    day={curEvent.day}
                    imgPath={curEvent.imgPath}
                >
                    {curEvent.text}
                </EventBanner>
            );
        }
        return events;
    };

    containerStyle = () => ({
        width: '100%',
        display: 'flex',
        flexDirection: 'column' as 'column',
        justifyContent: 'center',
        alignItems: 'center',
        rowGap: '5%',
        textAlign: 'center' as 'center',
        padding: '3% 0'
    });

    eventsContainerStyle = () => ({
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'stretch',
        columnGap: '5%'
    });

    render = () => {
        return (
            <div style={this.containerStyle()}>
                <ResponsiveText size={44} padding="0 0 3% 0">
                    Upcoming Trips and Events
                </ResponsiveText>
                <div style={this.eventsContainerStyle()}>{this.renderNavLinks()}</div>
            </div>
        );
    };
}
