import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import pizzas from '../../data/pizze'

const Menu = () => {
  return (
    <div>
      <Header />
      <div className="container my-5">
        <h1 className="text-center mb-4">Il Nostro Menu</h1>
        <div className="row">
          {pizzas.map((pizza, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{pizza.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">€ {pizza.price.toFixed(2)}</h6>
                  <ul className='card-text  ps-3'>
                    {pizza.ingredients.map((ingredients, index) => (
                      <li key={index}>{ingredients}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default Menu