
import React, { useContext } from 'react'
import SearchDataContext from '../context/SearchDataContext'
import Card from "./Card"
import "./../App.css"
const SearchResults = () => {
    const { data } = useContext(SearchDataContext);

    return (
        <div className='search_results' style={{ margin: "0", padding: "0rem" }}>
            {data ? (
                data.map((data) => {
                    return (
                        <div className='img_container' key={data.id} >
                            <Card
                                data={data}
                            />
                        </div>
                    )
                })
            ) : ("")}
        </div>
    )
}

export default SearchResults;