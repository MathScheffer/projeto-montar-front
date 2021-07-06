import React, { createContext, useState } from 'react';

export const SlotProdutoContainerContext = createContext();

export const SlotProdutoProvider = ({children}) => {

    const [modalOn,setModalOn] = useState(false);
    const [produto,setProduto] = useState(new Map());
    const [iterador,setIterador] = useState(0);
    return(
        <SlotProdutoContainerContext.Provider value={{ iterador,setIterador,modalOn,setModalOn,produto,setProduto}}>
            {children}
        </SlotProdutoContainerContext.Provider>
    )
}

