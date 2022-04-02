import React from 'react';
import Service from '../Service/Service';

const Services = () => {
    const services = [
        { name: 'Income', amount: 3000 },
        { name: 'Savings', amount: 10000 },
        { name: 'Expenditure', amount: 1000 },
        { name: 'Loans', amount: 0 },
    ]

    return (
        <div class="container">
            <div class="row">
                {
                    services.map(service => <Service
                        key={service.name}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;