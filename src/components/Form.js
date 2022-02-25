import React from 'react'

function Form({ search, setSearch, send, setSend }) {

    const [error, setError] = React.useState(false)

    const { city, country } = search

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
                {/* <div className='input-field'> */}
                <label>Ciudad</label>
                <input type="text" name="city" value={city} onChange={handleChange}></input>
                {/* </div> */}

                {/* <div className='input-field select'> */}
                <label>País</label>
                <select name="country" value={country} onChange={handleChange}>
                    <option value="">---Seleccionar</option>
                    <option value="BO">Bolivia</option>
                    <option value="CL">Chile</option>
                    <option value="BR">Brasil</option>
                    <option value="AR">Argentina</option>
                    <option value="PY">Paraguay</option>
                    <option value="PE">Perú</option>
                    <option value="MX">México</option>
                    <option value="SV">El Salvador	</option>
                    <option value="TR">Turquía</option>
                    <option value="US">Estados Unidos</option>
                </select>
                {/* </div> */}
                <input type="submit" value="Buscar clima" className='submit'></input>
            </form>

        </React.Fragment>
    )
}

export default Form
