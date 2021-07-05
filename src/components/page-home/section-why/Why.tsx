import * as CommonStyles from '../../styles/common-styles';
import * as Universal from '../../../universal';
import ContainImage from '../../common-comps/ContainImage';
import { InfoBoxProps } from '../../common-comps/InfoBox';
import React from 'react';
import ResponsiveText from '../../common-comps/ResponsiveText';

const CONTAIN_BG_COL = '#F0F0F0';
const CONTAIN_PADD = '4% 1% 2.5% 1%';

const VERTICAL_CONTAIN_WIDTH = '130%';
const VERTICAL_PADD_RIGHT = '0.5%';

const FILLER_HEIGHT = '1%';

const TITLE_SIZE = 52;
const TITLE_PADD = '0 0 3% 0';

const FIRST_CI_PADD = '30% 30% 3% 5%';
const SECOND_CI_PADD = '30% 8% 3% 8%';
const THIRD_CI_PADD = '33% 8% 0 8%';

type WhyProps = {
    data: InfoBoxProps[];
    imgPaths: string[];
};

export default class Why extends React.Component<WhyProps, any> {
    props: WhyProps;

    constructor(props: WhyProps) {
        super(props);

        Universal.validateLength(props.data, 3, 'Data', 'Why');
        Universal.validateLength(props.imgPaths, 3, 'imgPaths', 'Why');
        this.props = props;
    }

    containerStyle = () => {
        return {
            backgroundColor: CONTAIN_BG_COL,
            padding: CONTAIN_PADD,
            textAlign: 'center' as 'center'
        };
    };

    verticalContainImgStyle = () => ({
        ...CommonStyles.FlexCS,
        flexDirection: 'column' as 'column',
        width: VERTICAL_CONTAIN_WIDTH,
        paddingRight: VERTICAL_PADD_RIGHT
    });

    horizontalContainImgStyle = () => ({
        ...CommonStyles.FlexCS,
        flexDirection: 'row' as 'row'
    });

    filler = () => ({
        paddingBottom: FILLER_HEIGHT
    });

    render = () => {
        const data = this.props.data;
        const images = this.props.imgPaths;

        return (
            <div style={this.containerStyle()}>
                <ResponsiveText size={TITLE_SIZE} padding={TITLE_PADD}>
                    Why Become a Member?
                </ResponsiveText>
                <div style={this.horizontalContainImgStyle()}>
                    <div style={this.verticalContainImgStyle()}>
                        <ContainImage imgPath={images[0]} padding={FIRST_CI_PADD} data={data[0]} />
                        <span style={this.filler()} />
                        <ContainImage imgPath={images[1]} padding={SECOND_CI_PADD} data={data[1]} />
                    </div>
                    <ContainImage imgPath={images[2]} padding={THIRD_CI_PADD} data={data[2]} />
                </div>
            </div>
        );
    };
}
