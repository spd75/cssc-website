import * as CommonStyles from '../styles/common-styles';
import Icons from 'react-icons';
import HoverableComponent from '../super-comps/Hoverable';

const BORDER_RADIUS = '50%';

const CONTAIN_HEIGHT = '50%';
const CONTAIN_WIDTH = 'auto';

const ICON_HEIGHT = '100%';
const ICON_WIDTH = 'auto';

const DimensionArrayInvalid = new Error(
    'Invalid number of arguments provided for dimensions array of IconImage.'
);
DimensionArrayInvalid.name = 'DimensionArrayInvalid';

type IconImageProps = {
    icon: Icons.IconType;
    color: string;
    hoverColor: string;
    bgColor?: string;
    margin?: string;
};

export default class IconImage extends HoverableComponent<IconImageProps> {
    defaultBgColor = 'none';
    props: IconImageProps;

    constructor(props: IconImageProps) {
        super(props);
        this.props = props;
        this.state = {};
    }

    containerStyle = () => {
        const st = this.state;

        const baseStyle = {
            ...CommonStyles.FlexCC,
            ...CommonStyles.HeightWidth(CONTAIN_HEIGHT, CONTAIN_WIDTH),
            borderRadius: BORDER_RADIUS,
            cursor: st.cursor
        };
        return this.styleWithColors(baseStyle);
    };

    iconStyle = () => {
        const st = this.state;
        const props = this.props;

        var baseStyle = {
            ...CommonStyles.HeightWidth(ICON_HEIGHT, ICON_WIDTH),
            borderRadius: BORDER_RADIUS,
            cursor: st.cursor,
            margin: props.margin || 'auto'
        };
        return this.styleWithColors(baseStyle);
    };

    styleWithColors = (baseStyle: object) => {
        const st = this.state;
        const props = this.props;

        if (!props.bgColor) {
            return {
                ...baseStyle,
                color: !st.hovering ? props.color : props.hoverColor
            };
        }

        return {
            ...baseStyle,
            color: props.color,
            backgroundColor: !st.hovering ? props.bgColor : props.hoverColor
        };
    };

    render = () => {
        const props = this.props;
        return (
            <div style={this.containerStyle()}>
                <props.icon
                    style={this.iconStyle()}
                    onMouseEnter={this.setHovered}
                    onMouseLeave={this.setUnhovered}
                />
            </div>
        );
    };
}
