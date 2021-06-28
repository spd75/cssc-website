import * as CommonStyles from '../styles/common-styles';
import React from 'react';
import ResponsiveText from '../elemental-comps/ResponsiveText';
import StanButton from '../elemental-comps/StanButton';

type TextButtonProps = {
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
        padding: '7% 8%'
    });

    render = () => {
        return (
            <div style={this.containerStyle()}>
                <ResponsiveText size={74} padding="0 0 4% 0">
                    {this.props.children}
                </ResponsiveText>
                <StanButton
                    title={this.props.buttonTitle}
                    onClick={() => console.log('hi')}
                    textSize={40}
                />
            </div>
        );
    };
}
