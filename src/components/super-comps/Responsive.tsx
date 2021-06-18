import React from 'react';

const INIT_WINDOW_WIDTH = 0;

export default class Responsive<T> extends React.Component<T, any> {
    constructor(props: T) {
        super(props);
        this.state = {
            winWidth: INIT_WINDOW_WIDTH
        };
    }

    componentDidMount = () => {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    };

    componentWillUnmount = () => window.removeEventListener('resize', this.updateWindowDimensions);

    updateWindowDimensions = () => {
        this.setState({ winWidth: window.innerWidth });
        console.log(this.state.winWidth);
    };
}
