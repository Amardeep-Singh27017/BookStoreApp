import React from 'react'

const Cards = ({ item }) => {
    // console.log(item);

    return (
        <>
            <div className='mt-5 mb-5 p-3'>
                <div className="card bg-base-100 w-92 shadow-2xl rounded-xl overflow-hidden hover:scale-105 duration-300 cursor-pointer"> 
                    <figure>
                        <img src={item.image} alt="Book..." />
                    </figure>
                    <div className="flex flex-col gap-3 px-4 py-6 bg-gray-700 ">
                        <h2 className="card-title">
                            {item.name}
                            <div className="badge badge-secondary">{item.catagory}</div>
                        </h2>
                        <p>{item.title}</p>
                        <div className="card-actions justify-between">
                            <div className="badge badge-outline hover:text-white hover:bg-pink-500 cursor-pointer p-4">${item.price}</div>
                            <div className="badge badge-outline hover:text-white hover:bg-pink-500 cursor-pointer p-4">Buy Now</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards
