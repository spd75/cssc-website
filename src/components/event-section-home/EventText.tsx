import * as CommonStyles from '../styles/common-styles';
import React from 'react';
import ResponsiveText from '../elemental-comps/ResponsiveText';

const CONTAIN_BG_COL = '#F9F9F9';
const CONTAIN_PADD = '4%';

const TITLE_SIZE = 42;
const TITLE_COL = '#48A8DE';
const TITLE_PADD = '0';

const TEXT_SIZE = 24;
const TEXT_PADD = '4% 0 3% 0';

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
        backgroundColor: CONTAIN_BG_COL,
        padding: CONTAIN_PADD
    });

    render = () => {
        return (
            <div style={this.containerStyle()}>
                <ResponsiveText size={TITLE_SIZE} color={TITLE_COL} padding={TITLE_PADD}>
                    {this.props.title}
                </ResponsiveText>
                <ResponsiveText size={TEXT_SIZE} padding={TEXT_PADD}>
                    {this.props.children}
                </ResponsiveText>
            </div>
        );
    };
}
