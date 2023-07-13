import React, { useState, useRef, useEffect, useCallback } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { Socket, io } from 'socket.io-client'
import Chat from '../../components/Chat'
import Player from '../../components/Player'
import {User } from '../../types/User'
import { useSelector } from 'react-redux';
import { selectorUser } from '../../redux/auth/selector';
import { Message, Action } from '../../types/Items';
import { useAppDispatch } from '../../redux/store'
import { fetchAnimeById, updateProperty } from '../../redux/anime/cardActions';
import { Anime } from '../../types/Anime';
import ReactPlayer from 'react-player'
import debounce from 'lodash.debounce'
import { OnProgressProps } from 'react-player/base'
import { BsArrowLeftSquareFill } from 'react-icons/bs'
import { selectTopAnime } from '../../redux/anime/selector'

export interface pState {
  url: string | null;
  pip: boolean;
  playing: boolean;
  controls: boolean;
  light: boolean;
  volume: number;
  muted: boolean;
  played: number;
  loaded: number;
  duration: number;
  playbackRate: number;
  loop: boolean;
  volumeOpen: boolean;
  dropdownOpen: boolean;
  fullscreen: boolean;    
  seeking: boolean;
}

const RoomPage = () => {
    let alreadySeek = false;
    const [playing, setPlaying] = React.useState<boolean>(false);
    const [progress, setProgress] = React.useState<number>(0);
    const refPlayer = React.useRef<ReactPlayer|null>(null);
    const user:User|null = useSelector(selectorUser);
    const [messages, setMessages] = React.useState<Message[]>([])
    const search = useLocation().search;
    const roomId = new URLSearchParams(search).get('roomid');
    
    const animeId = new URLSearchParams(search).get('animeid');
    const dispatch = useAppDispatch()
    const socketRef = React.useRef<Socket>()
    const textareaRef = React.useRef<any>()
    const scrollbar = React.useRef<HTMLDivElement>(null)
    const [anime, setAnime] = React.useState<Anime>();
    const [lastMark, setLastMark] = React.useState<number>(0);
  

    const scrollDown = async ()=>{
      
      
      
      const scrollHeight = scrollbar.current?.scrollHeight
      scrollbar.current?.scrollTo({top: scrollHeight, behavior: 'smooth'})
    }
   
    const [state, setState] = useState<pState>({
        url: null,
        pip: false,
        playing: false,
        controls: true,
        light: false,
        volume: 0.8,
        muted: false,
        played: 0,
        loaded: 0,
        duration: 0,
        playbackRate: 1.0,
        loop: false,
        volumeOpen: false,
        dropdownOpen: false,
        fullscreen: false,
        seeking: false
      });

      const load = (url:string) => {
        setState({
          ...state,
          url,
          played: 0,
          loaded: 0,
          pip: false,
        });
      };
   const handlePlay = () => {
        console.log("onPlay");
        if (!state.playing) {
          setState({
            ...state,
            playing: true,
          });
          socketRef.current?.emit("action", {userId: user?._id, playing: true, progress: refPlayer.current?.getCurrentTime(), roomId: roomId})
        }
    };
    const handlePause = () => {
        console.log("onPause");
        if (state.playing) {
            setState({
                ...state,
                playing: false,
            });
            socketRef.current?.emit("action", {userId: user?._id, playing: false, progress: refPlayer.current?.getCurrentTime(), roomId: roomId})
        }

    };

    const handleProgress = (progress: OnProgressProps) => {
        
        if (!state.seeking) {
            setState({
                ...state,
                played: progress.played,
                loaded: progress.loaded,
            });
            
        }
    };

    const handleDuration = (duration: number) => {
        console.log("onDuration", duration);
        setState({
            ...state,
            duration,
        });
    };

    const handlePlayPause = () => {
        console.log("onPlayPause");
        setState({
            ...state,
            playing: !state.playing,
        });
        socketRef.current?.emit("action", {userId: user?._id, playing: refPlayer.current?.props.playing, progress: refPlayer.current?.getCurrentTime(), roomId: roomId})
    };

     const handleOnSeek= async (seconds: number) => {
        if (alreadySeek == false){
          alreadySeek = true
          console.log("onSeek", seconds);
          console.log("emit")
          socketRef.current?.emit("action", {userId: user?._id, playing: refPlayer.current?.props.playing, progress: refPlayer.current?.getCurrentTime(), roomId: roomId})
          await new Promise(r => setTimeout(r, 500000)); 
          alreadySeek = false
        }
        else
        console.log("Alredy Seek")

        
    }


    useEffect(()=>{
      scrollDown()
    },[messages])
    



    useEffect (()=>{
        if (!socketRef.current?.connected && user != null){
      
        socketRef.current = io("http://localhost:1000",

        {
          
          query: {
            userName: user.email,
            roomId: roomId
        }
        }
        )
     
      }

      socketRef.current?.on("receive_message", (data: Message)=>{
     
        if (messages){
          setMessages([...messages, data])
          console.log(messages)
        }
        else{
          setMessages([data])
        }
        
     })

      socketRef.current?.on("AnAction", (data: Action)=>{
        
        const {playing, progress} = data
       
        setState({
          ...state,
          playing,
        });
        refPlayer.current?.seekTo(progress)
      })

        // if (data.action == "changeAnime"){
        //     dispatch(updateProperty({id: data.value, property: "currentEpisode"}))
        // }

  
     socketRef.current?.on("connect", ()=>{
      
      console.log("connect")
    })

    socketRef.current?.on("disconnect", ()=>{
      console.log("disconnect")
    })


 
    return () => {

      if (socketRef.current?.connected){
        socketRef.current?.disconnect()
      } 
     
    }

  },[messages, user]
  )



    return(
    <div className='grid grid-cols-7 px-2 gap-5'>
      
      
        <Player 

       state = {state} setState = {setState} handlePlay = {handlePlay} handlePause = {handlePause} handleProgress = {handleProgress} handleDuration = {handleDuration} handlePlayPause = {handlePlayPause} refPlayer = {refPlayer}  handleOnSeek = {handleOnSeek}
        />
       
       <div className='col-span-2'>
      <Chat user = {user} messages = {messages} refScroll={scrollbar} refTextArea={textareaRef} refSocket ={socketRef} roomId={roomId}
        />
      </div>
    </div>
    )
}
    
export default RoomPage