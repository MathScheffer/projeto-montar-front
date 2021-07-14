import React, { useContext, useEffect, useRef, useState } from 'react';
import { useLocation, useParams } from 'react-router';
import Api from '../../api';

import { SlotProdutoContainerContext } from '../ContainerProduto/SlotProdutoContainerProvider';
import useFetch from '../../customHooks/useFetch';
import { ProdutoDescription } from '../index';
import './index.css';
import style from './ProdutoDescription.module.css';

const api = new Api()
const ContainerSelecao = (state) => {

    const context = useContext(SlotProdutoContainerContext);

    const background = useRef();
    const { data, loading, error, request } = useFetch()
    const [listProdutos,setListProdutos] = useState()
    const [thisCategoria, setThisCategoria] = useState()
    const containerSelecao = useRef()
    
    useEffect(() => {
        setThisCategoria((thisCategoria) => state.categoria)
    },[state.categoria]);

    useEffect(() => {
        if(state.categoria){
            request(state.categoria)
            .then(body => setListProdutos(body.json));
        }
    },[state.categoria]);

    
    useEffect(() => {
       let classes = containerSelecao.current.classList;
       context.modalOn ? classes.remove(style.displayNone) : classes.add(style.displayNone);
    },[context.modalOn])

    const configModal = () => {
        context.setModalOn(false)
        context.setIterador((iterador) => iterador+1)
     }

    return(
        <section ref={containerSelecao} className={`${style.containerSelecao} container `} >
            <div onClick={configModal} ref={background} className={style.containerSelecaoBackground}></div>
            <article className={style.containerDescriptionList}>
                {listProdutos &&
                    listProdutos.map(produto => 
                    <div key={produto.nome} className={`row ${style.produtoRow}`}>
                        <div className={`grid-10 ${style.produtoRowGrid}`}>
                            <ProdutoDescription 
                            setProduto={context}
                            categoria={state.categoria}
                            produto={produto}/>
                        </div>
                    </div> 
                    )    
                }

            </article>
        </section>
    )
}

export default ContainerSelecao;