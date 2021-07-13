import React from 'react';
import { useLocation } from 'react-router';
import {BotaoUi, ContainerSelecao, ComputadorContainer, SlotProduto, SlotProdutoProvider} from '../index'
import style from './Slot.module.css'

const SlotProdutoContainer = ({categoria,isComputador = false}) => {
    let props = useLocation();
    //console.log(categoria)
    props = props.state

    return(
        <section className={`${style.slotProdutoContainer} container`}>
            <SlotProdutoProvider>
                { categoria && 
                    <>
                        <ContainerSelecao categoria={categoria}/>
                        <SlotProduto categoria={categoria} infos={props}/>
                    </>
                }
                { isComputador &&
                    <ComputadorContainer />
                }
            </SlotProdutoProvider>
        </section>
    )
}

export default SlotProdutoContainer;