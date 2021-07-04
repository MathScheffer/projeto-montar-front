import React from 'react';
import { useLocation } from 'react-router-dom';
import './index.css'

const BotaoUi = ({nome,...props}) => {
    const infos = useLocation()
    let color = 'blue'
    if(infos.state){
        console.log(infos.state.background)
        color = infos.state.background
    }
        
    return(
        <button className='cursorPointer' style={{backgroundColor:color}} {...props}>{nome}</button>
    )
}

export default BotaoUi