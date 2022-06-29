import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Country = () => {
  const { countryName } = useParams()
  const [myCountry, setMyCountry] = useState({})

  const fetchCountry = () => {
    axios
      .get(`https://restcountries.com/v3.1/name/${countryName}`)
      .then(response => response.data)
      .then(data => setMyCountry(data[0]))
  }
  useEffect(() => {
    fetchCountry()
  }, [])

  console.log(myCountry)
  return (
    <div>
      Country : {countryName}
      {myCountry && myCountry.name && (
        <>
          <h2> {myCountry.name.official} </h2>
          <h3> {myCountry.capital} </h3>
          <h4> {myCountry.region} </h4>
          <h5> {Object.values(myCountry.languages).join(' / ')} </h5>
        </>
      )}
    </div>
  )
}
export default Country
