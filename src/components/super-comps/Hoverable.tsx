import React from 'react';

export default class HoverableComponent<T1> extends React.Component<T1, any> {
    constructor(props: T1) {
        super(props);

        this.setState({
            hovering: false
        });
    }

    setHovered = () => {
        this.setState({
            hovering: true
        });
    };

    setUnhovered = () => {
        this.setState({
            hovering: false
        });
    };
}
