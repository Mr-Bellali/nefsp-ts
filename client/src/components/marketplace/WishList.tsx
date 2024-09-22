"use client"
import React from 'react'
import { useRouter } from 'next/navigation'


const WishList = () => {
    const router = useRouter()
    return (
        <div>
            <div className="grid lg:grid-cols-3 bg-[#FAFAFA] rounded ">
                <div className="lg:col-span-2 p-4 overflow-x-auto">
                    <div className="flex gap-2 border-b pb-4">
                        <h2 className="text-2xl font-bold text-gray-800 flex-1">
                            Wishlist
                        </h2>
                        <h3 className="text-base text-gray-800">4 Items</h3>
                    </div>
                    <table className="mt-6 w-full border-collapse divide-y">
                        <thead className="whitespace-nowrap text-left">
                            <tr>
                                <th className="text-base text-gray-800 p-4">Product</th>
                                <th className="text-base text-gray-800 p-4">Price</th>
                            </tr>
                        </thead>
                        <tbody className="whitespace-nowrap divide-y">
                            <tr className='border rounded'>
                                <td className="p-4">
                                    <div className="flex items-center gap-4 w-max">
                                        <div className="h-32 shrink-0">
                                            <img
                                                src="https://readymadeui.com/images/product6.webp"
                                                className="w-full h-full object-contain rounded-lg"
                                            />
                                        </div>
                                        <div>
                                            <p className="text-base font-bold text-gray-800">
                                                Black T-Shirt
                                            </p>

                                            <button
                                                type="button"
                                                className="mt-2 font-semibold text-red-400 text-sm"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </td>
                                
                                <td className="p-4">
                                    <h4 className="text-base font-bold text-gray-800">$18.5</h4>
                                </td>
                            </tr >
                            <tr className='border rounded'>
                                <td className="p-4">
                                    <div className="flex items-center gap-4 w-max">
                                        <div className="h-32 shrink-0">
                                            <img
                                                src="https://readymadeui.com/images/product3.webp"
                                                className="w-full h-full object-contain rounded-lg"
                                            />
                                        </div>
                                        <div>
                                            <p className="text-base font-bold text-gray-800">
                                                Gray T-Shirt
                                            </p>
                                            <button
                                                type="button"
                                                className="mt-2 font-semibold text-red-400 text-sm"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </td>
                                
                                <td className="p-4">
                                    <h4 className="text-base font-bold text-gray-800">$18</h4>
                                </td>
                            </tr>
                            <tr className='border rounded'>
                                <td className="p-4">
                                    <div className="flex items-center gap-4 w-max">
                                        <div className="h-32 shrink-0">
                                            <img
                                                src="https://readymadeui.com/images/product7.webp"
                                                className="w-full h-full object-contain rounded-lg"
                                            />
                                        </div>
                                        <div>
                                            <p className="text-base font-bold text-gray-800">
                                                Black T-Shirt
                                            </p>
                                            <button
                                                type="button"
                                                className="mt-2 font-semibold text-red-400 text-sm"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </td>
                               
                                <td className="p-4">
                                    <h4 className="text-base font-bold text-gray-800">$15.5</h4>
                                </td>
                            </tr>
                            <tr className='border rounded'>
                                <td className="p-4">
                                    <div className="flex items-center gap-4 w-max">
                                        <div className="h-32 shrink-0">
                                            <img
                                                src="https://readymadeui.com/images/product3.webp"
                                                className="w-full h-full object-contain rounded-lg"
                                            />
                                        </div>
                                        <div>
                                            <p className="text-base font-bold text-gray-800">
                                                Gray T-Shirt
                                            </p>
                                            <button
                                                type="button"
                                                className="mt-2 font-semibold text-red-400 text-sm"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </td>
                                
                                <td className="p-4">
                                    <h4 className="text-base font-bold text-gray-800">$18</h4>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>




                
                <div className="bg-gray-50 p-6 lg:sticky lg:top-0 lg:h-screen lg:border-l-2 ">
                    
                    <div className="lg:col-span-2 p-4 overflow-x-auto">
                    <div className="flex gap-2 border-b pb-4">
                        <h2 className="text-2xl font-bold text-gray-800 flex-1">
                            Cart
                        </h2>
                        <h3 className="text-base text-gray-800">4 Items</h3>
                    </div>
                    <table className="mt-6 w-full border-collapse divide-y">
                        <thead className="whitespace-nowrap text-left">
                            <tr>
                                <th className="text-base text-gray-800 p-4">Product</th>
                                <th className="text-base text-gray-800 p-4">Price</th>
                            </tr>
                        </thead>
                        <tbody className="whitespace-nowrap divide-y">
                            <tr>
                                <td className="p-4">
                                    <div className="flex items-center gap-4 w-max">
                                        <div className="h-32 shrink-0">
                                            <img
                                                src="https://readymadeui.com/images/product6.webp"
                                                className="w-full h-full object-contain rounded-lg"
                                            />
                                        </div>
                                        <div>
                                            <p className="text-base font-bold text-gray-800">
                                                Black T-Shirt
                                            </p>

                                            <button
                                                type="button"
                                                className="mt-2 font-semibold text-red-400 text-sm"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </td>
                                
                                <td className="p-4">
                                    <h4 className="text-base font-bold text-gray-800">$18.5</h4>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-4">
                                    <div className="flex items-center gap-4 w-max">
                                        <div className="h-32 shrink-0">
                                            <img
                                                src="https://readymadeui.com/images/product3.webp"
                                                className="w-full h-full object-contain rounded-lg"
                                            />
                                        </div>
                                        <div>
                                            <p className="text-base font-bold text-gray-800">
                                                Gray T-Shirt
                                            </p>
                                            <button
                                                type="button"
                                                className="mt-2 font-semibold text-red-400 text-sm"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </td>
                                
                                <td className="p-4">
                                    <h4 className="text-base font-bold text-gray-800">$18</h4>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-4">
                                    <div className="flex items-center gap-4 w-max">
                                        <div className="h-32 shrink-0">
                                            <img
                                                src="https://readymadeui.com/images/product7.webp"
                                                className="w-full h-full object-contain rounded-lg"
                                            />
                                        </div>
                                        <div>
                                            <p className="text-base font-bold text-gray-800">
                                                Black T-Shirt
                                            </p>
                                            <button
                                                type="button"
                                                className="mt-2 font-semibold text-red-400 text-sm"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </td>
                               
                                <td className="p-4">
                                    <h4 className="text-base font-bold text-gray-800">$15.5</h4>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-4">
                                    <div className="flex items-center gap-4 w-max">
                                        <div className="h-32 shrink-0">
                                            <img
                                                src="https://readymadeui.com/images/product3.webp"
                                                className="w-full h-full object-contain rounded-lg"
                                            />
                                        </div>
                                        <div>
                                            <p className="text-base font-bold text-gray-800">
                                                Gray T-Shirt
                                            </p>
                                            <button
                                                type="button"
                                                className="mt-2 font-semibold text-red-400 text-sm"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </td>
                                
                                <td className="p-4">
                                    <h4 className="text-base font-bold text-gray-800">$18</h4>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                </div>
            </div>
        </div>

    )
}

export default WishList