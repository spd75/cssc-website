import Announcement from './section-announcements/Announcement';
import React from 'react';

export default class ClubNewsScreen extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render = () => {
        return (
            <div>
                <Announcement date={new Date(2021, 9, 21)} title="Find Us at Club Fest">
                    We will have a Cornell Ski and Snowboard Club table at club fest. Visit us to
                    learn more about the club and meet some of our members.
                </Announcement>
            </div>
        );
    };
}
