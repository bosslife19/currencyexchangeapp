import React from 'react'
import Navbar from './Navbar'
import SearchBar from './SearchBar'
import CurrencyData from './CurrencyData'
import Currencies from './Currencies'

const CurrencyTotal = () => {
  return (
    <>
      <Navbar/>
      <SearchBar/>
      <CurrencyData/>
      <Currencies/>
    </>
  )
}

export default CurrencyTotal
