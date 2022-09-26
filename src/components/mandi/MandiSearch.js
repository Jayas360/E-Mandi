import React, { useState, useEffect } from "react";
import axios from "axios";
import { District } from "./District";
import { getMandiApi } from "../../Config";
import PriceTable from "./PriceTable";

const Search = () => {
    const [data, setData] = useState({
        districts: [],
        district: "",
        search: "",
        results: [],
        searched: false
    });

    const { districts, district, search, results, searched } = data;

    const loadCategories = () => {
        // getCategories().then(data => {
        //     if (data.error) {
        //         console.log(data.error);
        //     } else {
        //         setData({ ...data, categories: data });
        //     }
        // });
        setData(data => ({...data, districts: District}));
    };

    useEffect(() => {
        loadCategories();
    }, []);

    const searchData = () => {
        // console.log(search, category);
        // if (search) {
        //     list({ search: search || undefined, district: district }).then(
        //         response => {
        //             if (response.error) {
        //                 console.log(response.error);
        //             } else {
        //                 setData({ ...data, results: response, searched: true });
        //             }
        //         }
        //     );
        // }
        var api = getMandiApi(0, 1000, district);
        axios.get(api).then((response) =>{
            setData({ ...data, results: response.data.records, searched: true });
            console.log(data);
        }).catch(error =>{
            console.log(error);
        } );
        
    };

    const searchSubmit = e => {
        e.preventDefault();
        searchData();
    };

    const handleChange = name => event => {
        setData({ ...data, [name]: event.target.value, searched: false });
        console.log(district);
    };

    const searchMessage = (searched, results) => {
        if (searched && results.length > 0) {
            return `Found ${results.length} products`;
        }
        if (searched && results.length < 1) {
            return `No products found`;
        }
    };

    const searchedProducts = (results = []) => {
        return (
            <div>
                <h2 className="mt-4 mb-4">
                    {searchMessage(searched, results)}
                </h2>

                <PriceTable data={results}/>

            </div>
        );
    };

    const searchForm = () => (
        <div id="search" >
        <form onSubmit={searchSubmit}>
            <span className="input-group-text">
                <div className="input-group input-group-lg">
                    <div className="input-group-prepend" id="catogory-select-parent">
                        <select
                            className="btn mr-2"
                            onChange={handleChange("district")}
                            id="district-select"
                        >
                            <option value="" id="option-search" selected>All</option>
                            {districts.map((name) => (
                                <option key={name} value={name}>
                                    {name}
                                </option>
                            ))}
                        </select>
                    </div>
                   
                    <input
                        type="search"
                        className="form-control"
                        id="search-by-district"
                        onChange={handleChange("search")}
                        placeholder="Search by district"
                        value={data.district}
                    />
                  
                </div>
                <div
                    className="input-group-append ml-2"
                    style={{ border: "none" }}
                >
                <button className="input-group-text" id="search-button" onClick={(e) => searchSubmit}>Search</button>
                </div>
            </span>
        </form>
        </div>
    );

    return (
        <div className="row">
            <div className="container mb-3">{searchForm()}</div>
            <div className="container-fluid mb-3">
                {searchedProducts(results)}
            </div>
        </div>
    );
};

export default Search;
