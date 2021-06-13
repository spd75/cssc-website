import Hoverable from '../super-comps/Hoverable';

type StanButtonProps = {
    title: string;
    traditional: boolean;
    onClick: () => void;
    latPadding?: number;
};

export default class StanButton extends Hoverable<StanButtonProps> {
    defaultLateralPadding = '12px';

    constructor(props: StanButtonProps) {
        super(props);

        this.state = {
            title: props.title,
            primColor: props.traditional ? '#48A8DE' : '#fff',
            secColor: props.traditional ? '#fff' : '#505050',
            hoverColor: props.traditional ? '#4084CB' : '#aaa',
            onClick: props.onClick,
            latPadding: props.latPadding || this.defaultLateralPadding
        };
    }

    buttonStyle = (width: number): any => {
        const st = this.state;

        return {
            backgroundColor: !st.hovering ? st.primColor : st.hoverColor,
            cursor: !st.hovering ? 'auto' : 'pointer',
            border: 'none',
            padding: `8px ${this.defaultLateralPadding}`
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
                <p style={this.textStyle(12)}>{this.state.title}</p>
            </button>
        );
    };
}
