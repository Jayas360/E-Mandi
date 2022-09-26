import React from 'react'

const PriceTable = ({data}) => {
  return (
    <div class="container p-3 mb-2 bg-success text-white">
    <h2>Mandi Price</h2>
    <div>
        <table class="table table-sm">
            <caption class="text-white">Prices of different commodities</caption>
            <tr class="table-active">
                <th>State</th>
                <th>District</th>
                <th>Market</th>
                <th>Commodity</th>
                <th>Min_Price</th>
                <th>Max_Price</th>
            </tr>
            {
                data.map((dt) => (
                    <tr key={dt.district+dt.commodity} class="table-info">
                        <td>{dt.state}</td>
                        <td>{dt.district}</td>
                        <td>{dt.market}</td>
                        <td>{dt.commodity}</td>
                        <td>{dt.min_price}</td>
                        <td>{dt.max_price}</td>
                    </tr>
                ))
            }
        </table>
    </div>
</div>
  )
};

export default PriceTable