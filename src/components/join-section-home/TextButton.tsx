import * as CommonStyles from '../styles/common-styles';
import React from 'react';
import ResponsiveText from '../elemental-comps/ResponsiveText';
import StanButton from '../elemental-comps/StanButton';

const CONTAIN_PADD = '7% 15%';

const TEXT_SIZE = 58;
const TEXT_PADD = '0 0 4% 0';

const BUTTON_TEXT_SIZE = 28;
const BUTTON_PADD = '1.5% 4%';

export type TextButtonProps = {
    children: string;
    buttonTitle: string;
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
        padding: CONTAIN_PADD
    });

    render = () => {
        return (
            <div style={this.containerStyle()}>
                <ResponsiveText size={TEXT_SIZE} padding={TEXT_PADD}>
                    {this.props.children}
                </ResponsiveText>
                <StanButton
                    title={this.props.buttonTitle}
                    onClick={() => console.log('hi')}
                    textSize={BUTTON_TEXT_SIZE}
                    padding={BUTTON_PADD}
                />
            </div>
        );
    };
}
