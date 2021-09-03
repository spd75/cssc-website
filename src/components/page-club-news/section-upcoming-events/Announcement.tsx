import * as CommonStyles from '../../styles/common-styles';
import * as UniversalConstants from '../../../universal/constants';
import React from 'react';
import ResponsiveText from '../../common-comps/ResponsiveText';
import ResponsiveTextField from '../../common-comps/ResponsiveTextField';

const DATE_TEXT_COLOR = 'white';
const DATE_MONTH_TEXT_SIZE = 65;
const DATE_DAY_TEXT_SIZE = 70;

const CONTENT_TEXT_COLOR = 'black';
const CONTENT_TITLE_SIZE = 50;
const CONTENT_TEXT_SIZE = 32;

type AnnouncementProps = {
    date: Date;
    title: string;
    children: string;
};

export default class Event extends React.Component<AnnouncementProps, any> {
    props: AnnouncementProps;

    constructor(props: any) {
        super(props);

        this.props = props;
    }

    containerStyle = () => ({
        ...CommonStyles.FlexCStretch,
        width: '80%'
    });

    dateContainerStyle = () => ({
        ...CommonStyles.FlexColCC,
        backgroundColor: UniversalConstants.WEB_BLUE,
        padding: '2%'
    });

    dateTextStyle = () => ({
        textAlign: 'center' as 'center'
    });

    contentContainerStyle = () => ({
        ...CommonStyles.FlexColCStart,
        backgroundColor: UniversalConstants.LIGHT_GRAY,
        padding: '1% 2%'
    });

    render = () => {
        const month = UniversalConstants.MONTHINDEX_TO_ABBREVIATION[this.props.date.getMonth()];

        return (
            <div style={this.containerStyle()}>
                <div>
                    <div>
                        <ResponsiveText size={10}>Aug</ResponsiveText>
                        <ResponsiveText size={10}>10</ResponsiveText>
                    </div>
                </div>
                <div>
                    <ResponsiveText></ResponsiveText>
                </div>
            </div>
        );
    };
}
