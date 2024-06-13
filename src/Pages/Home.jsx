import React, { useEffect, useState } from "react";
import Memecard from "../Components/Card";
import { getAllMemes } from "../api/memes";
import '../App.css';

const Homepage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getAllMemes().then((memes) => {
            setData(memes.data.memes);
        });
    }, []);

    return (
        <div className="container">
            <div className="row">
                {
                    data.map((ele) => (
                        <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={ele.id}>
                            <Memecard img={ele.url} title={ele.name} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Homepage;
