import * as CommonStyles from '../styles/common-styles';
import * as Universal from '../../universal';
import React from 'react';
import ResponsiveText from './ResponsiveText';
import StanButton from './StanButton';

const CONTAIN_PADD = '3%';
const CONTAIN_BOX_SHADOW = '1px 1px 10px #777';

const TITLE_COL = Universal.WEB_BLUE;
const TITLE_PADD = '0 0 2% 0';
const TITLE_SIZE = 38;

const TEXT_COL = Universal.LIGHT_BLACK;
const TEXT_PADD = '0 0 3% 0';
const TEXT_SIZE = 24;

const BUTTON_TEXT_SIZE = 26;

const BG_COL = 'rgba(255, 255, 255, 0.95)';

const DEFAULT_TEXT_SIZE_MULT = 1;

export type InfoBoxProps = {
    title?: string;
    children: string;
    buttonText?: string;
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
            textAlign: 'center' as 'center',
            padding: CONTAIN_PADD,
            boxShadow: CONTAIN_BOX_SHADOW
        };
    };

    renderTitle = (mult: number) => {
        if (this.props.title) {
            return (
                <ResponsiveText size={TITLE_SIZE * mult} color={TITLE_COL} padding={TITLE_PADD}>
                    {this.props.title}
                </ResponsiveText>
            );
        }
    };

    renderButton = () => {
        if (this.props.buttonText) {
            return (
                <StanButton
                    title={this.props.buttonText}
                    onClick={() => console.log('clicked')}
                    textSize={BUTTON_TEXT_SIZE}
                />
            );
        }
    };

    render = () => {
        const mult = this.props.textSizeMultiplier || DEFAULT_TEXT_SIZE_MULT;
        return (
            <div style={this.containerStyle()}>
                {this.renderTitle(mult)}
                <ResponsiveText size={TEXT_SIZE * mult} color={TEXT_COL} padding={TEXT_PADD}>
                    {this.props.children}
                </ResponsiveText>
                {this.renderButton()}
            </div>
        );
    };
}
