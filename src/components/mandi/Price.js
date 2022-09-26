import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {getMandiApi} from '../../Config';
import Layout from '../core/Layout';
import Corosal from '../core/Corousel';
import MandiSearch from '../mandi/MandiSearch';
import PriceTable from './PriceTable';

const Price = () => {
    const [data, setData] = useState([]);

    const getData = () => {
        const api = getMandiApi(0, 1000);
        axios.get(api).then((response) => {
            console.log(response.data.records);
            setData(response.data.records);
        }).catch(error => {
            console.log(error);
        });
    };

    useEffect(() => {
        getData();
    }, []);

  return (
    <Layout
        title=""
        description=""
        className="container-fluid"
    >
        <Corosal/>
        <MandiSearch/>
        {/* <PriceTable data={data}/> */}
    </Layout>
  )
}

export default Price;