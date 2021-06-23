import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends, faGlobeAmericas, faBuilding, faFile, faClock, faDollarSign, faLanguage } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom'
import './CountryDetails.css'


const CountryDetails = (props) => {

    const { countryName } = useParams();
    const [country, setCountry] = useState([]);

    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${countryName}`
        fetch(url)
            .then(res => res.json())
            .then(data => setCountry(data))
    }, [])

    return (
        <div>
            {
                country.map(ct =>
                    <div className='card-container'>
                        <div style={{ textAlign: 'center' }}>
                            <img style={{ width: '40%', border: '5px solid black' }} src={ct.flag} alt="" />
                            <h1>{ct.name}</h1>
                        </div>
                        <div className="info-container">
                            <div>
                                <h3><FontAwesomeIcon icon={faGlobeAmericas} /> Region: {ct.region}</h3>
                                <h3><FontAwesomeIcon icon={faUserFriends} /> Population: {ct.population}</h3>
                                <h3><FontAwesomeIcon icon={faBuilding} /> Capital: {ct.capital}</h3>
                                <h3><FontAwesomeIcon icon={faFile} /> Numeric Code: {ct.numericCode}</h3>
                            </div>
                            <div>
                                <h3><FontAwesomeIcon icon={faClock} /> Time Zone: {ct.timezones}</h3>
                                <h3><FontAwesomeIcon icon={faGlobeAmericas} /> Top Level Domain: {ct.topLevelDomain}</h3>
                                <h3><FontAwesomeIcon icon={faDollarSign} /> Currency: {ct.currencies[0].name} ({ct.currencies[0].symbol})</h3>
                                <h3><FontAwesomeIcon icon={faLanguage} /> Language: {ct.languages[0].name}</h3>
                            </div>
                        </div>
                        <Link style={{ textDecoration: 'none', display: 'flex', justifyContent: 'center' }} to="/">
                            <Button variant="contained" color="primary">
                                back
                            </Button>
                        </Link>
                    </div>
                )
            }
        </div>
    );
};

export default CountryDetails;