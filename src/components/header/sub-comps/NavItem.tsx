import * as CommonStyles from '../../styles/common-styles';
import Hoverable from '../../super-comps/Hoverable';
import ResponsiveText from '../../common-comps/ResponsiveText';

const ITEM_PRIM_COL = 'rgba(0, 0, 0, 0.0)';
const ITEM_HOVER_COL = 'rgba(72, 168, 222, 1.0)';

const TEXT_PRIM_COL = '#505050';
const TEXT_HOVER_COL = '#fff';
const TEXT_SIZE = 28;

type NavItemProps = {
    children: string;
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
            cursor: st.cursor,
            flexGrow: 1
        };
    };

    render = () => {
        const st = this.state;
        const color = !st.hovering ? TEXT_PRIM_COL : TEXT_HOVER_COL;

        return (
            <div
                style={this.outerStyle()}
                onClick={this.props.onClick}
                onMouseEnter={this.setHovered}
                onMouseLeave={this.setUnhovered}
            >
                <ResponsiveText size={TEXT_SIZE} color={color}>
                    {this.props.children}
                </ResponsiveText>
            </div>
        );
    };
}
