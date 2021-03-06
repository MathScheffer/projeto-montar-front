import React, { useContext, useEffect, useState } from 'react'
import { mapToArray } from '../../utils';
import { Hardware, SlotProdutoContainerContext, BotaoUi } from '../index';
import usePost from '../../customHooks/usePost';

import style from './Computador.module.css';

const ProdutoSelecionadoContainer = () => {
    const [thisProdutos, setThisProdutos] = useState();
    const context = useContext(SlotProdutoContainerContext);
    const { data, loading, error, request } = usePost();
    const [retorno, setRetorno] = useState();
    const [teste, setTeste] = useState(0);

    useEffect(() => {
        if(context.produto){
            setThisProdutos((thisProdutos) => mapToArray(new Map(context.produto)))
        }
    },[context])

    useEffect(() => {
        console.log(data)  
    },[data])

    const retornaNomeFormatado = (nomeHardware) => {
        
        switch(nomeHardware){
            case 'placa-mae':
                return "Placa Mãe";
                break;
            case "ram":
                return "Memória Ram";
                break;
            case "vga":
                return "Placa de Vídeo";
                break;
            case "processador":
                return "Processador";
                break;
            case "armazenamento":
                return "Armazenamento";
                break;
            default:
                return nomeHardware[0].toUpperCase()+nomeHardware.slice(1);
                break
        }
    }

    const hardwaresCategories = ['processador','placa-mae','armazenamento','ram','vga','fonte']

    const cadastrarComputador = () => {
        console.log('clickou')
        request('computador',{id:1})
        if(data)      
            console.log(data);
    }
    
    return (

        <section className={style.ComputadorContainer}>
            <h1>Seu computador aqui!</h1>

            {thisProdutos &&
                thisProdutos.map(keyValue =>
                    <div key={keyValue}>
                        <h2>{retornaNomeFormatado(keyValue[0])}</h2>
                        <Hardware hardware={keyValue[1]}/>
                    </div>
                )
            }
            <div className={`row ${style.botaoRowContainer}`}>
                <BotaoUi onClick={cadastrarComputador} className={style.botao} nome={"Montar"}/>
            </div>
        </section>
    )
}

export default ProdutoSelecionadoContainer
