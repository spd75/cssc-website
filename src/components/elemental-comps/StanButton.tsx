import * as CommonStyles from '../styles/common-styles';
import Hoverable from '../super-comps/Hoverable';

const BUTTON_PRIM_COL = '#48A8DE';
const BUTTON_HOVER_COL = '#4084CB';
const DEFAULT_LAT_PADD = '12px';

const TEXT_PRIM_COL = '#fff';
const TEXT_SIZE = '12px';
const TEXT_FONT_FAMILY = 'Arvo';

type StanButtonProps = {
    title: string;
    onClick: () => void;
    latPadding?: number;
};

export default class StanButton extends Hoverable<StanButtonProps> {
    props: StanButtonProps;

    constructor(props: StanButtonProps) {
        super(props);
        this.props = props;
        this.state = {};
    }

    buttonStyle = () => {
        const st = this.state;

        return {
            ...CommonStyles.FlexCC,
            backgroundColor: !st.hovering ? BUTTON_PRIM_COL : BUTTON_HOVER_COL,
            padding: `8px ${this.props.latPadding || DEFAULT_LAT_PADD}`,
            border: 'none',
            cursor: st.cursor
        };
    };

    textStyle = () => ({
        fontSize: `${TEXT_SIZE}px`,
        color: TEXT_PRIM_COL,
        margin: '0',
        fontFamily: TEXT_FONT_FAMILY
    });

    render = () => {
        return (
            <button
                style={this.buttonStyle()}
                onClick={this.props.onClick}
                onMouseEnter={this.setHovered}
                onMouseLeave={this.setUnhovered}
            >
                <p style={this.textStyle()}>{this.props.title}</p>
            </button>
        );
    };
}
