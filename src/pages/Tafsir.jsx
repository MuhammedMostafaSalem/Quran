import React from 'react'
import TafsirList from '../components/TafsirList'
import Audio from '../components/Audio';
import useGetTafsir from '../hooks/useGetTafsir';

const Tafsir = () => {
    const [
        tafasirData,
        soarData,
        selectedSurah,
        onClickSurah,
    ] = useGetTafsir();
    
    return (
        <div className='mt-[70px] sm:mt-[60px] md:mt-[70px]'>
            <div className='container mx-auto py-[30px]'>
                <h1 className="beautiful-title text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-400">{tafasirData.name}</h1>
                <div className='w-full
                    h-auto
                    flex
                    justify-center
                    gap-4
                    items-start
                    flex-wrap
                    overflow-y-auto
                    mt-[30px]'
                >
                    {
                        soarData.map((item, index) => (
                            <TafsirList key={index} item={item} onClickSurah={onClickSurah} />
                        ))
                    }
                </div>
            </div>
            {
                selectedSurah ?
                    <Audio selectedSurah={selectedSurah} />
                : null
            }
        </div>
    )
}

export default Tafsir
