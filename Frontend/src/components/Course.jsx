import React, { useState, useEffect } from 'react'
import Cards from './Cards';
import {Link} from 'react-router-dom'
import axios from "axios";


const course = () => {
    const [book, setBook] = useState([]);

    useEffect(() => {
        const getBook = async () =>{
            try {
              const res =  await axios.get("http://localhost:3000/book");
            //   console.log(res.data);
              setBook(res.data)
            } catch (error) {
                console.log(error);
            }
        };
        getBook();
    }, [])
    

    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
                <div className='text-center mt-32'>
                    <h1 className='text-2xl font-semibold md:text-4xl'>We're delighted to hace you <span className='text-pink-500'> Here! :)</span></h1>
                    <p className='mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius soluta, error nam voluptate earum sed atque ratione quasi quod laudantium ad vitae possimus repellat, tenetur sint facilis nisi sapiente! Laborum provident aut illo repellendus.</p>
                    <Link to="/">
                        <button className='bg-pink-500 text-white rounded-md px-3 py-1 mt-6 hover:bg-pink-600 duration-300'>Back</button>
                    </Link>
                </div>
                <div className='mt-12 grid grid-clos-1 md:grid-cols-4'>
                    {
                        book.map((item) => (
                            <Cards key={item.id} item={item} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default course
