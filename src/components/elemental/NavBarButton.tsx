import * as CommonStyles from '../styles/common-styles';
import Hoverable from '../super-comps/Hoverable';
import ResponsiveText from './ResponsiveText';

const BUTTON_PRIMARY_COL = '#fff';
const BUTTON_HOVER_COL = '#aaa';
const BUTTON_HEIGHT = '50%';

const TEXT_PRIM_COL = '#505050';
const TEXT_HOVER_COL = '#000';
const TEXT_SIZE = 22;

type StanButtonProps = {
    children: any;
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
        const st = this.state;
        const color = !st.hovering ? TEXT_PRIM_COL : TEXT_HOVER_COL;

        return (
            <button
                style={this.buttonStyle()}
                onClick={this.props.onClick}
                onMouseEnter={this.setHovered}
                onMouseLeave={this.setUnhovered}
            >
                <ResponsiveText size={TEXT_SIZE} color={color}>
                    {this.props.children}
                </ResponsiveText>
            </button>
        );
    };
}
