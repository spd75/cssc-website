import * as CommonStyles from '../../styles/common-styles';
import * as UniversalConstants from '../../../universal/constants';
import React from 'react';
import ResponsiveText from '../../common-comps/ResponsiveText';
import ResponsiveTextField from '../../common-comps/ResponsiveTextField';

const DATE_OPACITY = 0.9;
const DATE_TEXT_SIZE = 40;

const CONTENT_TITLE_SIZE = 46;
const CONTENT_TEXT_SIZE = 28;

type EventProps = {
    date: Date;
    img: string;
    title: string;
    children: string;
};

export default class Event extends React.Component<EventProps, any> {
    props: EventProps;

    constructor(props: any) {
        super(props);

        this.props = props;
    }

    containerStyle = () => ({
        ...CommonStyles.FlexCStretch,
        width: '40%',
        boxShadow: '1px 1px 5px #DDDDDD'
    });

    imgContainerStyle = () => ({
        ...CommonStyles.ImageCoverPartial(this.props.img),
        padding: '0 20% 16% 0'
    });

    dateContainerStyle = () => ({
        ...CommonStyles.FlexColCC,
        backgroundColor: UniversalConstants.WHITE,
        opacity: DATE_OPACITY,
        padding: '10% 70%'
    });

    dateTextStyle = () => ({
        textAlign: 'center' as 'center'
    });

    contentContainerStyle = () => ({
        ...CommonStyles.FlexColCStart,
        backgroundColor: UniversalConstants.WHITE,
        padding: '3% 2% 6% 2%'
    });

    render = () => {
        const month = UniversalConstants.MONTHINDEX_TO_ABBREVIATION[this.props.date.getMonth()];

        return (
            <div style={this.containerStyle()}>
                <div style={this.imgContainerStyle()}>
                    <div style={this.dateContainerStyle()}>
                        <ResponsiveText size={DATE_TEXT_SIZE} padding="0">
                            {month}
                        </ResponsiveText>
                        <ResponsiveText size={DATE_TEXT_SIZE} padding="0">
                            {this.props.date.getDay()}
                        </ResponsiveText>
                    </div>
                </div>
                <div style={this.contentContainerStyle()}>
                    <ResponsiveText
                        size={CONTENT_TITLE_SIZE}
                        color={UniversalConstants.WEB_BLUE}
                        underline={true}
                        padding="0 0 5% 0"
                    >
                        {this.props.title}
                    </ResponsiveText>
                    <ResponsiveText size={CONTENT_TEXT_SIZE} padding="0">
                        {this.props.children}
                    </ResponsiveText>
                </div>
            </div>
        );
    };
}
