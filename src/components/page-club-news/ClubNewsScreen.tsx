import Announcement from './section-announcements/Announcement';
import Event from './section-upcoming-events/Event';
import React from 'react';
import Dummy from '../../assets/dummy.png';

import * as CommonStyles from '../styles/common-styles';

export default class ClubNewsScreen extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
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
            <div style={this.containerStyle()}>
                {/* <Announcement date={new Date(2021, 9, 21)} title="Find Us at Club Fest">
                    We will have a Cornell Ski and Snowboard Club table at club fest. Visit us to
                    learn more about the club and meet some of our members.
                </Announcement> */}
                <Event date={new Date(2021, 9, 21)} img={Dummy} title="O-Week">
                    This year we will be hosting several fun social events for active and even new
                    members who are looking to give ski club a try.
                </Event>
            </div>
        );
    };
}
