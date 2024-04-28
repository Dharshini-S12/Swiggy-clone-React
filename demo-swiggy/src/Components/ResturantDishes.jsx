import React from 'react'

function ResturantDishes() {

    const imageData = [
        {
          img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/47eabee7009164ca18a3ccf1dcc17377',
          name: 'Hotel Aryaas',
          rating: '4.5',
          time: '14mins',
          cuisine: 'South Indian',
          location: 'Pollachi',
        },
        {
          img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f1bc9ddf53de574cdc35ab2f717df234',
          name: 'Hotel Aryaas',
          rating: '4.5',
          time: '14mins',
          cuisine: 'South Indian',
          location: 'Pollachi',
        },
        {
          img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/b14cd9fc40129fcfb97aa7e621719d07',
          name: 'Hotel Aryaas',
          rating: '4.5',
          time: '14mins',
          cuisine: 'South Indian',
          location: 'Pollachi',
        },
        {
          img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/uorbn09yih2szvmzvtql',
          name: 'Hotel Aryaas',
          rating: '4.5',
          time: '14mins',
          cuisine: 'South Indian',
          location: 'Pollachi',
        },
        {
          img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/35e32a75524a100c411bd7b6693d8b74',
          name: 'Hotel Aryaas',
          rating: '4.5',
          time: '14mins',
          cuisine: 'South Indian',
          location: 'Pollachi',
        },
        {
          img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/mlm22bc4rugenfosyw8z',
          name: 'Hotel Aryaas',
          rating: '4.5',
          time: '14mins',
          cuisine: 'South Indian',
          location: 'Pollachi',
        },
        {
          img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/aeda109df92aa62f9c2bfed818935d2f',
          name: 'Hotel Aryaas',
          rating: '4.5',
          time: '14mins',
          cuisine: 'South Indian',
          location: 'Pollachi',
        },
        {
          img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/khntt7mio6tl0wusu5gf',
          name: 'Hotel Aryaas',
          rating: '4.5',
          time: '14mins',
          cuisine: 'South Indian',
          location: 'Pollachi',
        },
        {
          img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/n4jmdjf6n3l6mr69plx2',
          name: 'Hotel Aryaas',
          rating: '4.5',
          time: '14mins',
          cuisine: 'South Indian',
          location: 'Pollachi',
        },
        {
          img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f1bc9ddf53de574cdc35ab2f717df234',
          name: 'Hotel Aryaas',
          rating: '4.5',
          time: '14mins',
          cuisine: 'South Indian',
          location: 'Pollachi',
        },
        {
          img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/lnsgtsfgop9wu8kacuch',
          name: 'Hotel Aryaas',
          rating: '4.5',
          time: '14mins',
          cuisine: 'South Indian',
          location: 'Pollachi',
        },
        {
          img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/iualkptr0tqedxboq5gn',
          name: 'Hotel Aryaas',
          rating: '4.5',
          time: '14mins',
          cuisine: 'South Indian',
          location: 'Pollachi',
        },
        {
          img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/929b7f235d56e37c7f391a4e292493cb',
          name: 'Hotel Aryaas',
          rating: '4.5',
          time: '14mins',
          cuisine: 'South Indian',
          location: 'Pollachi',
        },
        {
          img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/gnlktysadf0z5cnudqx8',
          name: 'Hotel Aryaas',
          rating: '4.5',
          time: '14mins',
          cuisine: 'South Indian',
          location: 'Pollachi',
        },
        {
          img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/da2592e0d25f079cbf9aedf436cabf6f',
          name: 'Hotel Aryaas',
          rating: '4.5',
          time: '14mins',
          cuisine: 'South Indian',
          location: 'Pollachi',
        },
        {
          img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/wbka9jvlfc1t9tjgra8c',
          name: 'Hotel Aryaas',
          rating: '4.5',
          time: '14mins',
          cuisine: 'South Indian',
          location: 'Pollachi',
        },
        {
          img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/35e32a75524a100c411bd7b6693d8b74',
          name: 'Hotel Aryaas',
          rating: '4.5',
          time: '14mins',
          cuisine: 'South Indian',
          location: 'Pollachi',
        },
        {
          img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/mlm22bc4rugenfosyw8z',
          name: 'Hotel Aryaas',
          rating: '4.5',
          time: '14mins',
          cuisine: 'South Indian',
          location: 'Pollachi',
        },
        {
          img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/aeda109df92aa62f9c2bfed818935d2f',
          name: 'Hotel Aryaas',
          rating: '4.5',
          time: '14mins',
          cuisine: 'South Indian',
          location: 'Pollachi',
        },
        {
          img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/khntt7mio6tl0wusu5gf',
          name: 'Hotel Aryaas',
          rating: '4.5',
          time: '14mins',
          cuisine: 'South Indian',
          location: 'Pollachi',
        },
        {
          img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/47eabee7009164ca18a3ccf1dcc17377',
          name: 'Hotel Aryaas',
          rating: '4.5',
          time: '14mins',
          cuisine: 'South Indian',
          location: 'Pollachi',
        },
        {
          img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f1bc9ddf53de574cdc35ab2f717df234',
          name: 'Hotel Aryaas',
          rating: '4.5',
          time: '14mins',
          cuisine: 'South Indian',
          location: 'Pollachi',
        },
        {
          img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/b14cd9fc40129fcfb97aa7e621719d07',
          name: 'Hotel Aryaas',
          rating: '4.5',
          time: '14mins',
          cuisine: 'South Indian',
          location: 'Pollachi',
        },
        {
          img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/uorbn09yih2szvmzvtql',
          name: 'Hotel Aryaas',
          rating: '4.5',
          time: '14mins',
          cuisine: 'South Indian',
          location: 'Pollachi',
        },

      ];
    
      return (
        <div className='body-image-container-main'>
          {imageData.map((data, index) => (
            <ImageContainer key={index} data={data} />
          ))}
        </div>
      );
    }
    
    const ImageContainer = ({ data }) => {
      return (
        <div className='body-image-container'>
          
          <a href=' ' className='body-image-container-anchor'>
            <div className="body-image-container-1">
              <img className='body-image-container-pic' src={data.img} alt="Your alt text" />
              <div className="centered">10% OFF UPTO ₹100</div>
            </div>
            <div className='body-image-container-2'>
              <span className='body-image-container-text'>{data.name}</span>
              <div className='body-image-container-3'>
                <img src='/images/star-inside-circle.png' alt="Star" width={19} height={21} />
                <span className='body-image-container-text-1'>{data.rating} &#8226; {data.time}</span><br></br>
              </div>
              <span className='body-image-container-text-2'>{data.cuisine}<br></br>{data.location}</span>
            </div>
          </a>
        </div>
      );
}

export default ResturantDishes