import React from 'react';
import './Country.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends, faGlobeAmericas, faBuilding, faLanguage } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Country = (props) => {
    const { name, region, population, capital, flag, languages } = props.country;

    const flagStyle = {
        width: '100px',
        border: '3px solid gray',
    }
    return (
        <div className='container'>
            <div className='card'>
                <div style={{ textAlign: 'center' }}>
                    <img style={flagStyle} src={flag} alt="" />
                </div>
                <h3 style={{ textAlign: 'center' }}>{name}</h3>
                <div className='div-info'>
                    <div> 
                        <p><FontAwesomeIcon icon={faGlobeAmericas} /> {region}</p>
                        <p><FontAwesomeIcon icon={faUserFriends} /> {population}</p>
                    </div>
                    <div>
                        <p><FontAwesomeIcon icon={faBuilding} /> {capital}</p>
                        <h5><FontAwesomeIcon icon={faLanguage} /> Language: {languages[0].name}</h5>
                    </div>
                </div>
                <Link className='btn-link' to={`/about/${name}`}>
                    <Button variant="outlined" color="secondary">
                        See More
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default Country;