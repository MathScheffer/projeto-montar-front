import React, { createContext, useState } from 'react';

export const SlotProdutoContainerContext = createContext();

export const SlotProdutoProvider = ({children}) => {

    const [modalOn,setModalOn] = useState(false);

    return(
        <SlotProdutoContainerContext.Provider value={{modalOn,setModalOn}}>
            {children}
        </SlotProdutoContainerContext.Provider>
    )
}

