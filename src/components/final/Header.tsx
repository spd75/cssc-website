import Responsive from '../super-comps/Responsive';
import NavBar from './NavBar';

const IMG_RATIO = 0.6;

const NAV_LINKS = ['Club News', 'Trips', 'Equipment', 'About Us', 'Contact Us'];
const ON_CLICKS = [
    () => console.log('Club news'),
    () => console.log('Trips'),
    () => console.log('Equipment'),
    () => console.log('About Us'),
    () => console.log('Contact Us')
];

type HeroImageProps = {
    path: string;
};

export default class HeroHeader extends Responsive<HeroImageProps> {
    props: HeroImageProps;

    constructor(props: HeroImageProps) {
        super(props);
        this.props = props;
    }

    imgStyle = () => {
        const st = this.state;
        return {
            backgroundImage: `url(${this.props.path})`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            width: `${st.winWidth}px`,
            height: `${st.winWidth * IMG_RATIO}px`
        };
    };

    render = () => {
        // return <img src={this.props.path} style={this.imgStyle()} />;
        return (
            <div style={this.imgStyle()}>
                <NavBar navLinks={NAV_LINKS} onClicks={ON_CLICKS} />
            </div>
        );
    };
}
