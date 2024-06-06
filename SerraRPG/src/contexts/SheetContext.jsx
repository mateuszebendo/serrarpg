import React, {createContext, useState} from 'react';

export const sheetInfo = createContext(); 

export default function SheetInfoProvider ({children}) {
    const [sheetInfo, setSheetInfo] = useState({});

    return (
        <sheetInfo.Provider valu={{sheetInfo}}>
            {children}
        </sheetInfo.Provider>
    )
}