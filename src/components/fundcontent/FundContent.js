import React, { useState, useRef } from 'react';
import './fundcontent.scss';
import data from '../../data/dataFundItem';
import { FiArrowRight, FiArrowLeft} from 'react-icons/fi';

const FundContent = () => {
  const [noIndex, setNoIndex] = useState(3);
  const [nextEnd, setnextEnd] = useState(false);
  const [prevEnd, setprevEnd] = useState(true);

  const fundRef = useRef();

  const loadMore = () => {
    setNoIndex(noIndex + noIndex);
  };

  const fund = data.slice(0, noIndex);

  const fundWide = data;
  
  const prevBtn = () => {
    const slide = fundRef.current;
    slide.scrollLeft -= slide.offsetWidth;


    if(slide.scrollLeft === 0) {
      setprevEnd(true);
      setnextEnd(true);
    }

    setnextEnd(false);

  }

  const nextBtn = () => {
    const slide = fundRef.current;
    slide.scrollLeft += slide.offsetWidth;


    if(slide.scrollLeft >= (slide.scrollWidth - slide.offsetWidth)) {
      setnextEnd(true);
    }

    setprevEnd(false);

  }

  return (
    <div className='fundcontent'>
      <div className='fundcontent-top'>
        <p className='info-fundcontent'> Happening near you </p>
        <div className='title-button'> 
        <h2 className='title-fundcontent'> Fundraisers in your community </h2>
        <div className='button-slide'> 

        { prevEnd  ? <div  className='next-1'> </div> : 
        <button className='prev' onClick={prevBtn}> <FiArrowLeft /> </button>
        }
        
        { nextEnd  ? <div  className='next-1'> </div> : 
        <button className='next' onClick={nextBtn}> <FiArrowRight /> </button>
        }
        </div>
        </div>
      </div>

      <div className='fund-item-container'>
        { fund.map((item) => ( 
          <div className='fund-item' key={item.id}> 
                <div className='fund-item-img'> <img src={item.img} alt='img' /> </div>
                <div className='info-fund-item'> 
                    <h3> {item.title} </h3>
                    <p> {item.body} </p>
                    <div className='raise-fund'> 
                        <p> ${item.raise} raised </p>
                        <p className='dot-fund'>  · </p>
                        <p> {item.donations} donations </p>
                    </div>
                </div>
            </div>
        ))}
        {
        fund.length === 9 ? 
        (<div> </div>) :
        (<button onClick={loadMore} type='button' className='loadmore'> 
        Discover more fundraisers
        </button>)
        }
        </div>

        <div className='padding-fund-wide'>
        <div className='fund-item-wide' ref={fundRef}>
          { fundWide.map((item) => ( 
          <div className='fund-wide' key={item.id}> 
          <div className='fund-wide-img'> <img src={item.img} alt='img' /> </div>
                <div className='info-fund-wide'> 
                    <h3> {item.title} </h3>
                    <p> {item.body} </p>
                    <div className='raise-fund-wide'> 
                        <p> ${item.raise} raised </p>
                        <p className='dot-fund-wide'>  · </p>
                        <p> {item.donations} donations </p>
                    </div>
                </div>
            </div>
          ))}
        </div>
        </div>
    </div>
  );
};

export default FundContent;
