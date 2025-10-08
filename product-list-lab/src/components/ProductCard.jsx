import React from 'react';
import PropTypes from 'prop-types';

function ProductCard({ product, onAddToCart, onViewDetails }) {
  // ฟังก์ชันเพื่อเรนเดอร์ดาว
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={`full-${i}`}>★</span>);
    }
    if (halfStar) {
      stars.push(<span key="half">☆</span>);  // ใช้ ☆ หรือ icon ครึ่งดาวได้ตามต้องการ
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`}>✩</span>);
    }
    return stars;
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img
          src={product.image}
          alt={product.name}
          onError={(e) => {
            e.target.src =
              'https://placehold.co/300x300/cccccc/666666?text=No+Image';
          }}
        />
      </div>

      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>

        {/* แสดง rating */}
        <div className="product-rating">
          {renderStars(product.rating)} <span>({product.rating.toFixed(1)})</span>
        </div>

        <div className="product-price">
          {product.discount > 0 ? (
            <>
              <span className="old-price">
                ฿{product.originalPrice.toLocaleString()}
              </span>
              <span className="current-price">
                ฿{product.price.toLocaleString()}
              </span>
              <span className="discount-badge">
                ลด {product.discount}%
              </span>
            </>
          ) : (
            <span className="current-price">
              ฿{product.price.toLocaleString()}
            </span>
          )}
        </div>

        <div className="product-actions">
          <button
            className="btn btn-secondary"
            onClick={() => onViewDetails(product)}
          >
            ดูรายละเอียด
          </button>
          <button
            className="btn btn-primary"
            onClick={() => onAddToCart(product)}
            disabled={!product.inStock}
          >
            {product.inStock ? 'ใส่ตะกร้า' : 'หมดสินค้า'}
          </button>
        </div>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    originalPrice: PropTypes.number.isRequired,
    discount: PropTypes.number.isRequired,
    image: PropTypes.string,
    description: PropTypes.string,
    inStock: PropTypes.bool,
    rating: PropTypes.number
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired,
  onViewDetails: PropTypes.func.isRequired
};

export default ProductCard;