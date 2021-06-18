import Responsive from '../super-comps/Responsive';

const TEXT_PADD = '12px 0';
const TEXT_MARGIN = '0';

type ResponsiveTextProps = {
    text: string;
    size: number;
    family: string;
    color: string;
};

export default class ResponsiveText extends Responsive<ResponsiveTextProps> {
    props: ResponsiveTextProps;

    constructor(props: ResponsiveTextProps) {
        super(props);
        this.props = props;
    }

    componentWillReceiveProps = (props: ResponsiveTextProps) => {
        this.props = {
            ...this.props,
            color: props.color
        };
    };

    style = () => {
        const st = this.state;

        return {
            fontFamily: this.props.family,
            fontSize: `${this.props.size * st.winWidth * 0.0004}px`,
            color: this.props.color,
            padding: TEXT_PADD,
            margin: TEXT_MARGIN
        };
    };

    render() {
        return <p style={this.style()}>{this.props.text}</p>;
    }
}
