import React from 'react'

const mockEventsData = () => {

    const events = [
        {
            img: '/covid_protocol.jpg',
            date: '2024-03-20',
            title: 'Sports Day',
            time: '10:00am - 12:00pm'
        },
        {
            img: '/covid_protocol.jpg',
            date: '2024-03-25',
            title: 'PTA Meeting',
            time: '09:00am - 11:00am'
        },
        {
            img: '/covid_protocol.jpg',
            date: '2024-04-05',
            title: 'Science Fair',
            time: '02:00pm - 04:00pm'
        },
        {
            img: '/covid_protocol.jpg',
            date: '2024-04-15',
            title: 'Parent-Teacher Conference',
            time: '08:00am - 04:00pm'
        },
        {
            img: '/covid_protocol.jpg',
            date: '2024-05-01',
            title: 'May Day Celebration',
            time: 'All day'
        }
    ]
    
    

  return new Promise((resolve) => {
    setTimeout(()=>{
        resolve(events)
    },1000)
  })
}

export default mockEventsData