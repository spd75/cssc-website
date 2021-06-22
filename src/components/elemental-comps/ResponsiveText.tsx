import Responsive from '../super-comps/Responsive';

const DEFAULT_TEXT_FAMILY = 'ARVO';
const DEFAULT_TEXT_COL = '#505050';

const TEXT_PADD = '12px 0';
const TEXT_MARGIN = '0';

type ResponsiveTextProps = {
    children: string;
    size: number;
    family?: string;
    color?: string;
    padding?: string;
    bold?: boolean;
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
            fontFamily: this.props.family || DEFAULT_TEXT_FAMILY,
            fontSize: `${this.props.size * st.winWidth * 0.0004}px`,
            fontWeight: !this.props.bold ? ('normal' as 'normal') : ('bold' as 'bold'),
            color: this.props.color || DEFAULT_TEXT_COL,
            padding: this.props.padding || TEXT_PADD,
            margin: TEXT_MARGIN
        };
    };

    render() {
        return <p style={this.style()}>{this.props.children}</p>;
    }
}
