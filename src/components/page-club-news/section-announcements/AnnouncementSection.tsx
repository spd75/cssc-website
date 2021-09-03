import Announcement from './Announcement';
import Event from '../section-upcoming-events/Event';
import React from 'react';
import Dummy from '../../assets/dummy.png';

import * as CommonStyles from '../../styles/common-styles';

export default class ClubNewsScreen extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    containerStyle = () => ({
        ...CommonStyles.FlexColCC,
        width: '100%'
    });

    render = () => {
        return (
            <div style={this.containerStyle()}>
                <Event date={new Date(2021, 9, 21)} img={Dummy} title="O-Week">
                    This year we will be hosting several fun social events for active and even new
                    members who are looking to give ski club a try.
                </Event>
            </div>
        );
    };
}
