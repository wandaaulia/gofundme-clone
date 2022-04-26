import React from 'react';
import './listArticle.scss';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import dataArticle from '../../data/dataArticle';
import dataDestination from '../../data/dataDestination';

const ListArticle = () => {
  return (
    <div className='article'>
      <div className='article-left'>
        <div>
          <h3 className='title-article'> Recent Articles </h3>
        </div>
        <div className='container-article-left'>
          { dataArticle.map((data) => {
            return (
              <div className='content-article-left'>
                <div className='img-profile'>
                  <img src={data.img} alt='photos-profile' />
                </div>
                <div className='card-content'>
                  <div className='text-card'>
                    <p className='small-text'> #{data.category}  </p>
                    <p> . </p>
                    <p className='small-read'>  {data.time} reading </p>
                  </div>
                  <h4> {data.title} </h4>
                  <p> {data.desc} </p>
                  <button className='button-navbar' type='button'> Read more </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className='article-right'>
        <div className='profile-data'>
          <h4 className='profile-name'>  Tim Holland </h4>
          <p>
            For as long as I can remember I’ve been obsessed with the idea of travel.
            I was always that person who was forever daydreaming of foreign lands
            and unfamiliar cultures;
          </p>
          <div className='info-social'>
            <h4 className='title-info'> Follow Me  </h4>
            <div className='social-media'>
              <FaFacebookF />
              <FaInstagram />
              <FaYoutube />
            </div>
          </div>
        </div>
        <div className='destination'>
          <h3 className='title-destination'> Destinations </h3>
          <div className='content-destination'>
            { dataDestination.map((data) => {
              return (
                <div className='card-destination'>
                  <hr />
                  <p> {data.name} </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className='next-destination'>
          <div className='info-next'>
            <h3 className='title-destination-2'>  Where to Next ? </h3>
            <p> Ther’s a wide world waiting for you </p>
          </div>
          <form className='desti-name'>
            <div className='container-form'>
              <label className='name-label' htmlFor='name'> Destination name</label>
              <input type='text' className='input' id='name' />
            </div>
            <div className='container-form'>
              <label htmlFor='check-in'> Check-in date </label>
              <input type='text' className='input' id='check-in' />
            </div>
            <div className='container-form'>
              <label htmlFor='check-out'>  Check-out date </label>
              <input type='text' className='input' id='check-out' />
            </div>
            <button className='button-read' type='button'> Read more </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ListArticle;
