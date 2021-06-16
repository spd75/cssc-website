import Hoverable from '../super-comps/Hoverable';
import ResponsiveText from './ResponsiveText';

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
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexGrow: 1,
            backgroundColor: !st.hovering ? '#fff' : '#48A8DE',
            opacity: '0.9',
            padding: `auto`,
            cursor: !st.hovering ? 'auto' : 'pointer'
        };
    };

    textStyle = () => {
        const st = this.state;
        return {
            color: !st.hovering ? '#505050' : '#fff'
        };
    };

    render = () => {
        const st = this.state;
        console.log('hi');
        console.log(st.hovering);

        return (
            <div
                style={this.outerStyle()}
                onClick={st.onClick}
                onMouseEnter={this.setHovered}
                onMouseLeave={this.setUnhovered}
            >
                <ResponsiveText
                    text={st.text}
                    size={28}
                    family="Arvo"
                    color={!st.hovering ? '#505050' : '#fff'}
                />
            </div>
        );
    };
}
