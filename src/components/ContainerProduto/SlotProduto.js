import React, { useContext, useEffect, useState } from 'react';
import {BotaoUi, ContainerSelecao,SlotProdutoContainerContext} from '../index'
import {escolheInstancia} from '../../utils';
//import img from '../../img/delta-rgb-pichau.jpg'
import style from './Slot.module.css';
const img = require('../../img/delta-rgb-pichau.jpg')
console.log(img.default)
const SlotProduto = (infos) => {
    const [description,setDescription] = useState();

    const context = useContext(SlotProdutoContainerContext);
    const categoria = infos.categoria
    const [classProduto,setClassProduto] = useState(null);
    //const [img,setImg] = useState();



/*     useEffect(() => {
        if(categoria && context && context.produto && context.produto.get(categoria) && context.produto.get(categoria).img){
            setImg((img) => require(context.produto.get(categoria).img))
        }
    },[categoria,context,context.produto]) */

    useEffect(() => {
        if(categoria && context && context.produto && context.produto.get(categoria)){
            setClassProduto((classProduto) => escolheInstancia(categoria,context.produto.get(categoria)));
        }
    },[categoria,context,context.produto])

    function montaListaEspecificacoes(description){
        let list = [];
        description.forEach((value,key) => {
            list.push([key,value])
        })
        return list;
    }

    useEffect(() => {
        if(classProduto){
            if(classProduto.getDescription().includes(undefined)){
                console.log('Undefined!')
                setDescription(() => null)
            }else{
                setDescription(() => montaListaEspecificacoes(classProduto.getList()))
            }
        }

    },[context.produto,categoria])

    const [thisProduto,setThisProduto] = useState()

    if(context.produto){
        //console.log(categoria)
        if(context.produto.get(categoria)){
            //console.log(context.produto.get(categoria))
        }
    }
    const changeModal = () =>{
        context.setModalOn(true);
    }
    useEffect(() =>{
       // console.log(context.produto)
    },[context.produto])


    const retornaLiComDescricao = (produto,categoria) => {
        
        const instanciaEscolhia = escolheInstancia(categoria,produto);
        const map = instanciaEscolhia.getList();
        let list = []
        map.forEach((value,key) =>{
            list.push([key,value])
        })
        if(list.length>0){
            console.log(list);

        }
        return list.map(keyValue =>
                 <li key={`${keyValue[0]}-${keyValue[1]}`}>{keyValue[0]}:{keyValue[1]}</li>
        )
    }
    let img2 = process.env.PUBLIC_URL + '../../img/delta-rgb-pichau.jpg'
    return(
    <div className='row'>
        <div className={`grid-8 ${style.slotProduto}`}> 
            <div className={`row ${style.flexColumn}`}>
                {infos.infos && 
                    <>
                        <div className={`grid-12 ${style.justifyCenter}`}>
                            <h2>{context.produto && context.produto.get(categoria) ? 
                                context.produto.get(categoria).nome :
                                infos.infos.nome}</h2>
                        </div>
                        <div className="grid-12">
                            <div className={style.prodInfos}>
                                <div className={style.imgContainer}>
                                    {context.produto && context.produto.get(categoria) && context.produto.get(categoria).img &&
                                        <img src={context.produto.get(categoria).img}/>
                                    }
                                </div>
                                {description &&
                                <ul>
                                    {(context.produto && context.produto.get(categoria)) ? 
                                        context.produto.get(categoria).description :
                                        ""
                                        //retornaLiComDescricao(context.produto.get(categoria),categoria)
                                        
                                    }
                                </ul>
                                }
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