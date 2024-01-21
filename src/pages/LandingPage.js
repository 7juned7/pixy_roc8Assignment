import { SearchIcon } from '@chakra-ui/icons'
import BounceLoader from 'react-spinners/BounceLoader'
import React, { useContext, useState } from 'react'
import axios from "axios"
import Navbar from '../components/Navbar'

import SearchDataContext from '../context/SearchDataContext'
import SearchResults from '../components/SearchResults'
import Preview from '../components/Preview'


const LandingPage = () => {
    const { data, setData } = useContext(SearchDataContext);
    const [search, setSearch] = useState("");
    const { popup } = useContext(SearchDataContext)




    const handleClick = async () => {


        try {
            const { data } = await axios.get(`https://pixabay.com/api/?key=41898884-c00b64d38585a3fc154dbc711&q=${search}&image_type=photo/`)

            setData(data.hits);



        } catch (error) {
            console.log("error")
        }
    }

    return (
        <><div className='landingPage' style={{ backgroundRepeat: "no-repeat", objectFit: "contain" }

        }
        >


            <Navbar />
            {!popup ? ("") : (<Preview />)}

            {!data ? (<h3>Discover over 2,000,000 free Stock Images</h3>) : ("")}
            <div className="search">
                <div className="icon"><SearchIcon /></div>

                <input className='search_input' type="search" id='search'
                    placeholder='Search'
                    value={search}
                    onChange={(e) => { setSearch(e.target.value) }} />

                <div className="btn" onClick={handleClick}>GO!</div>
            </div>

            {data ? (<h3>Results :{search}</h3>) : ("")}





        </div >


            {data ? (<>

                <div className="results" >

                    <SearchResults />


                </div></>) : ("")}
        </>
    )
}

export default LandingPage