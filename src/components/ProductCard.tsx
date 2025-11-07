import React from 'react';
import { Product } from '../types/Product';
import { StarIcon } from '@heroicons/react/24/solid';
import { StarIcon as StarOutlineIcon } from '@heroicons/react/24/outline';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;
    
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<StarIcon key={i} className="h-4 w-4 text-yellow-400" />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<StarIcon key={i} className="h-4 w-4 text-yellow-400" />);
      } else {
        stars.push(<StarOutlineIcon key={i} className="h-4 w-4 text-yellow-400" />);
      }
    }
    
    return stars;
  };

  return (
    <div className="card h-full flex flex-col">
      <div className="p-4 flex items-center justify-center h-48 bg-white">
        <img 
          src={product.image} 
          alt={product.title} 
          className="max-h-full max-w-full object-contain"
        />
      </div>
      <div className="p-4 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold line-clamp-2 flex-grow">{product.title}</h3>
          <span className="font-bold text-lg text-blue-600 whitespace-nowrap ml-2">
            ${product.price.toFixed(2)}
          </span>
        </div>
        <div className="text-sm text-gray-500 mb-2">
          <span className="inline-block px-2 py-1 bg-gray-100 rounded-full text-xs capitalize">
            {product.category}
          </span>
        </div>
        <p className="text-sm text-gray-600 mb-4 line-clamp-3 flex-grow">{product.description}</p>
        <div className="mt-auto">
          <div className="flex items-center">
            <div className="flex mr-2">
              {renderStars(product.rating.rate)}
            </div>
            <span className="text-sm text-gray-500">
              ({product.rating.rate.toFixed(1)}) {product.rating.count} reviews
            </span>
          </div>
          <button className="btn btn-primary w-full mt-3">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;