import { useState } from "react";
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import BackupOutlinedIcon from '@mui/icons-material/BackupOutlined';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { sellerAddProductService } from '@/services/SellerService'; // Adjust the path based on your structure

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [productName, setProductName] = useState("");
  const [originalPrice, setOriginalPrice] = useState(0);
  const [sellingPrice, setSellingPrice] = useState(0);
  const [expirationDate, setExpirationDate] = useState("");
  const [stockQuantity, setStockQuantity] = useState(0);
  const [description, setDescription] = useState("");
  const [images, setImages] = useState<File[]>([]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      if (files.length + images.length <= 4) {
        setImages(prevImages => [...prevImages, ...files]);
      } else {
        alert("You can only upload up to 4 images.");
      }
    }
  };

  const handleImageRemove = (index: number) => {
    setImages(prevImages => prevImages.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('productName', productName);
    formData.append('originalPrice', originalPrice.toString());
    formData.append('sellingPrice', sellingPrice.toString());
    formData.append('expirationDate', expirationDate);
    formData.append('stockQuantity', stockQuantity.toString());
    formData.append('description', description);
    images.forEach((image, index) => formData.append(`images[${index}]`, image)); // Append each image to the form data

    try {
      await sellerAddProductService(formData);
      toast.success("Product added successfully!");
      onClose(); // Close the modal after successful submission
    } catch (error) {
      // Error toast is already handled in the service
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white py-6 px-10 rounded-lg shadow-lg max-w-7xl w-full max-h-[98vh] relative overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-red-500 text-2xl">
          ✕
        </button>

        {/* Modal Header */}
        <h2 className="text-2xl font-bold mb-4 text-center">Add Product</h2>
        <div className="w-full h-[1.5px] bg-slate-300 my-6"></div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-8 relative">
          {/* Left side form */}
          <div className="pr-4">
            <div className="mb-6">
              <label className="block font-bold mb-2">Product name</label>
              <input
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className="w-full border p-2 rounded text-gray-600"
              />
            </div>

            <div className="mb-6 grid grid-cols-2 gap-6">
              <div>
                <label className="block font-bold mb-2">Original price</label>
                <input
                  type="number"
                  value={originalPrice}
                  onChange={(e) => setOriginalPrice(parseFloat(e.target.value))}
                  className="w-full border p-2 rounded text-gray-600"
                  min="0"
                />
              </div>
              <div>
                <label className="block font-bold mb-2">Selling price</label>
                <input
                  type="number"
                  value={sellingPrice}
                  onChange={(e) => setSellingPrice(parseFloat(e.target.value))}
                  className="w-full border p-2 rounded text-gray-600"
                  min="0"
                />
              </div>
            </div>

            <div className="mb-6 grid grid-cols-2 gap-6">
              <div>
                <label className="block font-bold mb-2">Expiration date</label>
                <input
                  type="date"
                  value={expirationDate}
                  onChange={(e) => setExpirationDate(e.target.value)}
                  className="w-full border p-2 rounded text-gray-600 h-[56px]"
                />
              </div>
              <div>
                <label className="block font-bold mb-2">Stock quantity</label>
                <div className="flex items-center justify-between p-2 border rounded">
                  <button
                    type="button"
                    onClick={() => setStockQuantity(stockQuantity - 1)}
                    className="px-1 py-1 rounded bg-[#F54D42]">
                    <RemoveRoundedIcon sx={{color : "#ffffff", fontSize : 30}} />
                  </button>
                  <span>{stockQuantity}</span>
                  <button
                    type="button"
                    onClick={() => setStockQuantity(stockQuantity + 1)}
                    className="px-1 py-1 rounded bg-blue-500">
                    <AddRoundedIcon sx={{color : "#ffffff", fontSize : 30}}/>
                  </button>
                </div>
              </div>
            </div>
            <div className="mb-6">
              <label className="block font-bold mb-2">Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full border p-2 rounded text-gray-600"
              ></textarea>
            </div>
          </div>

          {/* Vertical Line Divider */}
          <div className="h-full w-[1.5px] bg-slate-300 absolute left-1/2 top-0"></div>

          {/* Right side for image preview and upload */}
          <div className="flex flex-col items-center justify-start">
            <div className="w-full h-48 border flex flex-wrap justify-center items-center mb-5 bg-gray-100 rounded gap-6">
              {images.length === 0 ? (
                <span className="text-gray-400">Preview</span>
              ) : (
                images.map((image, index) => (
                  <div key={index} className="relative w-1/5 h-[90%] border flex justify-center items-center bg-gray-100 rounded m-1 overflow-hidden">
                    <img src={URL.createObjectURL(image)} alt={`Preview ${index}`} className="w-full h-full object-cover" />
                    <button
                      type="button"
                      onClick={() => handleImageRemove(index)}
                      className="absolute top-1 right-1 text-red-500 text-xs"
                    >
                      ✕
                    </button>
                  </div>
                ))
              )}
            </div>

            <label className="bg-blue-600 text-white px-6 py-2 rounded cursor-pointer hover:bg-blue-700 mb-4 text-xl flex flex-row justify-between items-center font-semibold">
              <BackupOutlinedIcon className="mr-4" sx={{fontSize : 30}}/>
              Upload images
              <input type="file" onChange={handleImageUpload} className="hidden" multiple />
            </label>
          </div>

          {/* Confirm button */}
          <div className="col-span-2 flex justify-end">
            <button
              type="submit"
              className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
