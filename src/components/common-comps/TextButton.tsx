import * as CommonStyles from '../styles/common-styles';
import React from 'react';
import ResponsiveText from './ResponsiveText';
import StanButton from './StanButton';

const DEFAULT_CONTAIN_PADD = '7% 15%';

const TEXT_SIZE = 58;
const TEXT_PADD = '0 0 4% 0';

const BUTTON_TEXT_SIZE = 28;
const BUTTON_PADD = '1.5% 4%';

export type TextButtonProps = {
    children: string;
    buttonTitle: string;
    size?: number;
    buttonTextSize?: number;
    padding?: string;
    textPadding?: string;
    buttonPadding?: string;
    color?: string;
};

export default class TextButton extends React.Component<TextButtonProps, any> {
    props: TextButtonProps;

    constructor(props: TextButtonProps) {
        super(props);
        this.props = props;
    }

    containerStyle = () => ({
        ...CommonStyles.FlexCC,
        flexDirection: 'column' as 'column',
        textAlign: 'center' as 'center',
        padding: this.props.padding || DEFAULT_CONTAIN_PADD
    });

    render = () => {
        return (
            <div style={this.containerStyle()}>
                <ResponsiveText
                    size={this.props.size || TEXT_SIZE}
                    padding={this.props.textPadding || TEXT_PADD}
                    color={this.props.color}
                >
                    {this.props.children}
                </ResponsiveText>
                <StanButton
                    title={this.props.buttonTitle}
                    onClick={() => console.log('hi')}
                    textSize={this.props.buttonTextSize || BUTTON_TEXT_SIZE}
                    padding={this.props.buttonPadding || BUTTON_PADD}
                />
            </div>
        );
    };
}
