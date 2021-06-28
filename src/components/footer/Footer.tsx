import * as Universal from '../../universal';
import React from 'react';
import ResponsiveText from '../elemental-comps/ResponsiveText';

export default class Footer extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    containerStyle = () => ({
        backgroundColor: Universal.WEB_BLUE,
        textAlign: 'center' as 'center',
        padding: '1.5% 0'
    });

    render = () => {
        return (
            <div style={this.containerStyle()}>
                <ResponsiveText size={46} color={Universal.WHITE}>
                    {Universal.FOOTER_TEXT}
                </ResponsiveText>
            </div>
        );
    };
}
