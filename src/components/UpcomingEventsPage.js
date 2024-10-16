import React from 'react';
import UpcomingEventsTopSection from './upcomingeventspage/UpcomingEventsTopSection';
import UpcomingEventsMiddleSection from './upcomingeventspage/UpcomingEventsMiddleSection';
import UpcomingEventsBottomSection from './upcomingeventspage/UpcomingEventsBottomSection';

const UpcomingEventsPage = () => {
  return (
    <div>
      <UpcomingEventsTopSection/>
      <UpcomingEventsMiddleSection/>
      <UpcomingEventsBottomSection/>
    </div>
  );
}

export default UpcomingEventsPage;
