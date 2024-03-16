import React from 'react'
import { PropertyList } from './property/PropertyList'
import { Navbar } from './navbar/Navbar'
import { SearchBar } from './search/SearchBar'

export const Home = () => {
  return (
    <div>
        <Navbar />
        {/* <SearchBar /> */}
        <PropertyList />
    </div>
  )
}