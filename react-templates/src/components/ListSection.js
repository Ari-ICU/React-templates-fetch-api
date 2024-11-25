import React from 'react';

const ListSection = () => {
    // Data for the list items
    const listItems = [
        {
            icon: 'fas fa-shipping-fast',
            title: 'Free Shipping',
            description: 'When order over $75',
        },
        {
            icon: 'fas fa-phone-volume',
            title: '24/7 Support',
            description: 'Get support all day',
        },
        {
            icon: 'fas fa-sync',
            title: 'Refund',
            description: 'Get refund within 3 days!',
        },
    ];

    return (
        <div className="list-section pt-80 pb-80">
            <div className="container">
                <div className="row">
                    {listItems.map((item, index) => (
                        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0" key={index}>
                            <div className="list-box d-flex align-items-center">
                                <div className="list-icon">
                                    <i className={item.icon}></i>
                                </div>
                                <div className="content">
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ListSection;
