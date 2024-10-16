import React from 'react';
import "../../asset/styles/upcomingeventspage/upcomingeventsmiddlesection.css";
import { FaCalendarPlus } from 'react-icons/fa'
import { FaTicket } from 'react-icons/fa6'
import sectionImg1 from '../../asset/images/events/topSectionImgs/sectionimg3.webp'
import sectionImg2 from '../../asset/images/events/topSectionImgs/sectionimg2.jpg'

const UpcomingEventsMiddleSection = () => {
  return (
    <>
            <div className='upcomming-events-middle-section-container'>
                <div className='upcomming-events-middle-section-content'>
                    <div className='upcomming-events-middle-section-content-box'>
                        <div className='upcomming-events-middle-section-content-box-img'>
                            <img src={sectionImg2} alt='section-img' />
                            <button><FaCalendarPlus /></button>
                        </div>
                        <div className='upcomming-events-middle-section-content-body'>
                            <div className='upcomming-events-middle-section-content-body-date'>
                                <h4>oct <br /><span>17</span></h4>
                            </div>
                            <div className='upcomming-events-middle-section-content-inner-body'>
                                <p>ade 2024</p>
                                <small>Amsterdam</small>
                            </div>
                        </div>
                        <div className='upcomming-events-middle-section-content-footer'>
                            <button><FaTicket /> get tickets</button>
                        </div>
                    </div>
                    <div className='upcomming-events-middle-section-content-box'>
                        <div className='upcomming-events-middle-section-content-box-img'>
                            <img src={sectionImg1} alt='section-img' />
                            <button><FaCalendarPlus /></button>
                        </div>
                        <div className='upcomming-events-middle-section-content-body'>
                            <div className='upcomming-events-middle-section-content-body-date'>
                                <h4>oct <br /><span>11</span></h4>
                            </div>
                            <div className='upcomming-events-middle-section-content-inner-body'>
                                <p>Ministry of Sound</p>
                                <small>London, UK</small>
                            </div>
                        </div>
                        <div className='upcomming-events-middle-section-content-footer'>
                            <button><FaTicket /> get tickets</button>
                        </div>
                    </div>
                </div>
            </div>
        </>

  );
}

export default UpcomingEventsMiddleSection;
