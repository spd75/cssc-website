import { FaFacebook } from 'react-icons/fa';
import IconImage from '../elemental/IconImage';
import React from 'react';
import { RiInstagramLine } from 'react-icons/ri';
import NavBarButton from '../elemental/NavBarButton';
import { ReactComponent as Insta } from '../../assets/insta.svg';

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
            alignItems: 'center',
            width: '20%'
        };
    };

    innerContainerStyle = () => {
        return {
            margin: '0% 4%',
            backgroundColor: this.backgroundColor,
            height: '100%',
            width: 'max-content',
            display: 'flex',
            flexGrow: 2,
            justifyContent: 'center',
            alignItems: 'center',
            columnGap: '3%'
        };
    };

    iconDivStyle = () => {
        return {
            display: 'flex',
            alignItems: 'center',
            height: '100%',
            width: 'max-content',
            columnGap: '4%'
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
                            color={this.backgroundColor}
                            hoverColor={'#bbb'}
                            bgColor={'#fff'}
                            margin="10%"
                        />
                        <IconImage icon={FaFacebook} color={'#fff'} hoverColor={'#bbb'} />
                    </div>
                </div>
            </div>
        );
    };
}
