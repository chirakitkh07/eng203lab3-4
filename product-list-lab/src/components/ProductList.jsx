import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';
import './ProductList.css';

function ProductList({ products, categories, onAddToCart, onViewDetails }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('none'); // 'name', 'price-asc', 'price-desc', 'rating'

  // กรอง + ค้นหา + จัดเรียง
  const processedProducts = useMemo(() => {
    let result = [...products];

    // กรองตามหมวดหมู่
    if (selectedCategory !== 'all') {
      result = result.filter(
        (p) => p.category === selectedCategory
      );
    }

    // ค้นหา
    if (searchQuery.trim() !== '') {
      const lower = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(lower) ||
          p.description.toLowerCase().includes(lower)
      );
    }

    // จัดเรียง
    switch (sortBy) {
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return result;
  }, [products, selectedCategory, searchQuery, sortBy]);

  return (
    <div className="product-list-container">
      <div className="header">
        <h1>🛍️ ร้านค้าออนไลน์</h1>
        <p>Lab 3.2 - การสร้าง Components และ Props (เฉลย)</p>
      </div>

      <div
        style={{ marginBottom: '20px', textAlign: 'center' }}
      >
        <label htmlFor="category-select">หมวดหมู่: </label>
        <select
          id="category-select"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={{ padding: '5px', fontSize: '16px' }}
        >
          {categories.map((category) => (
            <option
              key={category.id}
              value={category.id}
            >
              {category.name}
            </option>
          ))}
        </select>

        {/* Search */}
        <input
          type="text"
          placeholder="ค้นหา..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            padding: '5px',
            fontSize: '16px',
            marginLeft: '15px'
          }}
        />

        {/* Sort */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          style={{
            padding: '5px',
            fontSize: '16px',
            marginLeft: '15px'
          }}
        >
          <option value="none">เรียงลำดับ</option>
          <option value="name">ชื่อ (A → Z)</option>
          <option value="price-asc">ราคาต่ำ → สูง</option>
          <option value="price-desc">ราคาสูง → ต่ำ</option>
          <option value="rating">คะแนนสูง → ต่ำ</option>
        </select>
      </div>

      <div className="products-grid">
        {processedProducts.length > 0 ? (
          processedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onViewDetails={onViewDetails}
            />
          ))
        ) : (
          <div style={{ gridColumn: '1 / -1', textAlign: 'center' }}>
            ไม่พบสินค้าที่ตรงกับเงื่อนไข
          </div>
        )}
      </div>
    </div>
  );
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
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
    })
  ).isRequired,
  categories: PropTypes.array.isRequired,
  onAddToCart: PropTypes.func.isRequired,
  onViewDetails: PropTypes.func.isRequired
};

export default ProductList;