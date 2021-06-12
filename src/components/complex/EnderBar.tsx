import React from 'react';
import FB from '../../assets/fb_icon.png';
import IconImage from '../elemental/IconImage';
import Insta from '../../assets/insta_icon.png';
import StanButton from '../elemental/StanButton';
import { FaFacebook } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';

type EnderBarProps = {};

export default class EnderBar extends React.Component<EnderBarProps, any> {
    constructor(props: EnderBarProps) {
        super(props);
    }

    containerStyle = () => {
        return {
            backgroundColor: '#777',
            display: 'flex',
            alignItems: 'stretch',
            padding: '10px',
            maxHeight: '100px'
        };
    };

    iconStyle = () => {
        return {
            dislay: 'block',
            margin: '0',
            objectFit: ''
        };
    };

    render = () => {
        return (
            <div style={this.containerStyle()}>
                <StanButton
                    title="Become a Member"
                    traditional={false}
                    onClick={() => console.log('sup woadie')}
                />
                <StanButton
                    title="Login"
                    traditional={false}
                    onClick={() => console.log('sup woadie')}
                />

                {/* <img style={this.iconStyle()} src={Insta} /> */}
            </div>
        );
    };
}
