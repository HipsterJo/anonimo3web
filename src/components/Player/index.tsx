import React, { useEffect } from 'react';
import ReactPlayer from 'react-player';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectorUser } from '../../redux/auth/selector';
import { OnProgressProps } from 'react-player/base';
import {useState} from 'react';
import { pState } from '../../pages/RoomPage';
import  "./index.css"

interface Props {
    state: pState;
    setState: React.Dispatch<React.SetStateAction<pState>>;
    refPlayer: React.MutableRefObject<ReactPlayer | null>;
    handlePlayPause: () => void;
    handleProgress: (progress: OnProgressProps) => void;
    handleDuration: (duration: number) => void;
    handlePlay: () => void;
    handlePause: () => void;
    handleOnSeek: (seconds:number ) => void;
}

const Player:React.FC<Props> = ({
    state, setState, refPlayer, handlePlayPause, handleProgress, handleDuration, handlePlay, handlePause, handleOnSeek

}) => {
    
 






    return (
        <div className='player-wrapper'>
            <ReactPlayer
        
            ref={refPlayer}
            url="https://foravecode.wistia.com/medias/6btg42reca"
            
            width='100%'
            height='100%'
            
           
            pip={state.pip}
            playing={state.playing}
            controls={true}
            loop={state.loop}
            playbackRate={state.playbackRate}
            volume={state.volume}
            muted={state.muted}
            onPlay={handlePlay}
            onPause={handlePause}
            onBuffer={() => console.log("onBuffer")}
            onSeek={handleOnSeek}
            onError={(e) => console.log("onError", e)}
            onProgress={handleProgress}
            onDuration={handleDuration}
            onReady={() => handlePlayPause()
            }


            />
        </div>
    );
}

export default Player;