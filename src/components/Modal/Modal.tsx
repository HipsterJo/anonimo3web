import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { login, registration, logout } from "../../redux/auth/authActions"
import {useAppDispatch, RootState} from "../../redux/store"
import LoginForm from "./LoginForm/LoginForm"
import RegisterForm from "./RegisterForm/RegisterForm"  


type ModalProps={

}

const Modal:React.FC= () => {

    const dispatch = useAppDispatch();
    const isAuth = useSelector((state:RootState)=>state.authSlice.user)
    const [isRegister, setRegister] = React.useState<boolean>(false)
    
    if (isAuth){
    return (
        
        <div className="relative p-4 w-full flex flex-col gap-7 ">
            <Link to="/favorite">  <button className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Favorite Anime</button></Link>
            <button type="submit" onClick={() => dispatch(logout())} className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">LogOut</button>
        </div>
             
    )}else if (!isRegister) {
            return <LoginForm  func = {setRegister}/>
    
    }else
    {
        return <RegisterForm func ={setRegister}/>
    }
};

export default Modal;