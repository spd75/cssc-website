import React from 'react';
import * as CommonStyles from '../styles/common-styles';

const PointerExceededTotal = new Error('Slideshow pointer exceeded total number of elements.');
PointerExceededTotal.name = 'PointerExceededTotal';

// TODO: ADD ERROR, FIX CSS

type SlideShowIndicatorProps = {
    totalNum: number;
    pointer: number;
};

export default class SlideshowIndicator extends React.Component<SlideShowIndicatorProps, any> {
    totalNum: number;

    constructor(props: SlideShowIndicatorProps) {
        super(props);

        this.totalNum = props.totalNum;
        this.state = {
            pointer: props.pointer
        };
    }

    componentWillReceiveProps = (props: SlideShowIndicatorProps) => {
        this.setState({
            pointer: props.pointer
        });
    };

    containerStyle = () => CommonStyles.FlexCC;

    indicatorStyle = (isCurrent: boolean) => ({
        height: '0',
        width: '0.5%',
        paddingBottom: '0.5%',
        margin: '0 10px',
        backgroundColor: !isCurrent ? '#fff' : '#48A8DE',
        borderRadius: '50%',
        boxShadow: '1px 1px 4px #000'
    });

    renderIndicators = () => {
        var indicators = [];
        const st = this.state;
        for (var i = 0; i < this.totalNum; i++) {
            indicators.push(<span style={this.indicatorStyle(i == st.pointer)} />);
        }
        return indicators;
    };

    render = () => {
        return <div style={this.containerStyle()}>{this.renderIndicators()}</div>;
    };
}
