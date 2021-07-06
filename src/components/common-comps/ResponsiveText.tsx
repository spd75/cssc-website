import Responsive from '../super-comps/Responsive';
import React from 'react';
import WWC from '../../windowWidthContext';

const DEFAULT_TEXT_FAMILY = 'Arvo';
const DEFAULT_TEXT_COL = '#505050';

const TEXT_PADD = '12px 0';
const TEXT_MARGIN = '0';

export type ResponsiveTextProps = {
    children: any;
    size: number;
    family?: string;
    color?: string;
    padding?: string;
    bold?: boolean;
    underline?: boolean;
    onClick?: () => void;
};

// export default class ResponsiveText extends Responsive<ResponsiveTextProps> {
//     props: ResponsiveTextProps;

//     constructor(props: ResponsiveTextProps) {
//         super(props);
//         this.props = props;
//     }

//     componentWillReceiveProps = (props: ResponsiveTextProps) => {
//         this.props = {
//             ...this.props,
//             color: props.color
//         };
//     };

//     style = () => {
//         const st = this.state;

//         return {
//             fontFamily: this.props.family || DEFAULT_TEXT_FAMILY,
//             fontSize: `${this.props.size * st.winWidth * 0.0004}px`,
//             fontWeight: !this.props.bold ? ('normal' as 'normal') : ('bold' as 'bold'),
//             color: this.props.color || DEFAULT_TEXT_COL,
//             padding: this.props.padding || TEXT_PADD,
//             margin: TEXT_MARGIN
//         };
//     };

//     render() {
//         return <p style={this.style()}>{this.props.children}</p>;
//     }
// }

export default class ResponsiveText extends React.Component<ResponsiveTextProps, any> {
    static contextType = WWC;
    props: ResponsiveTextProps;

    constructor(props: ResponsiveTextProps) {
        super(props);
        this.props = props;
    }

    componentWillReceiveProps = (props: ResponsiveTextProps) => {
        this.props = {
            ...this.props,
            color: props.color
        };
    };

    style = () => {
        const st = this.state;
        const props = this.props;

        return {
            fontFamily: props.family || DEFAULT_TEXT_FAMILY,
            fontSize: `${props.size * this.context * 0.0004}px`,
            fontWeight: !props.bold ? ('normal' as 'normal') : ('bold' as 'bold'),
            textDecoration: !props.underline ? 'none' : 'underline',
            color: props.color || DEFAULT_TEXT_COL,
            padding: props.padding || TEXT_PADD,
            margin: TEXT_MARGIN
        };
    };

    render() {
        const onClick = this.props.onClick;
        if (onClick) {
            return (
                <p style={this.style()} onClick={onClick}>
                    {this.props.children}
                </p>
            );
        }
        return <p style={this.style()}>{this.props.children}</p>;
    }
}
