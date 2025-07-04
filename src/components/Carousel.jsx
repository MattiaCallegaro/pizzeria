import React from 'react';

const Carousel = () => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide mt-5" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
          className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
          aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
          aria-label="Slide 3"></button>
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/ivan-torres-MQUqbmszGGM-unsplash.jpg"
            className="d-block mx-auto img-fluid rounded"
            style={{ width: '75%', height: 'auto' }}
            alt="Pizza 1" />
        </div>
        <div className="carousel-item">
          <img src="/pexels-fariphotography-905847.jpg"
            className="d-block mx-auto img-fluid rounded"
            style={{ width: '75%', height: 'auto' }}
            alt="Interno pizzeria" />
        </div>
        <div className="carousel-item">
          <img src="/pexels-brettjordan-842519.jpg"
            className="d-block mx-auto img-fluid rounded"
            style={{ width: '75%', height: 'auto' }}
            alt="Pizza ingredienti" />
        </div>
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
