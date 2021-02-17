import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { createApi } from 'unsplash-js';

function App() {
  const unsplash = createApi({
    accessKey: 'FZhX79Vxbv7QHMF74Sdk4dk_yL1tYAal4oqpWtTtrD8',
  });

  const [images, setImages] = useState();

  const getImages = (category) => {
    unsplash.search
      .getPhotos({ query: category, orientation: 'landscape', perPage: 12 })
      .then((result) => {
        setImages(result);
        console.log(result);
      })
      .catch(() => {
        console.log('something went wrong!');
      });
  };

  useEffect(() => {
    getImages('piano');
  }, []);

  return (
    <div className="container">
      <div className="btnHolder">
        <button className="btn" onClick={() => getImages('piano')}>
          Pianos
        </button>
        <button className="btn" onClick={() => getImages('guitar')}>
          Guitars
        </button>
        <button className="btn" onClick={() => getImages('violin')}>
          Violins
        </button>
        <button className="btn" onClick={() => getImages('saxophone')}>
          Saxaphones
        </button>
      </div>

      {!images ? (
        <div>Loading...</div>
      ) : (
        <div className="imgHolder">
          {images.response.results.map((photo) => (
            <img key={photo.id} className="image" src={photo.urls.regular} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
