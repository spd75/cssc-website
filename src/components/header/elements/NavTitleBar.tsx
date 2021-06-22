import * as CommonStyles from '../../styles/common-styles';
import React from 'react';
import { ReactComponent as Logo } from '../../../assets/Logo.svg';

const CONTAIN_BG_COL = '#48A8DE';
const CONTAIN_WIDTH = '10%';

const LOGO_HEIGHT = 'auto';
const LOGO_WIDTH = '70%';
const LOGO_MARGIN = '9% 0';

export default class NavTitleBar extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    containerStyle = () => {
        return {
            ...CommonStyles.FlexCC,
            backgroundColor: CONTAIN_BG_COL,
            width: CONTAIN_WIDTH,
            flexGrow: 1
        };
    };

    logoStyle = () => {
        return {
            ...CommonStyles.HeightWidth(LOGO_HEIGHT, LOGO_WIDTH),
            margin: LOGO_MARGIN
        };
    };

    render = () => {
        return (
            <div style={this.containerStyle()}>
                <Logo style={this.logoStyle()} />
            </div>
        );
    };
}
