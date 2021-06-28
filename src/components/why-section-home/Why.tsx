import * as CommonStyles from '../styles/common-styles';
import ContainImage from './ContainImage';
import { InfoBoxProps } from './InfoBox';
import React from 'react';
import ResponsiveText from '../elemental-comps/ResponsiveText';

const InvalidDataError = new Error('Info box props or image paths does not have correct length.');
InvalidDataError.name = 'Invalid Data Error';

type WhyProps = {
    data: InfoBoxProps[];
    imgPaths: string[];
};

export default class Why extends React.Component<WhyProps, any> {
    props: WhyProps;

    constructor(props: WhyProps) {
        super(props);

        if (props.data.length !== 3 || props.imgPaths.length !== 3) {
            throw InvalidDataError;
        }
        this.props = props;
    }

    containerStyle = () => {
        return {
            backgroundColor: '#F0F0F0',
            padding: '3% 1% 2% 1%',
            textAlign: 'center' as 'center'
        };
    };

    verticalContainImgStyle = () => ({
        ...CommonStyles.FlexCS,
        flexDirection: 'column' as 'column',
        width: '130%',
        paddingRight: '0.5%'
    });

    horizontalContainImgStyle = () => ({
        ...CommonStyles.FlexCS,
        flexDirection: 'row' as 'row'
    });

    filler = () => ({
        paddingBottom: '1%'
    });

    render = () => {
        const data = this.props.data;
        const images = this.props.imgPaths;

        return (
            <div style={this.containerStyle()}>
                <ResponsiveText size={52} padding="0 0 3% 0">
                    Why Become a Member?
                </ResponsiveText>
                <div style={this.horizontalContainImgStyle()}>
                    <div style={this.verticalContainImgStyle()}>
                        <ContainImage imgPath={images[0]} padding="30% 30% 3% 5%" data={data[0]} />
                        <span style={this.filler()} />
                        <ContainImage imgPath={images[1]} padding="30% 8% 3% 8%" data={data[1]} />
                    </div>
                    <ContainImage imgPath={images[2]} padding="33% 8% 0 8%" data={data[2]} />
                </div>
            </div>
        );
    };
}
