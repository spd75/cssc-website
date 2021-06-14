import { FaFacebook } from 'react-icons/fa';
import IconImage from '../elemental/IconImage';
import React from 'react';
import { RiInstagramLine } from 'react-icons/ri';
import NavBarButton from '../elemental/NavBarButton';

type EnderBarProps = {};

export default class EnderBar extends React.Component<EnderBarProps, any> {
    backgroundColor: string = '#777';

    constructor(props: EnderBarProps) {
        super(props);
    }

    containerStyle = () => {
        return {
            backgroundColor: this.backgroundColor,
            display: 'flex',
            flexGrow: 2,
            justifyContent: 'center',
            alignItems: 'center'
        };
    };

    innerContainerStyle = () => {
        return {
            margin: '5% 5%',
            backgroundColor: this.backgroundColor,
            width: 'max-content',
            display: 'flex',
            flexGrow: 2,
            justifyContent: 'center',
            alignItems: 'center'
        };
    };

    iconDivStyle = () => {
        return {
            display: 'flex',
            alignItems: 'center',
            height: '100%',
            columnGap: '8px'
        };
    };

    render = () => {
        return (
            <div style={this.containerStyle()}>
                <div style={this.innerContainerStyle()}>
                    <NavBarButton
                        title="Become a Member"
                        onClick={() => console.log('sup woadie')}
                    />
                    <NavBarButton title="Login" onClick={() => console.log('sup woadie')} />

                    <div style={this.iconDivStyle()}>
                        <IconImage
                            icon={RiInstagramLine}
                            dimensions={[32, 32, 4]}
                            color={this.backgroundColor}
                            hoverColor={'#bbb'}
                            bgColor={'#fff'}
                        />
                        <IconImage
                            icon={FaFacebook}
                            dimensions={[40, 40, 0]}
                            color={'#fff'}
                            hoverColor={'#bbb'}
                        />
                    </div>
                </div>
            </div>
        );
    };
}
