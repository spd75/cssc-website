import Responsive from '../super-comps/Responsive';

const DEFAULT_TEXT_FAMILY = 'Arvo';
const DEFAULT_TEXT_COL = '#505050';
const DEFAULT_BASE_PADD = 16;

type TextFieldProps = {
    placeholder: string;
    onChange: (event: any) => void;
    size: number;
    width?: string;
    height?: string;
    password?: boolean;
    margins?: string;
};

export default class ResponsiveTextField extends Responsive<TextFieldProps> {
    props: TextFieldProps;

    constructor(props: TextFieldProps) {
        super(props);
        this.props = props;
    }

    inputStyle = () => {
        const stanPadd = `${DEFAULT_BASE_PADD * this.state.winWidth * 0.0004}px`;

        return {
            boxSizing: 'border-box' as 'border-box',
            fontFamily: DEFAULT_TEXT_FAMILY,
            fontSize: `${this.props.size * this.state.winWidth * 0.0004}px`,
            color: DEFAULT_TEXT_COL,
            padding: `${stanPadd} ${stanPadd} ${this.props.height || stanPadd} ${stanPadd}`,
            margin: `${this.props.margins || 0}`,
            width: this.props.width || 'auto',
            borderRadius: '0',
            borderWidth: `${3 * this.state.winWidth * 0.0004}px`
        };
    };

    render = () => {
        if (this.props.height) {
            return (
                <textarea
                    style={this.inputStyle()}
                    placeholder={this.props.placeholder + '...'}
                    onChange={this.props.onChange}
                />
            );
        }
        return (
            <input
                type={this.props.password ? 'password' : 'text'}
                style={this.inputStyle()}
                placeholder={this.props.placeholder + '...'}
                onChange={this.props.onChange}
            />
        );
    };
}
