import React from 'react'
import Carousel from './Carousel'

const Main = () => {
  return (
    <>
      <div className="container d-flex align-items-center justify-content-center ">
        <div className="row mt-3">
          <div className="col-12">
            <Carousel />
            <div className="row mt-5">
              <div className="col text-center">La nostra passione</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Main
