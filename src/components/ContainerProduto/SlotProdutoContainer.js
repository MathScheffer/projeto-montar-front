import React from 'react';
import { useLocation } from 'react-router';
import {BotaoUi, ContainerSelecao, SlotProduto, SlotProdutoProvider} from '../index'
import style from './Slot.module.css'

const SlotProdutoContainer = ({categoria}) => {
    let props = useLocation();
    //console.log(categoria)
    props = props.state

    return(
        <section className={`${style.slotProdutoContainer} container`}>
            <SlotProdutoProvider>
                <ContainerSelecao categoria={categoria}/>
                <SlotProduto categoria={categoria} infos={props}/>
            </SlotProdutoProvider>
        </section>
    )
}

export default SlotProdutoContainer;