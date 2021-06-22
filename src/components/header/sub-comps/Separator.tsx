import React from 'react';

const SEPARATOR_WIDTH = '1px';
const SEPARATOR_COLOR = '#000';
const SEPARATOR_OPACITY = '0.12';

type SeparatorProps = {
    offset: number;
};

export default class Separator extends React.Component<SeparatorProps, any> {
    props: SeparatorProps;

    constructor(props: SeparatorProps) {
        super(props);
        this.props = props;
    }

    separatorStyle = () => ({
        width: SEPARATOR_WIDTH,
        backgroundColor: SEPARATOR_COLOR,
        margin: `${this.props.offset}% 0`,
        opacity: SEPARATOR_OPACITY
    });

    render = () => {
        return <div style={this.separatorStyle()} />;
    };
}
