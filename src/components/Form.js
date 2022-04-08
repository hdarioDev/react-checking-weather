import React from 'react'
import { getCountries } from '../utils/optionsSelect'

function Form({ search, setSearch, send, setSend }) {

    const [error, setError] = React.useState(false)
    const { city, country } = search
    const countries = getCountries();

    const handleSubmit = (e) => {
        e.preventDefault()
        if (city.trim() === '' || country.trim() === '') {
            setError(true)
            return
        }
        setError(false)
        setSend(true)

    }
    const handleChange = e => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    }
    return (
        <React.Fragment>
            <h2>Formulario</h2>
            {error ? <p className='sms--error'>Complete los campos</p> : null}
            <form onSubmit={handleSubmit}>
                <label>País</label>
                <select name="country" value={country} onChange={handleChange}>
                    {
                        countries.map(country => (<option key={country.code} value={country.code}>{country.name}</option>))
                    }
                </select>
                <label>Ciudad</label>
                <input type="text" name="city" value={city} onChange={handleChange}></input>
                <input type="submit" value="Buscar" className='submit'></input>
            </form>
        </React.Fragment>
    )
}

export default Form
