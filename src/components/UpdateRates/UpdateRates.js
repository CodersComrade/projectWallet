import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UpdateRates = () => {
    const [ratesList, setRatesList] = useState([]);
  const [base, setBase] = useState("USD");

  useEffect(() => {
    getRates("USD");
  }, []);

  const getRates = async (base) => {
    const res = await axios.get(
      ` http://api.exchangeratesapi.io/latest?base=${base}`
    );
    console.log("text:",res)
    
    const { rates } = res.data;
console.log("rates",rates);

    const ratesTemp = [];
    for (const [symbol, rate] of Object.entries(rates)) {
      ratesTemp.push({ symbol, rate });
    }
    setRatesList(ratesTemp);
  };
    return (
        <div className='container mt-5'>
            <h2>All Country Money Rates</h2>
            <select
                 className="custom-select w-50"
                value={base}
                onChange={(e) => {
                const value = e.target.value;
                setBase(value);
                getRates(value);
                }}
            >
                {ratesList.map((d) => (
                    <option value={d.symbol} key={d.symbol}>
                        {d.symbol}
                    </option>
                ))}
            </select>
            <ul className="list-group">
                {ratesList.map((d) => (
                <li className="list-group-item" key={d.symbol}>
                    {d.symbol} - {d.rate}
                </li>
                ))}
            </ul>
        </div>
    );
};

export default UpdateRates;