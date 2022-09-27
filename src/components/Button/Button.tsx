import React from 'react'
import style from '../Button/Button.module.css'
interface IProps {
    text: string,
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({ text, onClick }:IProps):JSX.Element=> {
    return (
        <button className={style.button} type='button' onClick={onClick}>{text}</button>
    )
}


// Button.propTypes = {
//     text: PropTypes.string.isRequired,
//     onClick:PropTypes.func.isRequired,
// }
