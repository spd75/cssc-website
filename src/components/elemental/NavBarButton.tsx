import * as CommonStyles from '../styles/common-styles';
import Hoverable from '../super-comps/Hoverable';
import ResponsiveText from './ResponsiveText';

const BUTTON_PRIMARY_COL = '#fff';
const BUTTON_SECOND_COL = '#505050';
const BUTTON_HOVER_COL = '#aaa';
const BUTTON_HEIGHT = '50%';

const TEXT_SIZE = 22;
const TEXT_FONT_FAMILY = 'Arvo';

type StanButtonProps = {
    title: string;
    onClick: () => void;
};

export default class StanButton extends Hoverable<StanButtonProps> {
    defaultLateralPadding = '12px';
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
            backgroundColor: !st.hovering ? BUTTON_PRIMARY_COL : BUTTON_HOVER_COL,
            height: BUTTON_HEIGHT,
            cursor: st.cursor,
            border: 'none',
            flexGrow: 2
        };
    };

    render = () => {
        return (
            <button
                style={this.buttonStyle()}
                onClick={this.props.onClick}
                onMouseEnter={this.setHovered}
                onMouseLeave={this.setUnhovered}
            >
                <ResponsiveText
                    text={this.props.title}
                    size={TEXT_SIZE}
                    family={TEXT_FONT_FAMILY}
                    color={BUTTON_SECOND_COL}
                />
            </button>
        );
    };
}
