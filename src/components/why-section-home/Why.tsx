import InfoBox from './InfoBox';
import React from 'react';
import ResponsiveText from '../elemental-comps/ResponsiveText';

type WhyProps = {};

export default class Why extends React.Component<WhyProps, any> {
    constructor(props: WhyProps) {
        super(props);
    }

    containerStyle = () => {
        return {
            backgroundColor: '#F0F0F0',
            padding: '200px 100px'
        };
    };

    render = () => {
        return (
            <div style={this.containerStyle()}>
                <ResponsiveText size={52}>Why Become a Member?</ResponsiveText>
                <InfoBox title="Club Bonding" buttonText="Club Events">
                    We are more than just a ski club. We're a group of closely knit people who want
                    to make lifelong friends and have a great time! Check below to see if we have
                    any events that interest you!
                </InfoBox>
            </div>
        );
    };
}
