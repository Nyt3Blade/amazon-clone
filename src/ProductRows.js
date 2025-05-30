import React from 'react';
import './ProductRows.css';

function ProductRows() {
    const rows = [
        {
            title: "Appliances for your home | Up to 55% off",
            items: ["Air conditioners", "Refrigerators", "Microwaves", "Washing machines", "See more"],
            images: [
                "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg",
                "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg",
                "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg",
                "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg"
            ]
        },
        {
            title: "Revamp your home in style",
            items: ["Cushion covers, bedsheets & more", "Figurines, vases & more", "Home storage", "Lighting solutions", "Explore all"],
            images: [
                "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_furnishings_2._SY116_CB555624324_.jpg",
                "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_decor_1._SY116_CB555624324_.jpg",
                "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_storage_1._SY116_CB555624324_.jpg",
                "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_lighting_2._SY116_CB555624324_.jpg"
            ]
        },
        {
            title: "Starting ₹149 | Headphones",
            items: ["Starting ₹249 | boAt", "Starting ₹349 | boult", "Starting ₹649 | Noise", "Starting ₹149 | Zebronics", "See all offers"],
            images: [
                "https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_boAt_0.5x._SY116_CB553870684_.jpg",
                "https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_Boult_0.5x._SY116_CB553870684_.jpg",
                "https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_Noise_0.5x._SY116_CB553870684_.jpg",
                "https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/MSO/PD3/PC_QuadCard_Zeb_0.5x_1._SY116_CB570220221_.jpg"
            ]
        },
        {
            title: "Under ₹499 | Deals on home improvement essentials",
            items: ["Under ₹199 | Cleaning supplies", "Under ₹399 | Bathroom accessories", "Under ₹499 | Home tools", "Under ₹299 | Wallpapers", "Explore all"],
            images: [
                "https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Wipes_low_res_V1._SY116_CB549138744_.jpg",
                "https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Shower_heads_low_res_V1._SY116_CB549138744_.jpg",
                "https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Tools_low_res_V1._SY116_CB549138744_.jpg",
                "https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Wallpapers_low_res_V1._SY116_CB549138744_.jpg"
            ]
        },
        {
            title: "Automotive essentials | Up to 60% off",
            items: ["Cleaning accessories", "Tyre & rim care", "Helmets", "Vacuum cleaner", "See more"],
            images: [
                "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Glasscare1X._SY116_CB410830553_.jpg",
                "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Rim_tyrecare1x._SY116_CB410830552_.jpg",
                "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vega_helmet_186x116._SY116_CB405090404_.jpg",
                "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vaccum1x._SY116_CB410830552_.jpg"
            ]
        },
        {
            title: "Starting ₹199 | Amazon Brands & more",
            items: ["Starting ₹199 | Bedsheets", "Starting ₹199 | Curtains", "Minimum 40% off | Ironing board & more", "Up to 60% off | Home decor", "See more"],
            images: [
                "https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_186_2._SY116_CB567468236_.jpg",
                "https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_186_3._SY116_CB567468236_.jpg",
                "https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_186_4._SY116_CB567468236_.jpg",
                "https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_186_1._SY116_CB567468236_.jpg"
            ]
        },
        {
            title: "Min. 40% off | Fun toys & games | Amazon Brands",
            items: ["Min. 40% off | soft toys", "Min. 50% off | Ride ons", "Min. 40% off | Indoor games", "Min. 50% off | outdoor games", "See all offers"],
            images: [
                "https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW_CPB_/QC_CC/Baby_toys/baby/QC_PC_186x116_9._SY116_CB563558900_.jpg",
                "https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW_CPB_/QC_CC/Baby_toys/toys/QC_PC_186x116_22._SY116_CB541411275_.jpg",
                "https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW_CPB_/QC_CC/Baby_toys/toys/QC_PC_186x116_13._SY116_CB541414575_.jpg",
                "https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW_CPB_/QC_CC/Baby_toys/toys/QC_PC_186x116_16._SY116_CB541411275_.jpg"
            ]
        },
        {
            title: "Up to 60% off | Styles for women",
            items: ["Women's Clothing", "Footwear+Handbags", "Watches", "Fashion jewellery", "End of season sale"],
            images: [
                "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF1-186-116._SY116_CB636048992_.jpg",
                "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF2-186-116._SY116_CB636048992_.jpg",
                "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF4-186-116._SY116_CB636048992_.jpg",
                "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF3-186-116._SY116_CB636048992_.jpg"
            ]
        }
    ];

    const carouselImages1 = [
        'https://m.media-amazon.com/images/I/51RETdNXFnL._AC_SY200_.jpg',
        'https://m.media-amazon.com/images/I/71SK+NICSQL._AC_SY200_.jpg',
        'https://m.media-amazon.com/images/I/61OijEl6W4L._AC_SY200_.jpg',
        'https://m.media-amazon.com/images/I/81J5QCsWADL._AC_SY200_.jpg',
        'https://m.media-amazon.com/images/I/51Fj9-AE-RL._AC_SY200_.jpg',
        'https://m.media-amazon.com/images/I/71n4K-Esb-L._AC_SY200_.jpg',
        'https://m.media-amazon.com/images/I/61-45StGyOL._AC_SY200_.jpg',
        'https://m.media-amazon.com/images/I/71v7zmRkbVL._AC_SY200_.jpg',
        'https://m.media-amazon.com/images/I/51P+ifsD0FL._AC_SY200_.jpg',
        'https://m.media-amazon.com/images/I/71q57bditML._AC_SY200_.jpg',
        'https://m.media-amazon.com/images/I/51SbsMgGyFL._AC_SY200_.jpg'
    ];

    const carouselImages2 = [
        'https://m.media-amazon.com/images/I/510BG1QXhDL._AC_SY200_.jpg',
        'https://m.media-amazon.com/images/I/51vaKJu6iOL._AC_SY200_.jpg',
        'https://m.media-amazon.com/images/I/6105IZJUKcL._AC_SY200_.jpg',
        'https://m.media-amazon.com/images/I/51nIHi7R08L._AC_SY200_.jpg',
        'https://m.media-amazon.com/images/I/41mPE5QO3bL._AC_SY200_.jpg',
        'https://m.media-amazon.com/images/I/61R1R+tsmLL._AC_SY200_.jpg',
        'https://m.media-amazon.com/images/I/61WFT6Ch-qL._AC_SY200_.jpg',
        'https://m.media-amazon.com/images/I/61SDTiZdvHL._AC_SY200_.jpg',
        'https://m.media-amazon.com/images/I/71R1XDJWBJL._AC_SY200_.jpg',
        'https://m.media-amazon.com/images/I/51HsQQVjITL._AC_SY200_.jpg',
        'https://m.media-amazon.com/images/I/51fkuQtreKL._AC_SY200_.jpg',
        'https://m.media-amazon.com/images/I/517w9uOl3aL._AC_SY200_.jpg',
        'https://m.media-amazon.com/images/I/61tTj89JyYL._AC_SY200_.jpg',
        'https://m.media-amazon.com/images/I/71hvf8rYSGL._AC_SY200_.jpg',
        'https://m.media-amazon.com/images/I/31XZ17+7RRL._AC_SY200_.jpg'
    ];

    // Split rows into groups of 4
    const rowGroups = [];
    for (let i = 0; i < rows.length; i += 4) {
        rowGroups.push(rows.slice(i, i + 4));
    }

    return (
        <div className="productRows">
            {rowGroups.map((group, index) => (
                <div key={index} className="productRows__row">
                    {group.map((row, rowIndex) => (
                        <div key={rowIndex} className="productRows__box">
                            <h2 className="productRows__title">{row.title}</h2>
                            <div className="productRows__images">
                                {row.images.map((image, imageIndex) => (
                                    <div key={imageIndex} className="productRows__imageContainer">
                                        <img src={image} alt="" className="productRows__image" />
                                        <p className="productRows__item">{row.items[imageIndex]}</p>
                                    </div>
                                ))}
                            </div>
                            <p className="productRows__item">See more</p>
                        </div>
                    ))}
                </div>
            ))}
            
            <div className="productRows__carousel">
                <div className="productRows__carouselHeader">
                    <h2>Up to 60% off | Top picks, best offers from Small Businesses</h2>
                    <a href="#" className="productRows__item">See more</a>
                </div>
                <div className="productRows__carouselContainer">
                    {carouselImages1.map((image, index) => (
                        <img key={index} src={image} alt="" className="productRows__carouselImage" />
                    ))}
                </div>
            </div>

            <div className="productRows__carousel">
                <div className="productRows__carouselHeader">
                    <h2>Up to 75% off | Get casual ready from Small Businesses</h2>
                    <a href="#" className="productRows__item">See more</a>
                </div>
                <div className="productRows__carouselContainer">
                    {carouselImages2.map((image, index) => (
                        <img key={index} src={image} alt="" className="productRows__carouselImage" />
                    ))}
                </div>
            </div>

            <div className="productRows__banner">
                <img 
                    src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/b225c3a3-e401-495a-82a4-e6a22b892a46.jpg" 
                    alt="Amazon Banner" 
                    className="productRows__bannerImage"
                />
            </div>

            


        </div>
    );
}

export default ProductRows; 