import React from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Audio = () => {
    return (
        <div className='relative top-[30px]'>
            <AudioPlayer
                autoPlay={false}
                src="https://server6.mp3quran.net/akdr/001.mp3"
                onPlay={e => console.log("onPlay")}
            />
        </div>
    )
}

export default Audio
