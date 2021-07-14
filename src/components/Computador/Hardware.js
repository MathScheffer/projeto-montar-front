import React, { useContext, useEffect,useState } from 'react'

import style from './Hardware.module.css';

const Hardware = ({hardware}) => {
    return (
        <div className={`row ${style.produtoDescricaoContainer}`}>
            <div className={`grid-2 ${style.produtoDescricaoImgContainer}`}>
                <img src={hardware.img}/>
            </div>
            <div className={`grid-10 ${style.produtoDescricao}`}>
                <h3>{hardware.nome}</h3>
                
                <p>{hardware.description}</p>
            </div> 
        </div>
    )
}

export default Hardware
