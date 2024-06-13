import React, { useState, createRef } from "react";
import { useSearchParams } from 'react-router-dom';
import Text from "../Components/Text";
import { exportComponentAsJPEG } from 'react-component-export-image';
import '../App.css';

const Editpage = () => {
    const [params] = useSearchParams();
    const [count, setCount] = useState(0);
    const [textColor, setTextColor] = useState("#000000"); // Initial color is black
    const addText = () => {
        setCount(count + 1);
    }
    const memeRef = createRef();

    const handleColorChange = (event) => {
        setTextColor(event.target.value);
    }

    return (
        <div className="edit-page">
            <div className="meme-box" ref={memeRef}>
                <img src={params.get("url")} alt="" className="meme-image" />
                {Array(count).fill(0).map((e, index) => <Text key={index} color={textColor} />)}
            </div>
            <button className="add-text" onClick={addText}>Add Text</button>
            <input type="color" value={textColor} onChange={handleColorChange} />
            <button className="save" onClick={() => exportComponentAsJPEG(memeRef)}>Save</button>
        </div>
    );
}

export default Editpage;
