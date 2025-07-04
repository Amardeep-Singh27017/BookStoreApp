import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';

// for slider 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';


const Freebook = () => {

    const [book, setBook] = useState([]);

    useEffect(() => {
        const getBook = async () => {
            try {
                const res = await axios.get("http://localhost:3000/book");
                  console.log(res.data);
                const filteredData = res.data.filter((data) => data.catagory === "Free");
                setBook(filteredData);
            } catch (error) {
                console.log(error);
            }
        };
        getBook();
    }, [])
    // console.log(book);


    // slider 
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
                <div className='mt-10 space-y-4'>
                    <h1 className='font-bold text-xl'>Free Offered Courses</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea esse unde voluptas in or sit amet consectetur adipisicing elit. Ea esse unde voluptdolor dicta magni officia dolorem iure, quos, dignissimos doloremque eum.</p>
                </div>

                <div className='py-7'>
                    <Slider {...settings}>
                        {book.map((item) => (
                            <Cards item={item} key={item.id} />
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default Freebook
