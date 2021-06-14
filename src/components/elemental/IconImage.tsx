import React from 'react';
import Icons from 'react-icons';
import HoverableComponent from '../super-comps/Hoverable';

const DimensionArrayInvalid = new Error(
    'Invalid number of arguments provided for dimensions array of IconImage.'
);
DimensionArrayInvalid.name = 'DimensionArrayInvalid';

type IconImageProps = {
    icon: Icons.IconType;
    dimensions: number[];
    color: string;
    hoverColor: string;
    bgColor?: string;
};

export default class IconImage extends HoverableComponent<IconImageProps> {
    defaultBgColor = 'none';
    props: IconImageProps;

    constructor(props: IconImageProps) {
        super(props);

        if (props.dimensions.length !== 3) {
            throw DimensionArrayInvalid;
        }

        this.props = props;

        this.state = {};
    }

    iconStyle = () => {
        const st = this.state;
        const props = this.props;
        const baseStyle = {
            width: 'auto',
            height: '200%',
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

    render = () => {
        const props = this.props;
        return (
            <props.icon
                style={this.iconStyle()}
                onMouseEnter={this.setHovered}
                onMouseLeave={this.setUnhovered}
            />
        );
    };
}
