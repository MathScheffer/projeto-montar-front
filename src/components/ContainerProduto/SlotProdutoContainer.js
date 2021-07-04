import React from 'react';
import { useLocation } from 'react-router';
import {BotaoUi, ContainerSelecao, SlotProduto, SlotProdutoProvider} from '../index'
import style from './Slot.module.css'

const SlotProdutoContainer = () => {
    let props = useLocation();
    props = props.state

    return(
        <section className={`${style.slotProdutoContainer} container`}>
            <SlotProdutoProvider>
                <ContainerSelecao />
                <SlotProduto infos={props}/>
            </SlotProdutoProvider>
        </section>
    )
}

export default SlotProdutoContainer;