import React, { useContext, useEffect,useState } from 'react'
import {Link} from 'react-router-dom'
import { ProcessadorModel } from '../../model'
import {escolheInstancia} from '../../utils';
import { SlotProdutoContainerContext } from '../ContainerProduto/SlotProdutoContainerProvider'
import usePost from '../../customHooks/usePost';
import style from './ProdutoDescription.module.css'

const ProdutoDescription = ({produto,setProduto,categoria}) => {

    
    const [description,setDescription] = useState(null);
    const [classProduto,setClassProduto] = useState(null);
    const { data, loading, error, request } = usePost();
    const context = useContext(SlotProdutoContainerContext);

    useEffect(() => {
        setClassProduto((classProduto) => escolheInstancia(categoria,produto))
        //console.log(classProduto)
    },[categoria])

    useEffect(() => {
        if(classProduto){
            if(classProduto.getDescription().includes(undefined)){
                //console.log('Undefined!')
                setDescription(() => null)
            }else{
                setDescription((description) => classProduto.getDescription())
            }
        }

    },[categoria,classProduto]);

    
    const enviarProduto = () => {
        let produtoTemp = produto;
        produtoTemp.description = description
        context.setProduto((prod) => prod.set(categoria, produtoTemp))

        request(categoria,{id:produtoTemp.id});

        if(data){
            console.log(data)
        }

        context.setModalOn(false);
    }

    return (
        <>
        {(context.produto && categoria)&&
            <div onClick={enviarProduto} className={`row ${style.produtoDescricaoContainer}`}>
                <div className={`grid-4 ${style.produtoDescricaoImgContainer}`}>
                    <img src={produto.img}/>
                </div>
                <div className={`grid-8 ${style.produtoDescricao}`}>
                    <h3>{produto.nome}</h3>
                    
                    <p>{description ? description : ""}</p>
                </div> 
            </div>
        }
        </>
    )
}

export default ProdutoDescription
