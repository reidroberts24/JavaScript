import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Form = () => {
    const [category, setCategory] = useState("")
    const [id, setId] = useState("")
    const [idError, setIdError] = useState("")
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/${category}/${id}`)
    }

    return(
        <form onSubmit={ handleSubmit }>
            <div>
                <label>Search for: </label>
                <select value={ category } onChange={ e => setCategory(e.target.value) }>
                    <option value="">-- Select a category --</option>
                    <option value="films">Films</option>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                </select>
                <label> ID: </label>
                <input value={ id } onChange={ e => setId(e.target.value) } />
                <button type='submit'>Go!</button>
            </div>
        </form>
    )
}


export default Form;