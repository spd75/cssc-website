import React from 'react';
import EventHeader from '../elemental/EventHeader';
import EventText from '../elemental/EventText';

type EventBannerProps = {
    children: string;
    title: string;
    month: string;
    day: string;
    imgPath: string;
};

export default class EventBanner extends React.Component<EventBannerProps, any> {
    props: EventBannerProps;

    constructor(props: any) {
        super(props);
        this.props = props;
    }

    containerStyle = () => ({
        width: '18%',
        boxShadow: '1px 1px 5px #CCC'
    });

    render = () => {
        const p = this.props;
        return (
            <div style={this.containerStyle()}>
                <EventHeader month={p.month} day={p.day} imgPath={p.imgPath} />
                <EventText title={p.title}>{p.children}</EventText>
            </div>
        );
    };
}
