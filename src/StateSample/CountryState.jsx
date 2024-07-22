import React, { useState } from 'react'

function CountryState() {

    const [countries, setcountries] = useState(["Türkiye","Almanya","İran","Rusya","Çin","Suriye","Yunanistan"])

    const orderBy = () => {
        const sortedCountries =[...countries].sort((a,b) => a.localeCompare(b,'tr',{sensitivity: 'base'}) )
        setcountries(sortedCountries)
    }

  return <>
    <div style={{display:"flex"}}>
        <button onClick={orderBy}>Order By</button>
        <button onClick={() => setcountries([])}>Clear</button>
    </div>
    <h1>Length : {countries.length}</h1>

    <ul>
        {
            countries.map(item => <li>{item}</li>)
        }
    </ul>

  </>
}

export default CountryState