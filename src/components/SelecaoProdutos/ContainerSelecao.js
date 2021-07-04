import React, { useContext, useEffect, useRef, useState } from 'react';
import { useLocation, useParams } from 'react-router';
import { SlotProdutoContainerContext } from '../ContainerProduto/SlotProdutoContainerProvider';
import { ProdutoDescription } from '../index';
import './index.css'

const ContainerSelecao = () => {
    //const paramsLocation = useLocation();
    //const [displayNone,setDisplayNone] = useState(false);

    const context = useContext(SlotProdutoContainerContext);

    const background = useRef();
    const test = () => {
       context.setModalOn(false)
       //setDisplayNone(true)
    }

    const containerSelecao = useRef('container-selecao')

    useEffect(() => {
       let classes = containerSelecao.current.classList;
       context.modalOn ? classes.remove('display-none') : classes.add('display-none');
    },[context.modalOn])


    return(
        <section ref={containerSelecao} className={`container-selecao container `} >
            <div onClick={test} ref={background} className='container-selecao-background'></div>
            <article>
                <div className='row'>
                    <div className='grid-8'>
                        <ProdutoDescription/>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default ContainerSelecao;