import React from 'react';

const Service = ({ service }) => {
    const { name, amount } = service;
    return (
        <div class="col border border-1 rounded-3 bg-primary mx-5">
            <p class="fs-3 text-white">{name}</p>
            <p class="fs-4 text-white">{amount}</p>

        </div>
    );
};

export default Service;