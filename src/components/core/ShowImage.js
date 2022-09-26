import React from "react";
//import img from './../image/banana.jpg';
//import { API } from "../config";

const ShowImage = ({ item, url }) => {

    return(
        <div className="product-img">
        <div className="d-flex justify-content-center">
            <img
                // src={`${API}/${url}/photo/${item._id}`}
                // alt={item.name}
                // className="mb-3"
                // style={{ maxHeight: "100%", maxWidth: "100%" }}
                src= {require(`../image/${url}`)}
                alt="Image"
                className="mb-3"
                style={{ maxHeight: "20vh", maxWidth: "40vw" }}
            />
        </div>
        </div>
    )
};

export default ShowImage;
