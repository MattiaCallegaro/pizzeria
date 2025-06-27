import React from 'react'
import Carousel from './Carousel'
import { NavLink } from 'react-router-dom'
import pizzas from '../../data/pizze'

const Main = () => {
  const immagini = ["/margherita.jpg", "/diavola.jpg", "/4-formaggi.jpg"];

  return (
    <>
      <div className="container d-flex align-items-center justify-content-center ">
        <div className="row mt-3">
          <div className="col-lg-12 ">
            <Carousel />
            <div className="row mt-5">
              {/* chi siamo */}
              <section className="container text-center my-5">
                <h2>Chi siamo</h2>
                <p>
                  La Pizzeria Grande Piramide d’Egitto nasce dalla passione per la pizza autentica, cotta nel forno a legna.
                  Uniamo la tradizione italiana a un tocco originale per offrire sapori unici.
                </p>
              </section>
              {/* le migliori pizze */}
              <section className="container text-center my-5">
                <h2>Le nostre pizze più amate</h2>
                <div className="row">
                  {pizzas.slice(0, 3).map((pizza, index) => (
                    <div className="col-md-4 mt-4 " key={index}>
                      <img src={immagini[index]} alt={pizza.name} className="img-fluid rounded mb-2" style={{ width: '80%', height: '80%' }} />
                      <h5>{pizza.name}</h5>
                      <p>{pizza.ingredients.join(", ")}</p>
                    </div>
                  ))}
                </div>
                <NavLink to="/menu" className="btn btn-outline-dark mt-3">Vai al menu completo</NavLink>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Main
