import * as CommonStyles from '../styles/common-styles';
import ContainImage from '../elemental-comps/ContainImage';
import { InfoBoxProps } from '../elemental-comps/InfoBox';
import React from 'react';
import ResponsiveText from '../elemental-comps/ResponsiveText';
import TextButton from '../elemental-comps/TextButton';

const CONTAIN_BG_COL = '#385872';
const CONTAIN_PADD = '2% 4%';

const CONTAIN_IMG_PADD = '40% 1% 1% 40%';

const TITLE_SIZE = 40;
const TITLE_PADD = '0 0 2% 0';

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
        padding: CONTAIN_PADD
    });

    innerContainStyle = () => ({
        ...CommonStyles.FlexCS
    });

    render = () => {
        const props = this.props;

        return (
            <div style={this.containStyle()}>
                <ResponsiveText size={TITLE_SIZE} padding={TITLE_PADD}>
                    Checkout Our Ikon Pass Sale
                </ResponsiveText>
                <div style={this.innerContainStyle()}>
                    <ContainImage
                        imgPath={props.containImg}
                        padding={CONTAIN_IMG_PADD}
                        data={props.containData}
                    />
                    <TextButton buttonTitle={this.props.buttonText}>
                        {this.props.infoText}
                    </TextButton>
                </div>
            </div>
        );
    };
}
