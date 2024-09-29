"use client";
import React, { useState, useEffect } from 'react';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import { getCategoriesService } from '@/services/CommonServices';
import { updateProductService } from '@/services/SellerService';
import { toast } from 'react-toastify';

// Modal Component
const Modal = ({ isOpen, onClose, onConfirm }: { isOpen: boolean; onClose: () => void; onConfirm: () => void; }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-lg font-bold mb-4">Confirm Deletion</h2>
        <p>Are you sure you want to delete this product?</p>
        <div className="flex justify-end space-x-4 mt-4">
          <button onClick={onConfirm} className="px-4 py-2 bg-red-500 text-white rounded">Confirm</button>
          <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">Cancel</button>
        </div>
      </div>
    </div>
  );
};

const ProductPreview = ({ product }: { product: any }) => {
  const [stockQuantity, setStockQuantity] = useState(product.stockQte);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedImage, setSelectedImage] = useState(product.productImgs[0]?.imageUrl);
  const [formData, setFormData] = useState({
    productName: product.productName,
    productDescription: product.productDescription,
    originalPrice: product.originalPrice,
    sellingPrice: product.sellingPrice,
    expirationDate: product.expirationDate,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categories, setCategories] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(product.idCategory);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdate = async () => {
    // Ensure that all values are valid before sending
    const data = new FormData();
    data.append("productName", formData.productName || "");
    data.append("description", formData.productDescription || ""); // Make sure this is 'description'
    data.append("originalPrice", formData.originalPrice ? parseFloat(formData.originalPrice).toString() : "0");
    data.append("sellingPrice", formData.sellingPrice ? parseFloat(formData.sellingPrice).toString() : "0");
    data.append("expirationDate", formData.expirationDate || "");
    data.append("stockQte", stockQuantity.toString()); // Make sure this is 'stockQte'
    data.append("idCategory", selectedCategory?.toString() || "");
    
    try {
      console.log("update data:",data)
      await updateProductService(product.idProduct, data);
      toast.success("Product updated successfully!");
      setIsEditing(false); 
    } catch (error: any) {
      toast.error(error.message || "Failed to update product!");
    }
  };

  const handleDelete = () => {
    console.log("Product Deleted");
    setIsModalOpen(false); // Close modal after deletion
  };

  // Fetch categories on component mount
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesList = await getCategoriesService();
        setCategories(categoriesList);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div>
      <div className="my-4 grid items-start grid-cols-1 lg:grid-cols-2 gap-6 max-lg:gap-12">
        <div className="w-full lg:sticky top-0 sm:flex gap-2">
          <div className="sm:space-y-3 w-16 max-sm:w-12 max-sm:flex max-sm:mb-4 max-sm:gap-4">
            {product.productImgs.map((img: any) => (
              <img
                key={img.idImage}
                src={img.imageUrl}
                alt={product.productName}
                className={`w-full cursor-pointer rounded transition-all duration-300 ${selectedImage === img.imageUrl ? 'border border-red-500' : 'border border-transparent'}`}
                onClick={() => setSelectedImage(img.imageUrl)}
              />
            ))}
          </div>
          <div className="relative w-4/5" style={{ height: '100%' }}>
            <img
              src={selectedImage}
              alt={product.productName}
              className="w-full h-full rounded-md object-cover border border-gray-300"
              style={{ height: '100%', aspectRatio: '1 / 1' }}
            />
          </div>
        </div>
        <div className='w-full h-full flex flex-col justify-center'>
          {isEditing ? (
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700">Product Name:</label>
                <input
                  type="text"
                  name="productName"
                  value={formData.productName}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block text-gray-700">Description:</label>
                <textarea
                  name="productDescription"
                  value={formData.productDescription}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block text-gray-700">Original Price:</label>
                <input
                  type="text"
                  name="originalPrice"
                  value={formData.originalPrice}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block text-gray-700">Selling Price:</label>
                <input
                  type="text"
                  name="sellingPrice"
                  value={formData.sellingPrice}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block text-gray-700">Expiration Date:</label>
                <input
                  type="date"
                  name="expirationDate"
                  value={formData.expirationDate.split('T')[0]}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block text-gray-700">Stock Quantity:</label>
                <input
                  type="number"
                  name="stockQuantity"
                  value={stockQuantity}
                  onChange={(e) => setStockQuantity(Number(e.target.value))}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              {/* Category Dropdown */}
              <div className="mb-6">
                <label className="block font-bold mb-2">Category</label>
                <select
                  value={selectedCategory ?? ""}
                  onChange={(e) => setSelectedCategory(parseInt(e.target.value))}
                  className="w-full border p-2 rounded text-gray-600"
                >
                  <option value="" disabled>Select a category</option>
                  {categories.map((category) => (
                    <option key={category.idCategory} value={category.idCategory}>
                      {category.categoryName}
                    </option>
                  ))}
                </select>
              </div>
              <div className='flex space-x-4'>
                <button onClick={handleUpdate} className="px-4 py-2 bg-green-500 text-white rounded">Confirm</button>
                <button onClick={handleEditToggle} className="px-4 py-2 bg-gray-500 text-white rounded">Cancel</button>
              </div>
            </div>
          ) : (
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{formData.productName}</h2>
              <div className="flex space-x-2 mt-4">
                <p className='text-gray-500'>(150 Reviews)</p>
                <p>|</p>
                {stockQuantity > 0 ? (
                  <p className='text-cyan-500'>In stock: {stockQuantity}</p>
                ) : (
                  <p className='text-red-500 font-bold'>Out of Stock</p>
                )}
              </div>
              <div className="flex flex-wrap gap-4 mt-4">
                <p className="text-gray-800 text-xl font-bold">{formData.sellingPrice} DH</p>
                <p className="text-gray-400 text-xl">
                  <del>{formData.originalPrice} DH</del>
                </p>
              </div>
              <div className="mt-8">
                <p className='font-bold pb-2'>Description:<span className='ml-4 font-medium text-gray-600'>{formData.productDescription}</span></p>
                <p className='font-bold pb-2'>Expiration date:<span className='ml-4 font-medium text-gray-600'>{new Date(formData.expirationDate).toLocaleDateString()}</span></p>
                <p className='font-bold pb-2'>Category:<span className='ml-4 font-medium text-gray-600'>{categories.find(cat => cat.idCategory === selectedCategory)?.categoryName || 'N/A'}</span></p>
              </div>
              <div className='flex items-center justify-start mt-8 '>
                <button onClick={handleEditToggle} className="px-6 py-3 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-md"><EditRoundedIcon className="mr-2" /> Update</button>
                <button onClick={() => setIsModalOpen(true)} className="ml-5 px-6 py-3 bg-red-500 hover:bg-red-700 text-white rounded-md"><DeleteRoundedIcon className="mr-2" /> Delete</button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Confirmation Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleDelete}
      />
    </div>
  );
}

export default ProductPreview;
