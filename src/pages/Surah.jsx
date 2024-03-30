import React from 'react'
import Banner from '../components/Banner'
import SearchForm from '../components/SearchForm'
import Audio from '../components/Audio'
import useGetMoshaf from '../hooks/useGetMoshaf'
import { useSelector } from 'react-redux'

const Surah = () => {
    const { language } = useSelector(state => state.lang);
    const [
        selectedOption,
        selectedSurah,
        nameData,
        handleSelectChange,
        handleClearData,
        surahData,
        server,
        onClickSurah
    ] = useGetMoshaf(language);

    return (
        <div>
            <Banner />
            <SearchForm
                selectedOption={selectedOption}
                nameData={nameData}
                handleSelectChange={handleSelectChange}
                handleClearData={handleClearData}
                surahData={surahData}
                server={server}
                onClickSurah={onClickSurah}
            />
            {
                selectedSurah ?
                    <Audio selectedSurah={selectedSurah} />
                : null
            }
        </div>
    )
}

export default Surah
