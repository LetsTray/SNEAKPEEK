{/*
    import React, { useState } from 'react';

const ProductFilter = ({ onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onFilterChange({
      searchTerm: e.target.value,
      selectedCategory,
      minPrice,
      maxPrice,
    });
  };

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    onFilterChange({
      searchTerm,
      selectedCategory: category,
      minPrice,
      maxPrice,
    });
  };

  const handleMinPriceChange = (e) => {
    const price = e.target.value;
    setMinPrice(price);
    onFilterChange({
      searchTerm,
      selectedCategory,
      minPrice: price,
      maxPrice,
    });
  };

  const handleMaxPriceChange = (e) => {
    const price = e.target.value;
    setMaxPrice(price);
    onFilterChange({
      searchTerm,
      selectedCategory,
      minPrice,
      maxPrice: price,
    });
  };

  return (
    <div className="product-filter">
      <h2>Filter Products</h2>
      <div className="filter-group">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className="filter-group">
        <label htmlFor="category">Category:</label>
        <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
          <option value="accessories">Accessories</option>
         
        </select>
      </div>
      <div className="filter-group">
        <label>Price Range:</label>
        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={handleMinPriceChange}
        />
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={handleMaxPriceChange}
        />
      </div>
    </div>
  );
};

export default ProductFilter;
    */}