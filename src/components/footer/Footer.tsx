import * as Universal from '../../universal';
import React from 'react';
import ResponsiveText from '../common-comps/ResponsiveText';

const TEXT_SIZE = 28;
const CONTAIN_PADD = '1% 0';

export default class Footer extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    containerStyle = () => ({
        backgroundColor: Universal.WEB_BLUE,
        textAlign: 'center' as 'center',
        padding: CONTAIN_PADD
    });

    render = () => {
        return (
            <div style={this.containerStyle()}>
                <ResponsiveText size={TEXT_SIZE} color={Universal.WHITE}>
                    {Universal.FOOTER_TEXT}
                </ResponsiveText>
            </div>
        );
    };
}
