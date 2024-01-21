import axios from 'axios';
import React, { useEffect, useState } from 'react'
import SearchDataContext from './SearchDataContext';

const SearchDataContextProvider = ({ children }) => {
    const [data, setData] = useState();
    const [popup, setPopup] = useState()




    return (
        <SearchDataContext.Provider value={{ data, setData, popup, setPopup }}>
            {children}
        </SearchDataContext.Provider>
    )
}
export default SearchDataContextProvider;