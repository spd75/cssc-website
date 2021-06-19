import * as CommonStyles from '../styles/common-styles';
import React from 'react';
import ResponsiveText from './ResponsiveText';

type EventHeaderProps = {
    month: string;
    day: string;
    imgPath: string;
};

export default class EventHeader extends React.Component<EventHeaderProps, any> {
    props: EventHeaderProps;

    constructor(props: EventHeaderProps) {
        super(props);
        this.props = props;
    }

    outerContainer = () => ({
        ...CommonStyles.ImageCover(this.props.imgPath),
        paddingBottom: '50%'
    });

    innerContainer = () => ({
        ...CommonStyles.FlexCenterColText,
        ...CommonStyles.HeightWidth('auto', 'max-content'),
        backgroundColor: 'rgba(248, 248, 248, 0.85)',
        padding: '3%'
    });

    render = () => {
        return (
            <div style={this.outerContainer()}>
                <div style={this.innerContainer()}>
                    <ResponsiveText size={44} padding="0">
                        {this.props.month}
                    </ResponsiveText>
                    <ResponsiveText size={44} padding="0">
                        {this.props.day}
                    </ResponsiveText>
                </div>
            </div>
        );
    };
}
