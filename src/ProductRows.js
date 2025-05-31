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
                    <h2>Up to 60% off | Top picks from Small Businesses</h2>
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
                    <h2>Up to 75% off | Best deals from Small Businesses</h2>
                    <a href="#" className="productRows__item">See more</a>
                </div>
                <div className="productRows__carouselContainer">
                    {carouselImages2.map((image, index) => (
                        <img key={index} src={image} alt="" className="productRows__carouselImage" />
                    ))}
                </div>
            </div>

            <div className="productRows__row">
                <div className="productRows__box">
                    <h2 className="productRows__title">Min. 40% off | Handcrafted treasures from artisans</h2>
                    <div className="productRows__items">
                        <p className="productRows__item">CartaDen Wooden Serving Trays Unique Style with Round Handle Large, Medium and Small for Food, Wooden Trays for...</p>
                        <p className="productRows__item">₹759.00 M.R.P: ₹1,499.00</p>
                        <p className="productRows__item">Corazzin Garden Patio Seating Chair and Table Set Outdoor Balcony Garden Coffee Table Set Furniture with 1 Table and 4...</p>
                        <p className="productRows__item">SMAART CRAAFTS Osho Rattan 2 Door Cabinet | Spiral Carving Sideboard with Shelf Storage | Cane Design Cabinet for Living...</p>
                        <p className="productRows__item">Adichwal Furniture Solid Sheesham Wood 6 Seater Dining Table Set with Cushioned Chairs for Dining Room | Living Room |...</p>
                    </div>
                </div>

                <div className="productRows__box">
                    <h2 className="productRows__title">Best Sellers in Clothing & Accessories</h2>
                    <div className="productRows__items">
                        <p className="productRows__item">GoSriKi Women's Rayon Blend Anarkali Printed Kurta with Pant & Dupatta & Dupatta (CIA Yellow-GS_XL_Yellow_X-Large)</p>
                        <p className="productRows__item">Allen Solly Men's Plain Regular Fit Cotton Polo (AMKP317G04249_Jet Black_Large)</p>
                        <p className="productRows__item">SJeware 12 Pairs Solid Cotton Ankle Length Socks for Men & Women, Multicolor, Pack of 12, Free Size</p>
                        <p className="productRows__item">ANNI DESIGNER Women's Rayon Blend Straight Solid Kurta with Pant & Dupatta (Raja Saab Purple-VKS01_L_Purple_Large)</p>
                    </div>
                </div>

                <div className="productRows__box">
                    <h2 className="productRows__title">Customers' Most-Loved Fashion for you</h2>
                    <div className="productRows__items">
                        <p className="productRows__item">FUNDAY FASHION Cotton Half Sleeve Printed Oversized T-Shirt For Womens/Girls (Pack Of 2, Small, Grey & Pink)</p>
                        <p className="productRows__item">Allen Solly Men's Regular Fit Polo (ASKPQRGF701338_Medium Blue_L)</p>
                        <p className="productRows__item">Puma Men, Melanite Slip on, Cool Dark Gray-Black-White, Sneaker, 8UK, (39185802)</p>
                        <p className="productRows__item">London Hills Oversized Tshirt for Women</p>
                        <p className="productRows__item">Explore more</p>
                    </div>
                </div>

                <div className="productRows__box">
                    <h2 className="productRows__title">Up to 70% off | Curated products from Small Businesses</h2>
                    <div className="productRows__items">
                        <p className="productRows__item">Pack of 2 Innerwear Organizer Legging Storage Bag Dupatta Organizer Bag, Storage Organizer Pouch, Wardrobe Organizer and...</p>
                        <p className="productRows__item">₹361.00 M.R.P: ₹1,180.00</p>
                        <p className="productRows__item">(More Efficient) TeeVea Danish Dough Whisk Stainless Steel Dutch Style Bread Dough Hand Mixer Blender Wooden Handle...</p>
                        <p className="productRows__item">120 Pcs Air Fryer Disposable Paper Liner, 7.9-inch Liners for Air Fryer [ Fit 5-8 QT ], Non-Stick Parchment Paper for...</p>
                        <p className="productRows__item">Craftsfy® Large Stainless Steel Chopping Board | Steel Cutting Board | Heavy Duty Chopping Board for Meat &...</p>
                    </div>
                </div>
            </div>

            <div className="productRows__carousel">
            <div className="productRows__carouselHeader">
                <h2>Up to 60% off | Kitchen & Home essentials</h2>
                <a href="#" className="productRows__item">See more</a>
            </div>
            <div className="productRows__carouselContainer">
                {[
                    'https://m.media-amazon.com/images/I/61PRtRLZQUL._AC_SY200_.jpg',
                    'https://m.media-amazon.com/images/I/71Q1NQyx3fL._AC_SY200_.jpg',
                    'https://m.media-amazon.com/images/I/81TXRBKKTML._AC_SY200_.jpg',
                    'https://m.media-amazon.com/images/I/61DH3b3IkqL._AC_SY200_.jpg',
                    'https://m.media-amazon.com/images/I/31lKgs58UkL._AC_SY200_.jpg',
                    'https://m.media-amazon.com/images/I/31q9MiMgwSL._AC_SY200_.jpg',
                    'https://m.media-amazon.com/images/I/61U+0vOwM8L._AC_SY200_.jpg',
                    'https://m.media-amazon.com/images/I/71Kq7MiHifL._AC_SY200_.jpg',
                    'https://m.media-amazon.com/images/I/51YFdwZpRqL._AC_SY200_.jpg',
                    'https://m.media-amazon.com/images/I/51S2Fuj3+4L._AC_SY200_.jpg',
                    'https://m.media-amazon.com/images/I/61E3ZE1IJgL._AC_SY200_.jpg',
                    'https://m.media-amazon.com/images/I/71CVpwJRRYL._AC_SY200_.jpg',
                    'https://m.media-amazon.com/images/I/61XJZMYpLDL._AC_SY200_.jpg',
                    'https://m.media-amazon.com/images/I/71b1TqgGoKL._AC_SY200_.jpg',
                    'https://m.media-amazon.com/images/I/51vQ+WLH+BL._AC_SY200_.jpg',
                    'https://m.media-amazon.com/images/I/6178lqKPfBL._AC_SY200_.jpg',
                    'https://m.media-amazon.com/images/I/61ULRIKNOHL._AC_SY200_.jpg',
                    'https://m.media-amazon.com/images/I/51fH4vM6CcL._AC_SY200_.jpg',
                    'https://m.media-amazon.com/images/I/71PWwDOBP5L._AC_SY200_.jpg'
                ].map((image, index) => (
                    <img key={`repeat-${index}`} src={image} alt="" className="productRows__carouselImage" />
                ))}
            </div>
        </div>

            <div className="productRows__carousel">
                <div className="productRows__carouselHeader">
                    <h2>Up to 60% off | Kitchen & Home essentials</h2>
                    <a href="#" className="productRows__item">See more</a>
                </div>
                <div className="productRows__carouselContainer">
                    {[
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
                    ].map((image, index) => (
                        <img key={`repeat-${index}`} src={image} alt="" className="productRows__carouselImage" />
                    ))}
                </div>
            </div>

            <div className="productRows__banner">
                <img 
                    src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/b225c3a3-e401-495a-82a4-e6a22b892a46.jpg" 
                    alt="Amazon Banner" 
                    className="productRows__bannerImage"
                />
                <p>Sponsored</p>
            </div>

            <div className="productRows__box productRows__liveBox">
                <div className="productRows__liveHeader">
                    <h2 className="productRows__title">Amazon LIVE - Watch, Chat & Shop LIVE</h2>
                    <a href="#" className="productRows__liveLink">See more from Amazon Live</a>
                </div>
                <div className="productRows__liveContent">
                    <div className="productRows__liveMain">
                        <div className="productRows__liveVideo">
                            <iframe 
                                src="https://www.amazon.in/live/broadcast/d4ef8b13-3018-449e-a96a-e465edeb05ba?ref=cm_sw_al_zvXmRcA1q2kXY"
                                className="productRows__liveVideoElement"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                        <div className="productRows__liveInfo">
                            <p className="productRows__liveTitle">Food Eternity by Hemant</p>
                            <p className="productRows__liveCommission">Earns commissions</p>
                        </div>
                    </div>
                    <div className="productRows__liveCarousel">
                        {[
                            {
                                image: "https://m.media-amazon.com/images/I/71Nf34uFzaL._SX240_QL100_AC_SCLZZZZZZZ_.jpg",
                                title: "GOLWYN Premium Self Adhesive Kitchen Accessor...",
                                discount: "48% off",
                                dealPrice: "₹220.00",
                                listPrice: "₹425.00",
                                isLimited: true
                            },
                            {
                                image: "https://m.media-amazon.com/images/I/61y4dR3iMlL._SX240_QL100_AC_SCLZZZZZZZ_.jpg",
                                title: "Qlect Automatic Electric Chopper for Kitchen | Rec...",
                                dealPrice: "₹499.00",
                                listPrice: "₹1,999.00"
                            },
                            {
                                image: "https://m.media-amazon.com/images/I/71C5KTp+TOL._SX240_QL100_AC_SCLZZZZZZZ_.jpg",
                                title: "GOLWYN Air Tight Containers For Ki...",
                                discount: "31% off",
                                dealPrice: "₹296.00",
                                listPrice: "₹429.00",
                                isLimited: true
                            },
                            {
                                image: "https://m.media-amazon.com/images/I/41GaNiOrEtL._SX240_QL100_AC_SCLZZZZZZZ_.jpg",
                                title: "Right Products New Creative Vintage Metal H..."
                            },
                            {
                                image: "https://m.media-amazon.com/images/I/51yQWVm3ubL._SX240_QL100_AC_SCLZZZZZZZ_.jpg",
                                title: "P-Plus International 3 in 1 Rotary Multi-Functi...",
                                dealPrice: "₹233.00",
                                listPrice: "₹599.00"
                            },
                            {
                                image: "https://m.media-amazon.com/images/I/61BIGG5Yr+L._SX240_QL100_AC_SCLZZZZZZZ_.jpg",
                                title: "NH10 DESIGNS Stainless Steel Under Cabinet...",
                                discount: "62% off",
                                dealPrice: "₹269.00",
                                listPrice: "₹699.00",
                                isLimited: true
                            },
                            {
                                image: "https://m.media-amazon.com/images/I/71aRgGvQcUL._SX240_QL100_AC_SCLZZZZZZZ_.jpg",
                                title: "Seznik Portable Mini Sealing Machine...",
                                discount: "71% off",
                                dealPrice: "₹348.00",
                                listPrice: "₹1,200.00",
                                isLimited: true,
                                endsIn: "05:55:37"
                            },
                            {
                                image: "https://m.media-amazon.com/images/I/61N-5a5qk5L._SX240_QL100_AC_SCLZZZZZZZ_.jpg",
                                title: "Ganesh Plastic Vegetable Slicer Cutter, Black...",
                                discount: "33% off",
                                dealPrice: "₹88.00",
                                listPrice: "₹132.00",
                                isPrime: true
                            },
                            {
                                image: "https://m.media-amazon.com/images/I/71PdwxbtdNL._SX240_QL100_AC_SCLZZZZZZZ_.jpg",
                                title: "Wolpin Garlic Crusher Presser Ring Garlic Kitchen Tool Multi-Functi..."
                            },
                            {
                                image: "https://m.media-amazon.com/images/I/61dV7RCYobL._SX240_QL100_AC_SCLZZZZZZZ_.jpg",
                                title: "Hawkins Idli Stand suitable for 5L Cooker (12 Idlis)...",
                                dealPrice: "₹350.00",
                                listPrice: "₹380.00"
                            }
                        ].map((product, index) => (
                            <div key={index} className="productRows__liveCarouselItem">
                                <img src={product.image} alt={product.title} />
                                <p className="productRows__liveCarouselTitle">{product.title}</p>
                                {product.discount && (
                                    <div className="productRows__liveCarouselDiscount">
                                        <span>{product.discount}</span>
                                        {product.isLimited && <span>Limited time deal</span>}
                                        {product.endsIn && <span>Ends in {product.endsIn}</span>}
                                        {product.isPrime && <span>With Prime</span>}
                                    </div>
                                )}
                                {product.dealPrice && (
                                    <div className="productRows__liveCarouselPrice">
                                        <span className="productRows__liveCarouselDealPrice">{product.dealPrice}</span>
                                        {product.listPrice && (
                                            <span className="productRows__liveCarouselListPrice">{product.listPrice}</span>
                                        )}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="productRows__carousel">
            <div className="productRows__carouselHeader">
                <h2>Up to 60% off | Kitchen & Home essentials</h2>
                <a href="#" className="productRows__item">See more</a>
            </div>
            <div className="productRows__carouselContainer">
                {[
                    'https://m.media-amazon.com/images/I/61PRtRLZQUL._AC_SY200_.jpg',
                    'https://m.media-amazon.com/images/I/71Q1NQyx3fL._AC_SY200_.jpg',
                    'https://m.media-amazon.com/images/I/81TXRBKKTML._AC_SY200_.jpg',
                    'https://m.media-amazon.com/images/I/61DH3b3IkqL._AC_SY200_.jpg',
                    'https://m.media-amazon.com/images/I/31lKgs58UkL._AC_SY200_.jpg',
                    'https://m.media-amazon.com/images/I/31q9MiMgwSL._AC_SY200_.jpg',
                    'https://m.media-amazon.com/images/I/61U+0vOwM8L._AC_SY200_.jpg',
                    'https://m.media-amazon.com/images/I/71Kq7MiHifL._AC_SY200_.jpg',
                    'https://m.media-amazon.com/images/I/51YFdwZpRqL._AC_SY200_.jpg',
                    'https://m.media-amazon.com/images/I/51S2Fuj3+4L._AC_SY200_.jpg',
                    'https://m.media-amazon.com/images/I/61E3ZE1IJgL._AC_SY200_.jpg',
                    'https://m.media-amazon.com/images/I/71CVpwJRRYL._AC_SY200_.jpg',
                    'https://m.media-amazon.com/images/I/61XJZMYpLDL._AC_SY200_.jpg',
                    'https://m.media-amazon.com/images/I/71b1TqgGoKL._AC_SY200_.jpg',
                    'https://m.media-amazon.com/images/I/51vQ+WLH+BL._AC_SY200_.jpg',
                    'https://m.media-amazon.com/images/I/6178lqKPfBL._AC_SY200_.jpg',
                    'https://m.media-amazon.com/images/I/61ULRIKNOHL._AC_SY200_.jpg',
                    'https://m.media-amazon.com/images/I/51fH4vM6CcL._AC_SY200_.jpg',
                    'https://m.media-amazon.com/images/I/71PWwDOBP5L._AC_SY200_.jpg'
                ].map((image, index) => (
                    <img key={`repeat-${index}`} src={image} alt="" className="productRows__carouselImage" />
                ))}
            </div>
            </div>


            <div className="productRows__row">
                <div className="productRows__box">
                    <h2 className="productRows__title">Min. 40% off | Handcrafted treasures from artisans</h2>
                    <div className="productRows__items">
                        <p className="productRows__item">CartaDen Wooden Serving Trays Unique Style with Round Handle Large, Medium and Small for Food, Wooden Trays for...</p>
                        <p className="productRows__item">₹759.00 M.R.P: ₹1,499.00</p>
                        <p className="productRows__item">Corazzin Garden Patio Seating Chair and Table Set Outdoor Balcony Garden Coffee Table Set Furniture with 1 Table and 4...</p>
                        <p className="productRows__item">SMAART CRAAFTS Osho Rattan 2 Door Cabinet | Spiral Carving Sideboard with Shelf Storage | Cane Design Cabinet for Living...</p>
                        <p className="productRows__item">Adichwal Furniture Solid Sheesham Wood 6 Seater Dining Table Set with Cushioned Chairs for Dining Room | Living Room |...</p>
                    </div>
                </div>

                <div className="productRows__box">
                    <h2 className="productRows__title">Best Sellers in Clothing & Accessories</h2>
                    <div className="productRows__items">
                        <p className="productRows__item">GoSriKi Women's Rayon Blend Anarkali Printed Kurta with Pant & Dupatta & Dupatta (CIA Yellow-GS_XL_Yellow_X-Large)</p>
                        <p className="productRows__item">Allen Solly Men's Plain Regular Fit Cotton Polo (AMKP317G04249_Jet Black_Large)</p>
                        <p className="productRows__item">SJeware 12 Pairs Solid Cotton Ankle Length Socks for Men & Women, Multicolor, Pack of 12, Free Size</p>
                        <p className="productRows__item">ANNI DESIGNER Women's Rayon Blend Straight Solid Kurta with Pant & Dupatta (Raja Saab Purple-VKS01_L_Purple_Large)</p>
                    </div>
                </div>

                <div className="productRows__box">
                    <h2 className="productRows__title">Customers' Most-Loved Fashion for you</h2>
                    <div className="productRows__items">
                        <p className="productRows__item">FUNDAY FASHION Cotton Half Sleeve Printed Oversized T-Shirt For Womens/Girls (Pack Of 2, Small, Grey & Pink)</p>
                        <p className="productRows__item">Allen Solly Men's Regular Fit Polo (ASKPQRGF701338_Medium Blue_L)</p>
                        <p className="productRows__item">Puma Men, Melanite Slip on, Cool Dark Gray-Black-White, Sneaker, 8UK, (39185802)</p>
                        <p className="productRows__item">London Hills Oversized Tshirt for Women</p>
                        <p className="productRows__item">Explore more</p>
                    </div>
                </div>

            <div className="productRows__box">
                    <h2 className="productRows__title">Up to 70% off | Curated products from Small Businesses</h2>
                    <div className="productRows__items">
                        <p className="productRows__item">Pack of 2 Innerwear Organizer Legging Storage Bag Dupatta Organizer Bag, Storage Organizer Pouch, Wardrobe Organizer and...</p>
                        <p className="productRows__item">₹361.00 M.R.P: ₹1,180.00</p>
                        <p className="productRows__item">(More Efficient) TeeVea Danish Dough Whisk Stainless Steel Dutch Style Bread Dough Hand Mixer Blender Wooden Handle...</p>
                        <p className="productRows__item">120 Pcs Air Fryer Disposable Paper Liner, 7.9-inch Liners for Air Fryer [ Fit 5-8 QT ], Non-Stick Parchment Paper for...</p>
                        <p className="productRows__item">Craftsfy® Large Stainless Steel Chopping Board | Steel Cutting Board | Heavy Duty Chopping Board for Meat &...</p>
                    </div>
                </div>
            </div>


            <div className="productRows__carousel">
            <div className="productRows__carouselHeader">
                <h2>Up to 60% off | Kitchen & Home essentials</h2>
                <a href="#" className="productRows__item">See more</a>
            </div>
            <div className="productRows__carouselContainer">
                {[
                    'https://m.media-amazon.com/images/I/61PRtRLZQUL._AC_SY200_.jpg',
                    'https://m.media-amazon.com/images/I/71Q1NQyx3fL._AC_SY200_.jpg',
                    'https://m.media-amazon.com/images/I/81TXRBKKTML._AC_SY200_.jpg',
                    'https://m.media-amazon.com/images/I/61DH3b3IkqL._AC_SY200_.jpg',
                    'https://m.media-amazon.com/images/I/31lKgs58UkL._AC_SY200_.jpg',
                    'https://m.media-amazon.com/images/I/31q9MiMgwSL._AC_SY200_.jpg',
                    'https://m.media-amazon.com/images/I/61U+0vOwM8L._AC_SY200_.jpg',
                    'https://m.media-amazon.com/images/I/71Kq7MiHifL._AC_SY200_.jpg',
                    'https://m.media-amazon.com/images/I/51YFdwZpRqL._AC_SY200_.jpg',
                    'https://m.media-amazon.com/images/I/51S2Fuj3+4L._AC_SY200_.jpg',
                    'https://m.media-amazon.com/images/I/61E3ZE1IJgL._AC_SY200_.jpg',
                    'https://m.media-amazon.com/images/I/71CVpwJRRYL._AC_SY200_.jpg',
                    'https://m.media-amazon.com/images/I/61XJZMYpLDL._AC_SY200_.jpg',
                    'https://m.media-amazon.com/images/I/71b1TqgGoKL._AC_SY200_.jpg',
                    'https://m.media-amazon.com/images/I/51vQ+WLH+BL._AC_SY200_.jpg',
                    'https://m.media-amazon.com/images/I/6178lqKPfBL._AC_SY200_.jpg',
                    'https://m.media-amazon.com/images/I/61ULRIKNOHL._AC_SY200_.jpg',
                    'https://m.media-amazon.com/images/I/51fH4vM6CcL._AC_SY200_.jpg',
                    'https://m.media-amazon.com/images/I/71PWwDOBP5L._AC_SY200_.jpg'
                ].map((image, index) => (
                    <img key={`repeat-${index}`} src={image} alt="" className="productRows__carouselImage" />
                ))}
            </div>
            </div>
        </div>
    );
}

export default ProductRows; 