import * as CommonStyles from '../styles/common-styles';
import IconImage from '../elemental/IconImage';
import NavBarButton from '../elemental/NavBarButton';
import React from 'react';

// Icons
import { FaFacebook } from 'react-icons/fa';
import { RiInstagramLine } from 'react-icons/ri';

const BAR_COL = '#636363';
const BAR_WIDTH = '25%';

const INNER_HEIGHT = '100%';
const INNER_WIDTH = 'max-content';
const INNER_MARGIN = '0% 4%';
const INNGER_COL_GAP = '3%';

const ICON_DIV_HEIGHT = '100%';
const ICON_DIV_WIDTH = 'max-content';
const ICON_COL_GAP = '8%';

export default class EnderBar extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    containerStyle = () => {
        return {
            ...CommonStyles.FlexCC,
            backgroundColor: BAR_COL,
            width: BAR_WIDTH,
            flexGrow: 2
        };
    };

    innerContainerStyle = () => {
        return {
            ...CommonStyles.FlexCC,
            ...CommonStyles.HeightWidth(INNER_HEIGHT, INNER_WIDTH),
            margin: INNER_MARGIN,
            flexGrow: 2,
            columnGap: INNGER_COL_GAP
        };
    };

    iconDivStyle = () => {
        return {
            ...CommonStyles.FlexCC,
            ...CommonStyles.HeightWidth(ICON_DIV_HEIGHT, ICON_DIV_WIDTH),
            columnGap: ICON_COL_GAP
        };
    };

    render = () => {
        return (
            <div style={this.containerStyle()}>
                <div style={this.innerContainerStyle()}>
                    <NavBarButton
                        title="Become a Member"
                        onClick={() => console.log('sup woadie')}
                    />
                    <NavBarButton title="Login" onClick={() => console.log('sup woadie')} />

                    <div style={this.iconDivStyle()}>
                        <IconImage
                            icon={RiInstagramLine}
                            color={BAR_COL}
                            hoverColor={'#bbb'}
                            bgColor={'#fff'}
                            margin="10%"
                        />
                        <IconImage icon={FaFacebook} color={'#fff'} hoverColor={'#bbb'} />
                    </div>
                </div>
            </div>
        );
    };
}
