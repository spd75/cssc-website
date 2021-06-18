import Responsive from '../super-comps/Responsive';
import NavBar from './NavBar';

const IMG_RATIO = 0.5;

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

export default class HeroHeader extends Responsive<HeroImageProps> {
    props: HeroImageProps;

    constructor(props: HeroImageProps) {
        super(props);
        this.props = props;

        const interval = window.setInterval(this.switchImage, 5000);

        this.state = {
            pointer: 0
        };
    }

    switchImage = () => {
        const prevPointer = this.state.pointer;
        const maxPointer = this.props.path.length;
        this.setState({
            pointer: (prevPointer + 1) % maxPointer
        });
    };

    imgStyle = () => {
        const st = this.state;
        return {
            backgroundImage: `url(${this.props.path[st.pointer]})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            width: `${st.winWidth}px`,
            height: `${st.winWidth * IMG_RATIO}px`
        };
    };

    render = () => {
        return (
            <div style={this.imgStyle()}>
                <NavBar navLinks={NAV_LINKS} onClicks={ON_CLICKS} />
            </div>
        );
    };
}
