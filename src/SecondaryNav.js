import React from 'react';
import './SecondaryNav.css';
import MenuIcon from '@mui/icons-material/Menu';

function SecondaryNav() {
    const navItems = [
        'All',
        'MX Player',
        'Sell',
        'Bestsellers',
        "Today's Deals",
        'Mobiles',
        'Prime',
        'Customer Service',
        'Fashion',
        'New Releases',
        'Amazon Pay',
        'Electronics',
        'Home & Kitchen',
        'Car & Motorbike',
        'Computers',
        'Books',
        
    ];

    return (
        <div className="secondaryNav">
            <div className="secondaryNav__container">
                <div className="secondaryNav__item secondaryNav__all">
                    <MenuIcon className="secondaryNav__menuIcon" />
                    <span>All</span>
                </div>
                {navItems.slice(1).map((item, index) => (
                    <div key={index} className="secondaryNav__item">
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SecondaryNav; 