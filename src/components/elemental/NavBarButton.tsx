import Hoverable from '../super-comps/Hoverable';
import ResponsiveText from './ResponsiveText';

type StanButtonProps = {
    title: string;
    onClick: () => void;
};

export default class StanButton extends Hoverable<StanButtonProps> {
    defaultLateralPadding = '12px';

    constructor(props: StanButtonProps) {
        super(props);

        this.state = {
            title: props.title,
            primColor: '#fff',
            secColor: '#505050',
            hoverColor: '#aaa',
            onClick: props.onClick
        };
    }

    buttonStyle = (width: number): any => {
        const st = this.state;

        return {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: !st.hovering ? st.primColor : st.hoverColor,
            cursor: !st.hovering ? 'auto' : 'pointer',
            border: 'none',
            flexGrow: 2,
            height: '50%'
        };
    };

    render = () => {
        return (
            <button
                style={this.buttonStyle(150)}
                onClick={this.state.onClick}
                onMouseEnter={this.setHovered}
                onMouseLeave={this.setUnhovered}
            >
                <ResponsiveText text={this.state.title} size={22} family="Arvo" color="#505050" />
            </button>
        );
    };
}
