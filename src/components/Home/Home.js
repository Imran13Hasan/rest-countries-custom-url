import React, { useEffect, useState } from 'react';
import Country from '../../components/Country/Country';
import './Home.css'

const Home = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/all`
        fetch(url)
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    return (
        <div>
            <h1 style={{ textAlign: 'center', fontSize: '50px', fontWeight: 'bold' }}>REST COUNTRIES <span style={{fontSize: '20px', color: 'tomato'}}>{countries.length}</span></h1>
            <div className='country'>
                {
                    countries.map(country => <Country country={country} key={country.alpha2Code}></Country>)
                }
            </div>
        </div>
    );
};

export default Home;