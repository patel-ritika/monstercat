import React from 'react';
import EventsPageTopSection from './eventsPageSections/EventsPageTopSection';
import EventsPageTopTwoSection from './eventsPageSections/EventsPageTopTwoSection';
import EventsPageContactSection from './eventsPageSections/EventsPageContactSection';
import EventsPageBottomSection from './eventsPageSections/EventsPageBottomSection';

const EventsPage = () => {
  return (
    <div>
      <EventsPageTopSection/>
      <EventsPageTopTwoSection/>
      <EventsPageContactSection/>
      <EventsPageBottomSection/>
    </div>
  );
}

export default EventsPage;
