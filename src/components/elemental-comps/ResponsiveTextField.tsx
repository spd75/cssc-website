import Responsive from '../super-comps/Responsive';

const DEFAULT_TEXT_FAMILY = 'Arvo';
const DEFAULT_TEXT_COL = '#505050';
const DEFAULT_BASE_PADD = 15;

type TextFieldProps = {
    id: string;
    multiLine: boolean;
    placeholder: string;
    size: number;
    width: string;
    height: string;
};

export default class ResponsiveTextField extends Responsive<TextFieldProps> {
    props: TextFieldProps;

    constructor(props: TextFieldProps) {
        super(props);
        this.props = props;
    }

    inputStyle = () => ({
        fontFamily: DEFAULT_TEXT_FAMILY,
        fontSize: `${this.props.size * this.state.winWidth * 0.0004}px`,
        color: DEFAULT_TEXT_COL,
        width: this.props.width,
        padding: `${DEFAULT_BASE_PADD * this.state.winWidth * 0.0004}px`,
        borderRadius: '0',
        borderWidth: `${3 * this.state.winWidth * 0.0004}px`
    });

    render = () => {
        const id = this.props.id;
        const ph = this.props.placeholder + '...';

        if (this.props.multiLine) {
            return <textarea style={this.inputStyle()} name={id} placeholder={ph} />;
        }
        return <input style={this.inputStyle()} name={id} placeholder={ph} />;
    };
}
