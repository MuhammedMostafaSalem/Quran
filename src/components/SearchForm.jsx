import React from 'react'
import { Typography } from "@material-tailwind/react";
import Select from 'react-select';

const SearchForm = () => {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    return (
        <div className='relative z-[5]'>
            <div className='container mx-auto'>
                <form className='p-[30px] bg-[#fff] shadow-lg rounded-[30px] grid grid-cols-1 md:grid-cols-3 gap-4'>
                    <div className='w-full'>
                        <Typography variant="h6" color="blue-gray">
                        Choose Reciter
                        </Typography>
                        <Select
                            options={options}
                            isClearable={true}
                            className="cursor-pointer"
                            classNamePrefix="select"
                        />
                    </div>
                    <div className='w-full'>
                        <Typography variant="h6" color="blue-gray">
                        Choose Riwayat
                        </Typography>
                        <Select
                            options={options}
                            isClearable={true}
                            className="cursor-pointer"
                            classNamePrefix="select"
                        />
                    </div>
                    <div className='w-full'>
                        <Typography variant="h6" color="blue-gray">
                            Choose Suwar
                        </Typography>
                        <Select
                            options={options}
                            isClearable={true}
                            className="cursor-pointer"
                            classNamePrefix="select"
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SearchForm
