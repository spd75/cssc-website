import ResponsiveText from '../elemental-comps/ResponsiveText';
import ResponsiveTextField from '../elemental-comps/ResponsiveTextField';
import React from 'react';

export default class ContactUs extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    containStyle = () => ({
        backgroundColor: '#fff',
        textAlign: 'center' as 'center',
        padding: '10%'
    });

    inputStyle = () => ({
        padding: '0.7%',
        borderRadius: '0',
        fontFamily: 'Arvo',
        paddingBottom: '10%',
        resize: 'none' as 'none'
    });

    render = () => {
        return (
            <div style={this.containStyle()}>
                <ResponsiveTextField
                    id="id"
                    placeholder="random"
                    multiLine={false}
                    size={25}
                    width="40%"
                    height="40%"
                />
            </div>
        );
    };
}
