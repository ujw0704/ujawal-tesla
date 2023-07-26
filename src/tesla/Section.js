/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import DownArrow from '../images/down-arrow.svg'

function Section(props) {
  return (
    <section>
      <div className='carName'>
        <h1>{props.name}</h1>
        <p>Order Online for touchless delivery</p>
      </div>
      <div className='cta'>
        <div className='buttons'>
          <a href="" className='firstBtn'>Custom Order</a>
          <a href="" className='secondBtn'>Existing Inventory</a>
        </div>
        <img src={DownArrow} alt="Down Arrow" />
      </div>
    </section>
  )
}

export default Section