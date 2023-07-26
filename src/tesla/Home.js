import React from 'react'
import Header from './Header'
import Section from './Section'
import './tesla.css'

function Home() {
  return (
    <>
        <Header />
        <Section 
            name="Model 3"
        />
        <Section 
            name="Model S"
        />
        <Section 
            name="Model X"
        />
        <Section 
            name="Model Y"
        />
        <Section 
            name="Solar Panel"
        />
        <Section 
            name="Solar Roof"
        />
        <Section 
            name="Acessories"
        />
    </>
  )
}

export default Home