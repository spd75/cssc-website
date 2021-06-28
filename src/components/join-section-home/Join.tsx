import React from 'react';
import TextButton from './TextButton';

type JoinProps = {};

export default class Join extends React.Component<JoinProps, any> {
    props: JoinProps;

    constructor(props: JoinProps) {
        super(props);
        this.props = props;
    }

    dividerSection = () => ({
        height: '1px',
        width: '80%',
        margin: 'auto',
        backgroundColor: '#AAA'
    });

    render = () => {
        return (
            <div>
                <TextButton buttonTitle="Sign Up to Become a Member">
                    Convinced? Sign up below with a Cornell email to become a full member of
                    Cornell's Ski and Snowboard Club!
                </TextButton>
                <div style={this.dividerSection()} />
                <TextButton buttonTitle="Join the ListServ">
                    Don't want to be committed to being a full member? Join the ListServ to receive
                    club updates to stay tuned!
                </TextButton>
            </div>
        );
    };
}
