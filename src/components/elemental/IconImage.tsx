import React from 'react';
import Icons from 'react-icons';
import HoverableComponent from '../super-comps/Hoverable';

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
        const props = this.props;
        const baseStyle = {
            display: 'flex',
            alignItems: 'center',
            height: '50%',
            width: 'auto',
            borderRadius: '50%',
            cursor: !st.hovering ? 'auto' : 'pointer'
        };

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

    iconStyle = () => {
        const st = this.state;
        const props = this.props;
        var baseStyle = {
            height: '100%',
            width: 'auto',
            borderRadius: '50%',
            cursor: !st.hovering ? 'auto' : 'pointer',
            margin: this.props.margin || 'auto'
        };

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
