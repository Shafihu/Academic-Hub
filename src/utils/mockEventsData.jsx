import React from 'react'

const mockEventsData = () => {

    const events = [
        {
            img: '/sports_day.webp',
            date: '2024-03-20',
            title: 'Sports Day',
            time: '10:00am - 12:00pm'
        },
        {
            img: '/science_fair.jpg',
            date: '2024-04-05',
            title: 'Science Fair',
            time: '02:00pm - 04:00pm'
        },
        {
            img: '/pta_meeting.jpg',
            date: '2024-04-15',
            title: 'Parent-Teacher Conference',
            time: '08:00am - 04:00pm'
        },
        {
            img: '/may_day.jpg',
            date: '2024-05-01',
            title: 'May Day Celebration',
            time: 'All day'
        },
        {
            img: '/art_exhibition.jpg',
            date: '2024-05-10',
            title: 'Art Exhibition',
            time: '01:00pm - 05:00pm'
        },
    ]
    
    

  return new Promise((resolve) => {
    setTimeout(()=>{
        resolve(events)
    },1000)
  })
}

export default mockEventsData