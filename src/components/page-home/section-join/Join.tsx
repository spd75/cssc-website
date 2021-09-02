import * as UniversalFunctions from '../../../universal/genfunctions';
import React from 'react';
import TextButton, { TextButtonProps } from '../../common-comps/TextButton';

const DIVIDER_HEIGHT = '1px';
const DIVIDER_WIDTH = '80%';
const DIVIDER_MARGIN = 'auto';
const DIVIDER_BG_COL = '#AAA';

const InvalidDataError = new Error('Info box props or image paths does not have correct length.');
InvalidDataError.name = 'Invalid Data Error';

type JoinProps = {
    data: TextButtonProps[];
};

export default class Join extends React.Component<JoinProps, any> {
    props: JoinProps;

    constructor(props: JoinProps) {
        super(props);
        UniversalFunctions.validateLength(props.data, 2, 'Data', 'Join');
        this.props = props;
    }

    dividerSection = () => ({
        height: DIVIDER_HEIGHT,
        width: DIVIDER_WIDTH,
        margin: DIVIDER_MARGIN,
        backgroundColor: DIVIDER_BG_COL
    });

    render = () => {
        return (
            <div>
                <TextButton buttonTitle={this.props.data[0].buttonTitle}>
                    {this.props.data[0].children}
                </TextButton>
                <div style={this.dividerSection()} />
                <TextButton buttonTitle={this.props.data[1].buttonTitle}>
                    {this.props.data[1].children}
                </TextButton>
            </div>
        );
    };
}
