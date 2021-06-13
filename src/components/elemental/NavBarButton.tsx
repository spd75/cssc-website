import Hoverable from '../super-comps/Hoverable';

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
            backgroundColor: !st.hovering ? st.primColor : st.hoverColor,
            cursor: !st.hovering ? 'auto' : 'pointer',
            border: 'none',
            flexGrow: 2,
            height: '50%'
        };
    };

    textStyle = (fontSize: number): object => {
        return {
            fontSize: `${fontSize}px`,
            color: this.state.secColor,
            margin: '0',
            fontFamily: 'Arvo'
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
                <p style={this.textStyle(18)}>{this.state.title}</p>
            </button>
        );
    };
}
