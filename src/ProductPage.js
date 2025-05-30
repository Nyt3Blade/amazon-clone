import React, { useState } from 'react';
import './ProductPage.css';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function ProductPage() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [direction, setDirection] = useState('next');
    
    const slides = [
        {
            id: 1,
            image: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/GW/P42/Boult_3000x1200-PC._CB543542644_.jpg"
        },
        {
            id: 2,
            image: "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Media/BAU/PC_Hero_2x-toys_1._CB582765723_.jpg"
        },
        {
            id: 3,
            image: "https://images-eu.ssl-images-amazon.com/images/G/31/INSLGW/June25WRS/serve_pc_2x._CB793405190_.png"
        },
        {
            id: 4,
            image: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/uber_new_high._CB537689643_.jpg"
        },
        {
            id: 5,
            image: "https://images-eu.ssl-images-amazon.com/images/G/31/INSLGW/June25WRS/sd_pc_2x._CB793440700_.jpg"
        }
    ];

    const nextSlide = () => {
        if (currentSlide < slides.length - 1) {
            setDirection('next');
            setCurrentSlide(prev => prev + 1);
        }
    };

    const prevSlide = () => {
        if (currentSlide > 0) {
            setDirection('prev');
            setCurrentSlide(prev => prev - 1);
        }
    };

    const getSlideClass = (index) => {
        if (index === currentSlide) return 'active';
        if (index === currentSlide - 1) return 'prev';
        if (index === currentSlide + 1) return 'next';
        return '';
    };

    return (
        <>
            <div className="productPage__carousel">
                <div className="productPage__carouselContainer">
                    {slides.map((slide, index) => (
                        <div
                            key={slide.id}
                            className={`productPage__slide ${getSlideClass(index)}`}
                        >
                            <img 
                                src={slide.image} 
                                alt=""
                                className="productPage__slideImage"
                            />
                        </div>
                    ))}
                </div>
                
                <button 
                    className="productPage__arrow productPage__arrowLeft" 
                    onClick={prevSlide}
                    style={{ opacity: currentSlide === 0 ? 0.5 : 1 }}
                >
                    <ArrowBackIosNewIcon />
                </button>
                <button 
                    className="productPage__arrow productPage__arrowRight" 
                    onClick={nextSlide}
                    style={{ opacity: currentSlide === slides.length - 1 ? 0.5 : 1 }}
                >
                    <ArrowForwardIosIcon />
                </button>
            </div>
            <div className="productPage">
                {/* Content will go here */}
            </div>
        </>
    );
}

export default ProductPage; 