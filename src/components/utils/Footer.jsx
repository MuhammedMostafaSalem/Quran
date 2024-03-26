import React, { useState } from 'react'

const Footer = () => {
    const [year, setYear] = useState(new Date().getFullYear());

    return (
        <footer className='bg-[#22b3c1] text-[#fff] mt-[50px]'>
            <p className="font-bold text-base capitalize text-center py-[20px]">
                &copy; {year} created with MuhammedMostafaSalem
            </p>
        </footer>
    )
}

export default Footer
