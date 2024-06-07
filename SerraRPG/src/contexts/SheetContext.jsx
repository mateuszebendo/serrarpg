import React, { createContext, useState } from 'react';

export const SheetInfoContext = createContext();

export default function SheetInfoProvider({ children }) {
    const [sheetInfo, setSheetInfo] = useState({});

    function addInformation(newInfo) {
        setSheetInfo([...sheetInfo, newInfo]);
    }

    function removeInformation(oldInfo) {
        for (let chave in sheetInfo) {
            if (sheetInfo[chave] === oldInfo) {
                delete sheetInfo[chave];
                break;
            }
        }
    }
    
    return (
        <SheetInfoContext.Provider value={{ sheetInfo, addInformation }}>
            {children}
        </SheetInfoContext.Provider>
    )
}