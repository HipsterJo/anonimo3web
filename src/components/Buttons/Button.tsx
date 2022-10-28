import React from "react";

interface ButtonProps{
    disabled?: boolean;
    color?: 'purple'|'green'
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    title?: string; 
}

export  const Button:React.FC<ButtonProps> = ({title, onClick, color, className, disabled}) => {
    return (
        <button
         onClick={onClick}
         disabled={disabled}
         className= {"btn-play-purple "+ className}
        >
            {title}
        </button>
    );
}