import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Planets = (props) => {
    const { id } = useParams();
    const [apiData, setApiData] = useState({})
    const [isError, setIsError] = useState(false)

    useEffect( () => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
        .then(response => {
            setIsError(false);
            console.log(response.data)
            setApiData(response.data)
        })
        .catch((err) => {
            setIsError(true)
            console.log(err)
        })
    }, [id])
    
    if (!isError) {
        return(
            <div>
                <h1>{ apiData.name }</h1>
                <p>Diameter: { apiData.diameter}</p>
                <p>Rotation Period: { apiData.rotation_period}</p>
                <p>Orbital Period: { apiData.orbital_period}</p>
                <p>Gravity G units: { apiData.gravity}</p>
                <p>Population: { apiData.population }</p>
                <p>Climate: { apiData.climate }</p>
                <p>Terrain: { apiData.terrain }</p>
                <p>Surface Water: { apiData.surface_water }</p>
                <p>Residents: { apiData.residents }</p>
                <p>Films: { apiData.films }</p>
                <p>Created: { apiData.created }</p>
                <p>Edited: { apiData.edited }</p>
                <p>URL: { apiData.url }</p>
            </div>
        )
    } else {
        return <div>Error fetching data!</div>
    }
}

export default Planets