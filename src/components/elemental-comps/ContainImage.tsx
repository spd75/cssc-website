import * as CommonStyles from '../styles/common-styles';
import InfoBox, { InfoBoxProps } from './InfoBox';
import React from 'react';

const DEFAULT_BUTTON_WIDTH = '50%';

type ContainImageProps = {
    imgPath: string;
    padding: string;
    data: InfoBoxProps;
};

export default class ContainImage extends React.Component<ContainImageProps, any> {
    props: ContainImageProps;

    constructor(props: ContainImageProps) {
        super(props);
        this.props = props;
    }

    containerStyle = () => {
        return {
            ...CommonStyles.ImageCoverPartial(this.props.imgPath),
            padding: this.props.padding
        };
    };

    render = () => {
        const data = this.props.data;

        return (
            <div style={this.containerStyle()}>
                <InfoBox
                    title={data.title}
                    buttonText={data.buttonText}
                    width={data.width || DEFAULT_BUTTON_WIDTH}
                    textSizeMultiplier={data.textSizeMultiplier}
                >
                    {data.children}
                </InfoBox>
            </div>
        );
    };
}
