import React from 'react'
import ReactPlayer from 'react-player';
import useGetLive from '../hooks/useGetLive';

const TabsLive = () => {
    const [
        liveData,
        activeTab,
        handleTabClick,
    ] = useGetLive();
    
    return (
        <div className="flex flex-col container mx-auto mt-[100px]">
            <div className="flex mb-4 gap-5">
                {liveData.map((tab, index) => (
                    <button
                        key={index}
                        className={`w-full py-2 px-4 sm-max:text-[15px] rounded-[20px] transition-colors duration-300 ${
                            activeTab === index ? 'text-[#fff] bg-[#22b3c1]' : 'text-gray-600 sm:hover:bg-gray-200 sm-max:focus:bg-gray-200 hover:text-gray-800'
                        }`}
                        onClick={() => handleTabClick(index)}
                    >
                        {tab.name}
                    </button>
                ))}
            </div>
            <div className='flex justify-center'>
                {liveData.map((tab, index) => (
                    <div key={index} className={`${activeTab === index ? '' : 'hidden'}`}>
                        <ReactPlayer url={tab.url.replace('https://www.youtube.com/live/', 'https://www.youtube.com/embed/')} controls={true} className="react-player-custom" width='100%' height='100%' />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TabsLive
