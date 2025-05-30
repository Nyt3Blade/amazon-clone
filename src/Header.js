import React, { useState, useEffect } from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Header() {
  const [location, setLocation] = useState('Select your address');
  const [showLocationPrompt, setShowLocationPrompt] = useState(false);
  const [showSignInDropdown, setShowSignInDropdown] = useState(false);
  const [showAllDropdown, setShowAllDropdown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All Categories');

  const categories = [
    'All Categories',
    'Alexa Skills',
    'Amazon Devices',
    'Amazon Fashion',
    'Amazon Pharmacy',
    'Appliances',
    'Apps & Games',
    'Audible Audiobook',
    'Baby',
    'Beauty',
    'Books',
    'Car & Motorbike',
    'Clothing & Accessories',
    'Collectibles',
    'Computers & Accessories',
    'Deals',
    'Electronics',
    'Furniture',
    'Garden',
    'Giftcard',
    'Grocery',
    'Health & Personalcare',
    'Home & Kitchen',
    'Industrial & Scientific',
    'Jewellery'
  ];

  useEffect(() => {
    // Check if location permission was previously granted
    const savedLocation = localStorage.getItem('userLocation');
    if (savedLocation) {
      setLocation(savedLocation);
    }
  }, []);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const { latitude, longitude } = position.coords;
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
            );
            const data = await response.json();
            const address = data.display_name.split(',')[0];
            setLocation(address);
            localStorage.setItem('userLocation', address);
            setShowLocationPrompt(false);
          } catch (error) {
            console.error('Error getting location:', error);
            setLocation('Location unavailable');
          }
        },
        (error) => {
          console.error('Error getting location:', error);
          setLocation('Location denied');
        }
      );
    } else {
      setLocation('Geolocation not supported');
    }
  };

  const handleLocationClick = () => {
    if (!localStorage.getItem('userLocation')) {
      setShowLocationPrompt(true);
      getLocation();
    }
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setShowAllDropdown(false);
  };

  return (
    <div className='header'>
        <a href="https://www.amazon.com">
          <img className='header__logo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon logo" />
        </a>

        <div className='header__location' onClick={handleLocationClick}>
            <LocationOnIcon className='header__locationIcon' />
            <div className='header__locationText'>
                <span className='header__optionLineOne'>Delivering to</span>
                <span className='header__optionLineTwo'>{location}</span>
            </div>
        </div>

        <div className='header__search'>
            <div 
                className='header__searchAll'
                onMouseEnter={() => setShowAllDropdown(true)}
                onMouseLeave={() => setShowAllDropdown(false)}
            >
                <span>{selectedCategory}</span>
                <KeyboardArrowDownIcon style={{ fontSize: 20 }} />
                
                {showAllDropdown && (
                    <div className='header__allDropdown'>
                        {categories.map((category, index) => (
                            <div 
                                key={index}
                                className='header__allDropdownItem'
                                onClick={() => handleCategorySelect(category)}
                            >
                                {category}
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <input className='header__searchInput' type="text"></input>
            <div className='header__searchIcon'>
                <SearchIcon style={{ fontSize: 30 }} />
            </div>
        </div>

        <div className='header__nav'>
            <div 
                className='header__option header__signIn'
                onMouseEnter={() => setShowSignInDropdown(true)}
                onMouseLeave={() => setShowSignInDropdown(false)}
            >
                <div className="header__signInContent">
                    <div className="header__signInText">
                        <span className='header__optionLineOne'>Hello, sign in</span>
                        <span className='header__optionLineTwo'>Account & Lists</span>
                    </div>
                    <KeyboardArrowDownIcon className="header__signInArrow" />
                </div>
                
                {showSignInDropdown && (
                    <div className='header__signInDropdown'>
                        <div className='header__signInDropdownTop'>
                            <button className='header__signInButton'>Sign in</button>
                            <p className='header__signInText'>New customer? <a href="#">Start here.</a></p>
                        </div>
                        
                        <div className='header__signInDropdownContent'>
                            <div className='header__signInDropdownColumn'>
                                <h3>Your Lists</h3>
                                <ul>
                                    <li><a href="#">Create a Wish List</a></li>
                                    <li><a href="#">Wish from Any Website</a></li>
                                    <li><a href="#">Baby Wishlist</a></li>
                                    <li><a href="#">Discover Your Style</a></li>
                                    <li><a href="#">Explore Showroom</a></li>
                                </ul>
                            </div>
                            
                            <div className='header__signInDropdownColumn'>
                                <h3>Your Account</h3>
                                <ul>
                                    <li><a href="#">Your Account</a></li>
                                    <li><a href="#">Your Orders</a></li>
                                    <li><a href="#">Your Wish List</a></li>
                                    <li><a href="#">Your Recommendations</a></li>
                                    <li><a href="#">Your Prime Membership</a></li>
                                    <li><a href="#">Your Prime Video</a></li>
                                    <li><a href="#">Your Subscribe & Save Items</a></li>
                                    <li><a href="#">Memberships & Subscriptions</a></li>
                                    <li><a href="#">Your Seller Account</a></li>
                                    <li><a href="#">Manage Your Content and Devices</a></li>
                                    <li><a href="#">Register for a free Business Account</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className='header__option'>
              <span className='header__optionLineOne'>Returns</span>
              <span className='header__optionLineTwo'>& Orders</span>
            </div>

            <div className='header__optionBasket'>
              <ShoppingCartOutlinedIcon />
              <span className='header__optionLineTwo header__basketCount'>0</span>
            </div>
        </div>

        {showLocationPrompt && (
            <div className='header__locationPrompt'>
                <p>Please allow location access to see delivery options for your area.</p>
            </div>
        )}
    </div>
  )
}

export default Header