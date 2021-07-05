import * as CommonStyles from '../../styles/common-styles';
import ContainImage from '../../common-comps/ContainImage';
import { InfoBoxProps } from '../../common-comps/InfoBox';
import React from 'react';
import ResponsiveText from '../../common-comps/ResponsiveText';
import TextButton from '../../common-comps/TextButton';

const CONTAIN_BG_COL = '#385872';
const CONTAIN_PADD = '5% 4%';

const CONTAIN_IMG_PADD = '60% 2% 2% 63%';

const TITLE_SIZE = 80;
const TITLE_PADD = '0 0 5% 0';

const TEXT_COL = '#fff';

type IkonProps = {
    containData: InfoBoxProps;
    containImg: string;
    infoText: string;
    buttonText: string;
};

export default class Ikon extends React.Component<IkonProps, any> {
    props: IkonProps;

    constructor(props: IkonProps) {
        super(props);
        this.props = props;
    }

    containStyle = () => ({
        backgroundColor: CONTAIN_BG_COL,
        padding: CONTAIN_PADD,
        textAlign: 'center' as 'center'
    });

    innerContainStyle = () => ({
        ...CommonStyles.FlexCC
    });

    width1 = () => ({
        width: '45%',
        padding: '0 4% 0 0'
    });

    width2 = () => ({
        width: '55%'
    });

    render = () => {
        const props = this.props;

        return (
            <div style={this.containStyle()}>
                <ResponsiveText size={TITLE_SIZE} padding={TITLE_PADD} color="#fff">
                    Checkout Our Ikon Pass Sale
                </ResponsiveText>
                <div style={this.innerContainStyle()}>
                    <div style={this.width1()}>
                        <ContainImage
                            imgPath={props.containImg}
                            padding={CONTAIN_IMG_PADD}
                            data={props.containData}
                        />
                    </div>
                    <div style={this.width2()}>
                        <TextButton
                            buttonTitle={this.props.buttonText}
                            color={TEXT_COL}
                            size={44}
                            buttonTextSize={34}
                            padding="0 5%"
                            textPadding="0 0 5% 0"
                            buttonPadding="2% 8%"
                        >
                            {this.props.infoText}
                        </TextButton>
                    </div>
                </div>
            </div>
        );
    };
}
