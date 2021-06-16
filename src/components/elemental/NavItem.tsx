import * as CommonStyles from '../styles/common-styles';
import Hoverable from '../super-comps/Hoverable';
import ResponsiveText from './ResponsiveText';

const ITEM_PRIM_COL = '#fff';
const ITEM_HOVER_COL = '#48A8DE';
const ITEM_OPACITY = '0.9';

const TEXT_PRIM_COL = '#505050';
const TEXT_HOVER_COL = '#fff';
const TEXT_SIZE = 28;
const TEXT_FONT_FAMILY = 'Arvo';

type NavItemProps = {
    text: string;
    textPadding: number;
    onClick: () => void;
};

export default class NavItem extends Hoverable<NavItemProps> {
    props: NavItemProps;

    constructor(props: NavItemProps) {
        super(props);
        this.props = props;
        this.state = {};
    }

    outerStyle = () => {
        const st = this.state;
        return {
            ...CommonStyles.FlexCC,
            backgroundColor: !st.hovering ? ITEM_PRIM_COL : ITEM_HOVER_COL,
            opacity: ITEM_OPACITY,
            cursor: st.cursor,
            flexGrow: 1
        };
    };

    render = () => {
        const st = this.state;
        return (
            <div
                style={this.outerStyle()}
                onClick={this.props.onClick}
                onMouseEnter={this.setHovered}
                onMouseLeave={this.setUnhovered}
            >
                <ResponsiveText
                    text={this.props.text}
                    size={TEXT_SIZE}
                    family={TEXT_FONT_FAMILY}
                    color={!st.hovering ? TEXT_PRIM_COL : TEXT_HOVER_COL}
                />
            </div>
        );
    };
}
