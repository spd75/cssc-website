import * as CommonStyles from '../styles/common-styles';
import * as Universal from '../../universal';
import React from 'react';
import ResponsiveText from '../elemental-comps/ResponsiveText';
import StanButton from '../elemental-comps/StanButton';

const CONTAIN_DEFAULT_WIDTH = '50%';
const CONTAIN_PADD = '2%';

const TITLE_COL = Universal.WEB_BLUE;
const TITLE_PADD = '0 0 2% 0';

const TEXT_COL = Universal.LIGHT_BLACK;
const TEXT_PADD = '0 0 3% 0';

const BG_COL = 'rgba(255, 255, 255, 0.85)';

const DEFAULT_TEXT_SIZE_MULT = 1;

type InfoBoxProps = {
    title: string;
    children: string;
    buttonText: string;
    textSizeMultiplier?: number;
    width?: string;
};

export default class InfoBox extends React.Component<InfoBoxProps, any> {
    props: InfoBoxProps;

    constructor(props: InfoBoxProps) {
        super(props);

        this.props = props;
    }

    containerStyle = () => {
        return {
            ...CommonStyles.FlexCC,
            flexDirection: 'column' as 'column',
            backgroundColor: BG_COL,
            width: this.props.width || CONTAIN_DEFAULT_WIDTH,
            padding: CONTAIN_PADD
        };
    };

    render = () => {
        const mult = this.props.textSizeMultiplier || DEFAULT_TEXT_SIZE_MULT;

        return (
            <div style={this.containerStyle()}>
                <ResponsiveText size={40 * mult} color={TITLE_COL} padding={TITLE_PADD}>
                    {this.props.title}
                </ResponsiveText>
                <ResponsiveText size={28 * mult} color={TEXT_COL} padding={TEXT_PADD}>
                    {this.props.children}
                </ResponsiveText>
                <StanButton title={this.props.buttonText} onClick={() => console.log('clicked')} />
            </div>
        );
    };
}
