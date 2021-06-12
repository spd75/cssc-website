import React from 'react';

type SeparatorProps = {
    offset: number;
};

export default class Separator extends React.Component<SeparatorProps, any> {
    constructor(props: SeparatorProps) {
        super(props);

        this.state = {
            offset: props.offset
        };
    }

    separatorStyle = () => {
        const st = this.state;

        return {
            width: '1px',
            margin: `${st.offset}px 0`,
            backgroundColor: '#000',
            opacity: '0.12'
        };
    };

    render = () => {
        return <div style={this.separatorStyle()} />;
    };
}
