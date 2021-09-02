import * as UniversalConstants from '../../universal/constants';
import React from 'react';
import ResponsiveText from '../common-comps/ResponsiveText';

const TEXT_SIZE = 28;
const CONTAIN_PADD = '1% 0';

export default class Footer extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    containerStyle = () => ({
        backgroundColor: UniversalConstants.WEB_BLUE,
        textAlign: 'center' as 'center',
        padding: CONTAIN_PADD
    });

    render = () => {
        return (
            <div style={this.containerStyle()}>
                <ResponsiveText size={TEXT_SIZE} color={UniversalConstants.WHITE}>
                    {UniversalConstants.FOOTER_TEXT}
                </ResponsiveText>
            </div>
        );
    };
}
