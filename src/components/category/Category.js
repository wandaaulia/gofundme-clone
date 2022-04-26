import React from 'react';
import './category.scss';
import dataCategories from '../../data/dataCategories';

const Category = () => {
  return (
    <div className='category'>
      <h3> Explore by category</h3>
      <div className='content-category'>
        { dataCategories.map((data) => {
          return (
            <div className='card-category'>
              <hr />
              <p> {data.name} </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
