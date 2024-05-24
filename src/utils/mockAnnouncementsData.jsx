const mockAnnouncementsData = () => {

    const announcements = [
        {
            id: 1,
            img: '/closed.jpg',
            title: 'School Closure',
            subTitle: 'The school is temporary closing due to some reasons.',
            date: 'Aug 2025'
        },
        {
            id: 2,
            img: '/covid_protocol.jpg',
            title: 'Updated COVID-19 Protocols',
            subTitle: 'Please review the updated COVID-19 safety protocols on the school website.',
            date: 'Sep 2025'
        },
        {
            id: 3,
            img: '/new_principal.jpg',
            title: 'Welcome Our New Principal',
            subTitle: 'We are excited to introduce our new principal, Dr. Jane Doe, starting this term.',
            date: 'Oct 2025'
        },
        {
            id: 4,
            img: '/report_cards.jpg',
            title: 'Report Card Distribution',
            subTitle: 'Report cards will be distributed on November 1st. Please ensure all dues are cleared.',
            date: 'Nov 2025'
        },
        {
            id: 5,
            img: '/book_fair.png',
            title: 'Book Fair Announcement',
            subTitle: 'Join us for the annual book fair next week. Exciting discounts available!',
            date: 'Dec 2025'
        },
        {
            id: 6,
            img: '/holiday_break.jpg',
            title: 'Holiday Break Schedule',
            subTitle: 'The school will be closed for the winter holiday from December 20th to January 5th.',
            date: 'Dec 2025'
        }
    ];
    

  return new Promise((resolve) => {
    setTimeout(()=>{
        resolve(announcements)
    }, 1000)
  })
}

export default mockAnnouncementsData