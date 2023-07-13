import React from 'react';
import { useSelector } from 'react-redux';
import { selectorUser } from '../../redux/auth/selector';
import { Button } from '../elements/Buttons/Button';
import { useEffect } from 'react';
import { io, Socket } from 'socket.io-client';
import { Message } from '../../types/Items';
import {User} from '../../types/User'

interface ChatProps{
  user: User | null;
  messages: Message[] | null;
  refScroll: any;
  refTextArea: any; 
  refSocket: any;
  roomId: any;
}

 const Chat: React.FC<ChatProps> = ({user, messages, refScroll, refTextArea,refSocket, roomId}) => {
  const [textArea, setTextArea] = React.useState<string>("")

    if (!user) {
        return (
            <div>
                <h1>Чат</h1>ъ
                <Button color="purple" title="Чтобы продолжить войдите в систему" />
            </div>
        );
    }


    return (
        <div className="col-span-1 row-span-1 flex-cols bg-[#1B1E22]   
        ">
          <h3>Чат</h3>
          <div className="w-full  bg-[#1B1E22] text-white overflow-y-scroll h-[500px]
           scroll-pl-7   scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-gray-500" ref = {refScroll}>
            
            {
              
              messages?.map((message, index)=>{
                return <div key={index}
                {...message.user === user.email ? {className: ' rounded-md p-2 mt-2  bg-gray-700'} : {className: ' rounded-md p-2   bg-gray-800'
                }} >
                  <h4 {
                    ...message.user === user.email ? {className: ' text-sm text-purple-500 m-0'} : {className: ' text-sm text-orange-500 m-0'}
                  }
                   >{message.user}</h4>
                <p>{message.message}</p>
                </div>
              })
            }
          </div>
          <input type="textarea" ref={refTextArea} onKeyDown = {(e)=> 
          {
            if (e.key === "Enter") {
              refSocket.current?.emit("send_message", {message: textArea, user: user.email, roomId: roomId})
              setTextArea("")
            } 
          }}
           onChange={(e)=>setTextArea(e.target.value)} value={textArea}
           className="bg-gray-800 text-gray-400 text-base rounded-lg block w-full px-5 py-1 outline-none" placeholder="Напишите сообщение" />
        </div>
    )

}

export default Chat