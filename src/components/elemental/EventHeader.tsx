import * as CommonStyles from '../styles/common-styles';
import React from 'react';
import ResponsiveText from './ResponsiveText';

const OUTER_PADD_BOTTOM = '50%';

const INNER_HEIGHT = 'auto';
const INNER_WIDTH = 'max-content';
const INNER_BG_COL = 'rgba(248, 248, 248, 0.85)';
const INNER_PADD = '3%';

const TEXT_PADDING = '0';

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
        paddingBottom: OUTER_PADD_BOTTOM
    });

    innerContainer = () => ({
        ...CommonStyles.FlexCenterColText,
        ...CommonStyles.HeightWidth(INNER_HEIGHT, INNER_WIDTH),
        backgroundColor: INNER_BG_COL,
        padding: INNER_PADD
    });

    render = () => {
        return (
            <div style={this.outerContainer()}>
                <div style={this.innerContainer()}>
                    <ResponsiveText size={44} padding={TEXT_PADDING}>
                        {this.props.month}
                    </ResponsiveText>
                    <ResponsiveText size={44} padding={TEXT_PADDING}>
                        {this.props.day}
                    </ResponsiveText>
                </div>
            </div>
        );
    };
}
