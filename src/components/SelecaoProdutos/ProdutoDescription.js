import React, { useContext, useEffect,useState } from 'react'
import {Link} from 'react-router-dom'
import { ProcessadorModel } from '../../model'
import {escolheInstancia} from '../../utils';
import { SlotProdutoContainerContext } from '../ContainerProduto/SlotProdutoContainerProvider'
import style from './ProdutoDescription.module.css'

const ProdutoDescription = ({produto,setProduto,categoria}) => {
    console.log(categoria)
    
    const [description,setDescription] = useState(null);
    const [classProduto,setClassProduto] = useState(null);
    const context = useContext(SlotProdutoContainerContext);

    useEffect(() => {
        console.log(categoria)
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
    }
    return (
        <>
        {(context.produto && categoria)&&
            <div onClick={enviarProduto} className={`row ${style.produtoDescricaoContainer}`}>
                <div className={`grid-4 ${style.produtoDescricaoImgContainer}`}>
                    <img></img>
                </div>
                <div className={`grid-8 ${style.produtoDescricao}`}>
                    <h3>{produto.nome}</h3>
                    
                    <p>{description ? description : "INTEL CORE I7-10700KF, 4Ghz (up to 5GHZ),LGA1200"}</p>
                </div> 
            </div>
        }
        </>
    )
}

export default ProdutoDescription
