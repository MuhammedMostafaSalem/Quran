import React from 'react'
import Banner from '../components/Banner'
import SearchForm from '../components/SearchForm'
import Audio from '../components/Audio'
import useGetMoshaf from '../hooks/useGetMoshaf'

const Surah = () => {
    const [
        selectedOption,
        selectedSurah,
        nameData,
        handleSelectChange,
        handleClearData,
        surahData,
        server,
        onClickSurah
    ] = useGetMoshaf();

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
