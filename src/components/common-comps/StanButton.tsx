import * as UniversalConstants from '../../universal/constants';
import * as CommonStyles from '../styles/common-styles';
import Hoverable from '../super-comps/Hoverable';
import ResponsiveText from './ResponsiveText';

const BUTTON_PRIM_COL = UniversalConstants.WEB_BLUE;
const BUTTON_HOVER_COL = UniversalConstants.WEB_BLUE_HOVER;
const BUTTON_WIDTH = UniversalConstants.MAX_CONTENT;
const BUTTON_HEIGHT = UniversalConstants.MAX_CONTENT;
const BUTTON_PADDING = '2% 8%';

const TEXT_PRIM_COL = UniversalConstants.WHITE;
const TEXT_SIZE = '12px';
const TEXT_FONT_FAMILY = UniversalConstants.MAIN_FONT;

type StanButtonProps = {
    title: string;
    onClick: () => void;
    textSize: number;
    padding?: string;
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
            width: BUTTON_WIDTH,
            height: BUTTON_HEIGHT,
            padding: this.props.padding || BUTTON_PADDING,
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
                <ResponsiveText size={this.props.textSize} color={TEXT_PRIM_COL} padding="0">
                    {this.props.title}
                </ResponsiveText>
            </button>
        );
    };
}
