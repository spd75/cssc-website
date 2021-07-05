import React from 'react';
import EventHeader from './EventHeader';
import EventText from './EventText';

const CONTAIN_WIDTH = '18%';
const CONTAIN_BOX_SHADOW = '1px 1px 5px #CCC';

export type EventBannerProps = {
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
        width: CONTAIN_WIDTH,
        boxShadow: CONTAIN_BOX_SHADOW
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
