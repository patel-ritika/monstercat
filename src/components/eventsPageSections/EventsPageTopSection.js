import React from 'react';
import "../../asset/styles/eventspage/eventspagetopsection.css";
import sectionImg1 from '../../asset/images/events/topSectionImgs/sectionimg1.webp'
import sectionImg2 from '../../asset/images/events/topSectionImgs/sectionimg3.webp'
import sectionImg3 from '../../asset/images/events/topSectionImgs/sectionimg2.jpg'

const EventsPageTopSection = () => {
    const sectionData = [
        {
            sectionImg: sectionImg1,
            title: "Horizon Festival",
        },
        {
            sectionImg: sectionImg2,
            title: "Ministry of sound",
        },
        {
            sectionImg: sectionImg3,
            title: "ade 2024",
        },
    ]

  return (
    <>
            <div className='events-page-top-section-container'>
                <div className='events-page-top-section-title'>
                    <h1>The true <br /><span>Monstercat</span><br /> Event Experience</h1>
                </div>
                <div className='events-page-top-section-upcomming-events-content'>
                    <h1>Just to name a few events...</h1>
                    <div className='events-page-top-section-upcomming-events-content-box'>
                        {
                            sectionData?.map((data, index) => (
                                <div className='events-page-top-section-upcomming-events-content-box-body' key={index}>
                                    <img src={data?.sectionImg} alt='section-img' />
                                    <p>{data?.title}</p>
                                </div>
                            ))
                        }
                    </div>
                    <div className='events-page-top-section-upcomming-events-content-box-button'>
                        <button>View All Upcoming Events</button>
                    </div>
                </div>
            </div>
        </>
  );
}

export default EventsPageTopSection;
