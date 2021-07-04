import React, { useContext } from 'react';
import {BotaoUi, ContainerSelecao,SlotProdutoContainerContext} from '../index'
import style from './Slot.module.css';
const SlotProduto = (infos) => {
    console.log('aqui:')
    console.log(infos.infos)
    const context = useContext(SlotProdutoContainerContext);

    const changeModal = () =>{
        context.setModalOn(true);
    }
    return(
    <div className='row'>
        <div className={`grid-8 ${style.slotProduto}`}> 
            <div className={`row ${style.flexColumn}`}>
                {infos.infos && 
                    <>
                        <div className={`grid-12 ${style.justifyCenter}`}>
                            <h2>{infos.infos.nome}</h2>
                        </div>
                        <div className="grid-12">
                            <div className={style.imgContainer}>
                                <img></img>
                            </div>
                        </div>
                    </>
                }
                <div className={`grid-12 ${style.justifySpaceBetween}`}>
                    <BotaoUi className={style.buttons} onClick={changeModal} nome="selecionar"/>
                    <BotaoUi className={style.buttons} nome="atualizar"/>  
                </div>
            </div>
        </div>
    </div>
    )
}

export default SlotProduto;