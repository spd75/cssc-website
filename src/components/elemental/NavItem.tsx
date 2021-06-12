import Hoverable from '../super-comps/Hoverable';

type NavItemProps = {
    text: string;
    textPadding: number;
    onClick: () => void;
};

export default class NavItem extends Hoverable<NavItemProps> {
    constructor(props: NavItemProps) {
        super(props);

        this.state = {
            text: props.text,
            textPadding: props.textPadding,
            onClick: props.onClick
        };
    }

    outerStyle = () => {
        const st = this.state;
        return {
            backgroundColor: !st.hovering ? '#fff' : '#48A8DE',
            opacity: '0.9',
            width: 'max-content',
            padding: `${st.textPadding}px`,
            cursor: !st.hovering ? 'auto' : 'pointer'
        };
    };

    textStyle = () => {
        const st = this.state;
        return {
            fontFamily: 'Arvo',
            fontSize: '19px',
            color: !st.hovering ? '#505050' : '#fff',
            margin: '0'
        };
    };

    render = () => {
        const st = this.state;

        return (
            <div
                style={this.outerStyle()}
                onClick={st.onClick}
                onMouseEnter={this.setHovered}
                onMouseLeave={this.setUnhovered}
            >
                <p style={this.textStyle()}>{st.text}</p>
            </div>
        );
    };
}
