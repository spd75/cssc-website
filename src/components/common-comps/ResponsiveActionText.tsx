import Hoverable from '../super-comps/Hoverable';
import ResponsiveText, { ResponsiveTextProps } from './ResponsiveText';

type ResponsiveActionTextProps = ResponsiveTextProps & {
    primColor: string;
    hoverColor: string;
};

export default class ResponsiveActionText extends Hoverable<ResponsiveActionTextProps> {
    props: ResponsiveActionTextProps;

    constructor(props: ResponsiveActionTextProps) {
        super(props);
        this.props = props;
        this.state = {};
    }

    containStyle = () => ({
        width: 'max-content',
        cursor: this.state.cursor
    });

    getColor = () => {
        return !this.state.hovering ? this.props.primColor : this.props.hoverColor;
    };

    render() {
        const props = this.props;

        return (
            <div
                style={this.containStyle()}
                onMouseEnter={this.setHovered}
                onMouseLeave={this.setUnhovered}
            >
                <ResponsiveText
                    size={props.size}
                    color={this.getColor()}
                    family={props.family}
                    padding={props.padding}
                    bold={props.bold}
                    underline={props.underline}
                    onClick={props.onClick}
                >
                    {props.children}
                </ResponsiveText>
            </div>
        );
    }
}
