import React, { useState } from 'react';
import './AudioControls.css';
import PerfectMorning  from '../../Assets/audio/PerfectMorning.mp3';

export const AudioControls = () => {
    const [audio, setAudio] = useState('OFF');

    const toggleAudio = () => {
        if (audio === 'OFF') {
            setAudio('ON');
            document.getElementById('myAudio').play();
        } else {
            setAudio('OFF');
            document.getElementById('myAudio').pause();
        }
    }

    return (
        <>
            <div id="sound">
                <audio id="myAudio">
                    <source src={PerfectMorning} />
                </audio>
                <i className="fab fa-soundcloud sound-cloud"></i>
                <span>Sound</span>
                <div className="on-off" onClick={toggleAudio}>
                    <span>{audio === 'OFF' ? 'OFF' : 'ON'}</span>
                </div>
            </div>
        </>
    )
}