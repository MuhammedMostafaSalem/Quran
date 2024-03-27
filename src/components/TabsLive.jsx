import React, { useState } from 'react'
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";

const TabsLive = () => {
    const [activeTab, setActiveTab] = useState('html');

    const data = [
        {
            label: "HTML",
            value: "html",
            desc: `It really matters and then like it really doesn't matter.
            What matters is the people who are sparked by it. And the people 
            who are like offended by it, it doesn't matter.`,
        },
        {
            label: "React",
            value: "react",
            desc: `Because it's about motivating the doers. Because I'm here
            to follow my dreams and inspire other people to follow their dreams, too.`,
        },
    ]

    const handleTabClick = (value) => {
        setActiveTab(value); // Update active tab state on click
    };

    return (
        <div className='container mx-auto mt-[100px]'>
            <Tabs value={activeTab}>
                <TabsHeader>
                    {data.map(({ label, value }) => (
                    <Tab key={value} value={value}>
                        {label}
                    </Tab>
                    ))}
                </TabsHeader>
                <TabsBody>
                    {data.map(({ value, desc }) => (
                    <TabPanel key={value} value={value}>
                        {desc}
                    </TabPanel>
                    ))}
                </TabsBody>
                </Tabs>
        </div>
        // <Tabs value={activeTab} className='container mx-auto mt-[100px]'>
        //     <div className="flex gap-4 bg-transparent">
        //         {data.map(({ label, value }) => (
        //             <TabsHeader 
        //                 key={value} 
        //                 className={`cursor-pointer w-full rounded-[10px] text-center py-2 px-4 transition duration-300 ${activeTab === value ? 'bg-[#22b3c1] text-[#fff]' : 'text-[#22b3c1]'}`}
        //                 onClick={() => handleTabClick(value)}
        //             >
        //                 {label}
        //             </TabsHeader>
        //         ))}
        //     </div>
        //     {/* <div className="mt-4">
        //         {data.map(({ value, desc }) => (
        //             <div key={value} className={`${activeTab === value ? '' : 'hidden'}`}>
        //                 {desc}
        //             </div>
        //         ))}
        //     </div> */}
        //     <TabsBody>
        //         {data.map(({ value, desc }) => (
        //         <TabPanel key={value} value={value}>
        //             {desc}
        //         </TabPanel>
        //         ))}
        //     </TabsBody>
        // </Tabs>
    )
}

export default TabsLive
