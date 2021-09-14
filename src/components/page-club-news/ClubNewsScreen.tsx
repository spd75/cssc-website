import Announcement from './section-announcements/Announcement';
import Event from './section-upcoming-events/Event';
import React from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Hero1 from '../../assets/hero1.jpg';

import * as UniNav from '../../universal/navigations';
import * as UniCon from '../../universal/constants';

import * as CommonStyles from '../styles/common-styles';

export default class ClubNewsScreen extends React.Component<any, any> {
    onClicks: (() => void)[];

    constructor(props: any) {
        super(props);

        this.onClicks = [
            () => UniNav.toClubNews(),
            () => console.log('Trips'),
            () => console.log('Equipment'),
            () => console.log('About Us'),
            () => UniNav.toHome()
        ];
    }

    containerStyle = () => ({
        ...CommonStyles.FlexColCC,
        width: '100%',
        height: '100%',
        backgroundColor: '#F2F2F2',
        padding: '100px'
    });

    render = () => {
        return (
            <div>
                <Header path={[Hero1]} navLinks={UniCon.NAV_LINKS} onClicks={this.onClicks} />
                <Footer />
            </div>
        );
    };
}
