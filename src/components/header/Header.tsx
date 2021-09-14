import * as CommonStyles from '../styles/common-styles';
import React, { Ref } from 'react';
import NavBar from './NavBar';
import SlideshowIndicator from './sub-comps/SlideshowIndicator';

type HeroImageProps = {
    path: string[];
    navLinks: string[];
    onClicks: (() => void)[];
};

export default class HeroHeader extends React.Component<HeroImageProps, any> {
    props: HeroImageProps;

    constructor(props: HeroImageProps) {
        super(props);
        this.props = props;

        setInterval(this.switchImage, 5000);
        this.state = {
            pointer: 0
        };
    }

    switchImage = async () => {
        const prevPointer = this.state.pointer;
        const maxPointer = this.props.path.length;
        this.setState({
            pointer: (prevPointer + 1) % maxPointer
        });
    };

    imgStyle = () => {
        const st = this.state;
        return {
            ...CommonStyles.ImageCover(this.props.path[st.pointer]),
            paddingTop: '50%',
            paddingBottom: '1.5%'
        };
    };

    render = () => {
        const st = this.state;
        const slideShowIndicator =
            this.props.path.length > 1 ? (
                <SlideshowIndicator
                    totalNum={this.props.path.length}
                    pointer={st.pointer}
                    size="0.5%"
                    separation="0 0.5%"
                    color="#48A8DE"
                    boxShadow="1px 1px 4px #888"
                />
            ) : null;

        return (
            <div style={this.imgStyle()}>
                <NavBar navLinks={this.props.navLinks} onClicks={this.props.onClicks} />
                {slideShowIndicator}
            </div>
        );
    };
}
