import React from 'react';

import '../Styles/marvel.scss';

const Card = ({ title,description,image_src}) => {
  return (
    <>
    
    <div className="card">
      <div>
        <img src={image_src} width='100%' height={90} />
        </div>
        <div> 
      <h2>{title}</h2>
      <button>Click here</button>
      </div>
      

      
    </div>
    </>
  );
};

export default Card;