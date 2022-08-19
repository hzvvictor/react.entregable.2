import { useEffect, useState } from 'react'
const kelvinToFarenheit = (K = 0) => {
    // F = 1.8*(K-273) + 32.
    let value = 1.8 * (Number(K) - 273) + 32
    return `${value.toFixed(2)} °F`
}
const farenheitToCelcius = (F) => {
    // C = (32 °F − 32) × 5/9
    const value = (Number(F) - 32) / 1.8
    return `${value.toFixed(2)} °C`
}
const celciusToFarenheit = (C) => {
    // ºF = ºC x 1.8 + 32
    const value = (Number(C) * 1.8) + 32
    return `${value.toFixed(2)} °F`
}


const CardTemp = ({ temperature }) => {

    useEffect(() => {
        if(temperature)
        setTemp(kelvinToFarenheit(temperature))
    }, [temperature])

    const [temp, setTemp] = useState(0)
    const [measure, setMeasure] = useState('To °C')
    const toggleMeasure = () => {
        // "65.84 °F"
        let measure = temp.slice(-1) || 0
        const value = temp.match(/\d+(\.\d+)?/g)
        if (measure == 'F') {
            setTemp(farenheitToCelcius(value))
            measure = 'To °F'
        }
        else {
            setTemp(celciusToFarenheit(value))
            measure = 'To °C'
        }
        setMeasure(measure)
    }
    return (
        <section className="temp">
            <h3>Temperature</h3>
            <div className="temp__content">
                {temp}
                <button onClick={toggleMeasure}>
                    {measure}
                </button>
            </div>
        </section>
    )
}

export default CardTemp