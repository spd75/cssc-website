import * as CommonStyles from '../styles/common-styles';
import CreateAccountBody from './CreateAccountBody';
import LoginBG from '../../assets/LoginBG.png';
import LoginBody from './LoginBody';
import Header from './Header';
import React from 'react';

const CREATE_HEADER_TITLE = 'Create an Account to Become a Member of CSSC';
const CREATE_HEADER_TEXT =
    'Note: Members that want full access to club trips, events, and services will \
first have to pay club dues. This year, club dues will be $30. You will be \
limited in your access to the club website and club events until you pay this \
small fee.';

const LOGIN_HEADER_TITLE = 'Sign in to your CSSC account!';
const LOGIN_HEADER_TEXT =
    'Members get discouts for trips, access to CSSC equipment, and are free to participate in any \
    CSSC events. Skiers and snowboarders of all ability levels are welcome!';

type CreateOrLoginScreenProps = {
    isCreateAccountScreen: boolean;
};

export default class CreateOrLoginScreen extends React.Component<CreateOrLoginScreenProps, any> {
    props: CreateOrLoginScreenProps;

    constructor(props: CreateOrLoginScreenProps) {
        super(props);
        this.props = props;
    }

    windowStyle = () => {
        return {
            ...CommonStyles.FlexCC,
            backgroundImage: `url(${LoginBG})`,
            position: 'fixed' as 'fixed',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            width: '100%',
            height: '100%'
        };
    };

    containStyle = () => {
        return {
            ...CommonStyles.FlexColCC,
            width: '76%',
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            margin: 'auto'
        };
    };

    render = () => {
        const content: JSX.Element = this.props.isCreateAccountScreen ? (
            <div style={this.containStyle()}>
                <Header title={CREATE_HEADER_TITLE} note={CREATE_HEADER_TEXT} />
                <CreateAccountBody />
            </div>
        ) : (
            <div style={this.containStyle()}>
                <Header title={LOGIN_HEADER_TITLE} note={LOGIN_HEADER_TEXT} />
                <LoginBody />
            </div>
        );

        return <div style={this.windowStyle()}>{content}</div>;
    };
}
