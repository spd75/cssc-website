import * as CommonStyles from '../styles/common-styles';
import EventBanner, { EventBannerProps } from './EventBanner';
import React from 'react';
import ResponsiveText from '../elemental-comps/ResponsiveText';

const OUTER_CONTAIN_WIDTH = '100%';
const OUTER_CONTAIN_PADD = '3% 0';

const INNER_CONTAIN_WIDTH = '100%';
const INNER_CONTAIN_COL_GAP = '5%';

const HEADER_SIZE = 52;
const HEADER_PADD = '0 0 3% 0';

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

    outerContainerStyle = () => ({
        ...CommonStyles.FlexCenterColText,
        width: OUTER_CONTAIN_WIDTH,
        padding: OUTER_CONTAIN_PADD
    });

    eventsContainerStyle = () => ({
        ...CommonStyles.FlexCS,
        width: INNER_CONTAIN_WIDTH,
        columnGap: INNER_CONTAIN_COL_GAP
    });

    render = () => {
        return (
            <div style={this.outerContainerStyle()}>
                <ResponsiveText size={HEADER_SIZE} padding={HEADER_PADD}>
                    Upcoming Trips and Events
                </ResponsiveText>
                <div style={this.eventsContainerStyle()}>{this.renderNavLinks()}</div>
            </div>
        );
    };
}
