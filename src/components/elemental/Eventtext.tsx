import React from 'react';
import ResponsiveText from './ResponsiveText';

export default class EventText extends React.Component {
    constructor(props: any) {
        super(props);
    }

    containerStyle = () => ({
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center'
    });

    titleStyle = () => ({
        fontFamily: 'Arvo',
        color: '#48A8DE',
        size: ''
    });

    textStyle = () => {};

    render = () => {
        return <div></div>;
    };
}
