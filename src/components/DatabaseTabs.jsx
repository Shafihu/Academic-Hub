'use client';
import { useState, useEffect } from 'react';
import mockGetData from '@/utils/mockGetData';
import ButtonLoader from '@/components/ButtonLoader';

const DatabaseTabs = () => {
  const [tab, setTab] = useState('Students');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await mockGetData(tab);
      setData(result);
      setLoading(false);
    };
    fetchData();
  }, [tab]);

  const handleTabSelect = (item) => {
    setTab(item);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredData = data.filter((item) =>
    Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="">
      <div className="flex flex-row justify-between items-center mb-4">
        <input
          type="text"
          className="border border-gray-300 py-1 pl-2 rounded-sm text-indigo-500 text-sm focus:outline-none focus:border-indigo-500"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <div
          onClick={() => handleTabSelect('Students')}
          className={`cursor-pointer relative font-medium mx-2 ${tab === 'Students' ? 'text-indigo-500' : 'text-gray-600 hover:text-gray-900'}`}
        >
          Students
          <span className={`${tab === 'Students' ? 'flex' : 'hidden'} bg-indigo-500 w-full h-[0.15em] absolute -bottom-[0.15em] left-0 rounded-lg`}></span>
        </div>
        <div
          onClick={() => handleTabSelect('Teachers')}
          className={`cursor-pointer relative font-medium mx-2 ${tab === 'Teachers' ? 'text-indigo-500' : 'text-gray-600 hover:text-gray-900'}`}
        >
          Teachers
          <span className={`${tab === 'Teachers' ? 'flex' : 'hidden'} bg-indigo-500 w-full h-[0.15em] absolute -bottom-[0.15em] left-0 rounded-lg`}></span>
        </div>
        <div
          onClick={() => handleTabSelect('Employees')}
          className={`cursor-pointer relative font-medium mx-2 ${tab === 'Employees' ? 'text-indigo-500' : 'text-gray-600 hover:text-gray-900'}`}
        >
          Employees
          <span className={`${tab === 'Employees' ? 'flex' : 'hidden'} bg-indigo-500 w-full h-[0.15em] absolute -bottom-[0.15em] left-0 rounded-lg`}></span>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center ">
          <ButtonLoader color="border-indigo-500" />
        </div>
      ) : (
        <div className="mt-4">
          {filteredData.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                      ID
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                      Class
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                      Year Joined
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                      Contact
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredData.map((item) => (
                    <tr key={item.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {item.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {item.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {item.class}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {item.yearJoined}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {item.contact}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className='text-sm text-gray-300'>No data found!</p>
          )}
        </div>
      )}
    </div>
  );
};

export default DatabaseTabs;
