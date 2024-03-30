import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

const Footer = () => {
    const { t } = useTranslation();
    const location = useLocation();
    const [isTafsirPath, setIsTafsirPath] = useState(false);
    const [year, setYear] = useState(new Date().getFullYear());

    useEffect(() => {
        setIsTafsirPath(location.pathname === "/tafsir")
    }, [location.pathname]);

    return (
        <footer className={`bg-[#22b3c1] text-[#fff] ${isTafsirPath ? '' : 'mt-[50px]'}`}>
            <p className="font-bold text-base capitalize text-center py-[20px]">
                {t('created')} &copy; {year}
            </p>
        </footer>
    )
}

export default Footer
