import { FaFacebook } from 'react-icons/fa';
import IconImage from '../elemental/IconImage';
import React from 'react';
import { RiInstagramLine } from 'react-icons/ri';
import StanButton from '../elemental/StanButton';

type EnderBarProps = {};

export default class EnderBar extends React.Component<EnderBarProps, any> {
    backgroundColor: string = '#777';

    constructor(props: EnderBarProps) {
        super(props);
    }

    containerStyle = () => {
        return {
            backgroundColor: this.backgroundColor,
            width: 'max-content',
            display: 'flex',
            alignItems: 'center',
            padding: '10px',
            columnGap: '15px'
        };
    };

    iconDivStyle = () => {
        return {
            display: 'flex',
            alignItems: 'center',
            columnGap: '8px'
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

                <div style={this.iconDivStyle()}>
                    <IconImage
                        icon={RiInstagramLine}
                        dimensions={[22, 22, 4]}
                        color={this.backgroundColor}
                        hoverColor={'#bbb'}
                        bgColor={'#fff'}
                    />
                    <IconImage
                        icon={FaFacebook}
                        dimensions={[30, 30, 0]}
                        color={'#fff'}
                        hoverColor={'#bbb'}
                    />
                </div>
            </div>
        );
    };
}
