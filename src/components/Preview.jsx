import { CheckIcon, CloseIcon } from '@chakra-ui/icons'
import React, { useState } from 'react'
import { useContext } from 'react'
import SearchDataContext from '../context/SearchDataContext'

const Preview = () => {
    const { popup, setPopup } = useContext(SearchDataContext)
    const [selected, setSelected] = useState("");
    const [selectedBox, setSelectedBox] = useState("")

    const size = [{
        "id": "small",
        "size": "Small",
        "ratio": "640x960",

    },
    {
        "id": "medium",
        "size": "Medium",
        "ratio": "1920x2660"
    },
    {
        "id": "big",
        "size": "Big",
        "ratio": "2400x3600"
    },
    { "id": "original", "size": "Original", "ratio": "3850x5640" }
    ]


    const handleClose = () => {
        setPopup()
    }
    const handleSelect = (e) => {
        const size = e.target.parentElement.id
        console.log(size)
        console.log(e.target)
        setSelectedBox(size)
        if (size === "small") {
            setSelected(popup.data.previewURL)
        }

        if (size === "medium") {
            setSelected(popup.data.webformatURL)
        }
        if (size === "big") {
            setSelected(popup.data.largeImageURL)
        }
        if (size === "original") {
            setSelected(popup.data.userImageURL)
        }



    }

    const handleDownload = () => {
        const fileName = "download"
        const aTag = document.createElement("a");
        aTag.href = selected;
        aTag.click();
        aTag.remove();


    }

    return (
        <div className="preview_container">
            <div className="preview_nav">
                <p>Preview ID : {popup.data.id}</p>
                <button className='close' onClick={handleClose} ><CloseIcon borderRadius={"10px"}
                    border={"none"} /></button>
            </div>
            <div className="preview">
                <div className="img_preview">
                    <img src={popup.data.largeImageURL} alt="" />
                    <div className="tags">
                        <span>Tags:  {popup.data.tags}</span>

                    </div>
                </div>
                <div className="preview_right_side">

                    <div className="download">
                        <span className='spantxt' >Download</span>
                        <div className="option">

                            {size.map((data) => {

                                return (<div className="box" id={data.id} onClick={handleSelect} style={{ background: selectedBox === data.id ? '#DEE8F4' : '' }} >
                                    <div className="size"  >
                                        <p>{data.size}</p>
                                        <p>{data.ratio}</p>
                                    </div>
                                    <div className="tick" style={{ background: selectedBox === data.id ? '#4BC34B' : "" }}>{selectedBox === data.id && <CheckIcon />}</div>
                                </div>)
                            })}





                        </div>
                        <button className='download_btn' onClick={handleDownload} >Download for free!</button>
                    </div>
                    <div className="information_side">
                        <span className='spantxt' >Information</span>
                        <div className="information">

                            <div className="user info"><p>User</p><p>{popup.data.user}</p></div>
                            <div className="userId info"><p>User ID</p><p>{popup.data.user_id}</p></div>
                            <div className="type info"><p>Type</p><p>{popup.data.type}</p></div>
                            <div className="Views info"><p>Views</p><p>{popup.data.views}</p></div>
                            <div className="downloads info"><p>Downloads</p><p>{popup.data.downloads}</p></div>
                            <div className="likes info"><p>Likes</p><p>{popup.data.likes}</p></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Preview;