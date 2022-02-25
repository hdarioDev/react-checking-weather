import React from 'react'

function Clima({ resultApi }) {
    console.log("resultApi in clima ", resultApi)
    const { name, main } = resultApi
    //grados en kelvin format
    const kelvin = 273.15


    if (!name) return null
    return (
        <React.Fragment>


            <h2>El clima de {name} es: </h2>
            <p className='temp'>
                {(main.temp - kelvin).toFixed(2)}<span>&#x2103;</span>
            </p>

            <p className='temp_max'> Temperatura máxima:
                <b>{(main.temp_max - kelvin).toFixed(2)}<span>&#x2103;</span></b>
            </p>
            <p className='temp_min'> Temperatura mínima:
                <b>  {(main.temp_min - kelvin).toFixed(2)}<span>&#x2103;</span></b>
            </p>
        </React.Fragment>
    )
}

export default Clima
