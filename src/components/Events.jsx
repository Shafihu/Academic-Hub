import { useEffect, useState } from "react";
import mockEventsData from "@/utils/mockEventsData";

const Events = () => {
    const [eventsData, setEventsData] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            const res = await mockEventsData();
            setEventsData(res);
        };
        fetchEvents();
    }, []);

    return (
        <div className="h-full">
            {eventsData.length > 0 ? (
                eventsData.map((item, index) => (
                 <div key={index} className="flex flex-col lg:flex-row items-center justify-between lg:items-center lg:justify-center text-[14px] cursor-pointer rounded-lg p-4 lg:p-2 mb-4 lg:mb-0">
                    <p className="text-left lg:text-left mb-2 lg:mb-0 lg:mr-4 lg:w-1/4 whitespace-nowrap text-[13px] font-semibold text-gray-500">{item.date}</p>
                    <p className="flex-1 text-center lg:text-left text-indigo-600 font-medium mb-2 lg:mb-0">{item.title.length > 9 ? item.title.substring(0, 9) + '...' : item.title}</p>
                    <p className="text-right lg:text-left whitespace-nowrap text-[13px] font-semibold text-gray-500">{item.time}</p>
                </div>
            ))
            ) : (
                <p>No events available!</p>
            )}
        </div>

    );
};

export default Events;
