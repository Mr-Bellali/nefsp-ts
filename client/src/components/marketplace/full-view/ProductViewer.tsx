"use client"
import React, { useState } from 'react'
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
const ProductViewer = () => {
    const [stockQuantity, setStockQuantity] = useState(0);

    return (
        <div >
            <div className="">
                <div className="my-4 grid items-start grid-cols-1 lg:grid-cols-2 gap-6 max-lg:gap-12">
                    <div className="w-full lg:sticky top-0 sm:flex gap-2">
                        <div className="sm:space-y-3 w-16 max-sm:w-12 max-sm:flex max-sm:mb-4 max-sm:gap-4">
                            <img
                                src="https://readymadeui.com/images/product1.webp"
                                alt="Product1"
                                className="w-full cursor-pointer rounded outline"
                            />
                            <img
                                src="https://readymadeui.com/images/product6.webp"
                                alt="Product2"
                                className="w-full cursor-pointer rounded"
                            />
                            <img
                                src="https://readymadeui.com/images/product7.webp"
                                alt="Product3"
                                className="w-full cursor-pointer rounded"
                            />
                            <img
                                src="https://readymadeui.com/images/product3.webp"
                                alt="Product4"
                                className="w-full cursor-pointer rounded"
                            />
                        </div>
                        <img
                            src="https://readymadeui.com/images/product2.webp"
                            alt="Product"
                            className="w-4/5 rounded-md object-cover"
                        />
                    </div>
                    <div className='w-full h-full flex flex-col justify-center '>
                        <h2 className="text-2xl font-bold text-gray-800">
                            Adjective Attire | T-shirt
                        </h2>

                        <div className="flex space-x-2 mt-4">
                            <svg
                                className="w-5 fill-red-500"
                                viewBox="0 0 14 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg
                                className="w-5 fill-red-500"
                                viewBox="0 0 14 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg
                                className="w-5 fill-red-500"
                                viewBox="0 0 14 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg
                                className="w-5 fill-red-500"
                                viewBox="0 0 14 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg
                                className="w-5 fill-[#CED5D8]"
                                viewBox="0 0 14 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <p className='text-gray-500'>(150 Reviews)</p>
                            <p>|</p>
                            <p className='text-cyan-500'>In stock</p>
                        </div>
                        <div className="flex flex-wrap gap-4 mt-4">
                            <p className="text-gray-800 text-xl font-bold">12.50 DH</p>
                            <p className="text-gray-400 text-xl">
                            </p>
                        </div>

                        <div className="mt-8">
                            <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-800">
                                <li>
                                    A gray t-shirt is a wardrobe essential because it is so versatile.
                                </li>
                                <li>
                                    Available in a wide range of sizes, from extra small to extra
                                    large, and even in tall and petite sizes.
                                </li>
                                <li>
                                    This is easy to care for. They can usually be machine-washed and
                                    dried on low heat.
                                </li>
                                <li>
                                    You can add your own designs, paintings, or embroidery to make it
                                    your own.
                                </li>
                            </ul>
                        </div>
                        <div className="mt-8">
                            <p className='font-bold pb-2'>Origonal Price:<span className='ml-4 font-medium text-gray-600'>50.00 DH</span></p>
                            <p className='font-bold pb-2'>Store:<span className='ml-4 font-medium text-gray-600'>Hanout abdelkader jilali</span></p>
                            <p className='font-bold pb-2'>Expiration date:<span className='ml-4 font-medium text-gray-600'>20 October 2024</span></p>
                        </div>
                        <div className='w-full h-[2px] bg-gray-500 mt-8 mb-2'></div>


                        <div className='flex items-center justify-center '>
                            <div className='w-1/3 mr-3'>
                                <div className="flex items-center justify-between p-1 border rounded h-full ">
                                    <button
                                        type="button"
                                        onClick={() => setStockQuantity(stockQuantity - 1)}
                                        className="px-1 py-1 rounded bg-[#F54D42]">
                                        <RemoveRoundedIcon sx={{ color: "#ffffff", fontSize: 30 }} />
                                    </button>
                                    <span>{stockQuantity}</span>
                                    <button
                                        type="button"
                                        onClick={() => setStockQuantity(stockQuantity + 1)}
                                        className="px-1 py-1 rounded bg-blue-500">
                                        <AddRoundedIcon sx={{ color: "#ffffff", fontSize: 30 }} />
                                    </button>
                                </div>
                            </div>
                            <button
                                type="button"
                                className="w-full  px-6 py-3 bg-red-500 hover:bg-red-700 text-white text-sm font-semibold rounded-md h-full"
                            >
                                Add to cart
                            </button>
                            <button
                                type="button"
                                className="w-[h-full] ml-5  px-4 py-2 border border-gray-300   rounded-md h-full"
                            >
                                <FavoriteBorderOutlinedIcon sx={{ color: "#000000", fontSize: 30 }}/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProductViewer