import React, { useState, useEffect } from 'react';
import './FoodRecipe.css';
export default function FoodRecipe() {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const Id = '48fd2fed';
      const key = '10e674fcd4f9c01f8f5108bcdacf7f8c';

      try {
        const response = await fetch(`https://api.edamam.com/search?q=&app_id=${Id}&app_key=${key}&calories=100-500`);
        const result = await response.json();
        setData(result.hits);
        setFilteredData(result.hits);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchData();
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    const Id = '48fd2fed';
    const key = '10e674fcd4f9c01f8f5108bcdacf7f8c';

    try {
      const response = await fetch(`https://api.edamam.com/search?q=${search}&app_id=${Id}&app_key=${key}&calories=100-500`);
      const result = await response.json();
      setFilteredData(result.hits);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  return (
    <>
      <div className="main">
        <div className="heading">
          <h1>Search Your Food Recipe</h1>
        </div>
        <div className="searchBox">
          <form onSubmit={submitHandler}>
            <input
              type="text"
              className="searchbar"
              placeholder="Enter food Recipe"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit">Search</button>
          </form>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          {filteredData.map((recipe) => (
            <div className="col-md-3 mb-4" key={recipe.recipe.label}>
              <div className="card h-100 d-flex flex-column">
                <img src={recipe.recipe.image} className="card-img-top" alt={recipe.recipe.label} />
                <div className="card-body">
                  <h5 className="card-title">{recipe.recipe.label}</h5>
                  <p className="card-text">Calories: {recipe.recipe.calories.toFixed(2)}</p>
                  <a href={"#"} className="btn btn-primary" target="_blank">
                Add to Cart
                 </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}




