import * as CommonStyles from '../styles/common-styles';
import React from 'react';
import NavBar from './NavBar';
import SlideshowIndicator from './sub-comps/SlideshowIndicator';

const NAV_LINKS = ['Club News', 'Trips', 'Equipment', 'About Us', 'Contact Us'];
const ON_CLICKS = [
    () => console.log('Club news'),
    () => console.log('Trips'),
    () => console.log('Equipment'),
    () => console.log('About Us'),
    () => console.log('Contact Us')
];

type HeroImageProps = {
    path: string[];
};

export default class HeroHeader extends React.Component<HeroImageProps, any> {
    props: HeroImageProps;

    constructor(props: HeroImageProps) {
        super(props);
        this.props = props;

        const interval = window.setInterval(this.switchImage, 5000);

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
        return (
            <div style={this.imgStyle()}>
                <NavBar navLinks={NAV_LINKS} onClicks={ON_CLICKS} />
                <SlideshowIndicator totalNum={this.props.path.length} pointer={st.pointer} />
            </div>
        );
    };
}
