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

    render = () => {
        return (
            <div>
                <ResponsiveText size={70}>{this.props.children}</ResponsiveText>
                <StanButton
                    title={this.props.buttonTitle}
                    onClick={() => console.log('hi')}
                    textSize={40}
                />
            </div>
        );
    };
}
