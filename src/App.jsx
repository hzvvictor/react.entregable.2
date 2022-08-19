import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import CardsWeather from './components/CardsWeather'
function App() {
  const [count, setCount] = useState(0)


  const [coords, setCoords] = useState()
  useEffect(() => {
    
    const success = (pos) => {
      console.log(pos);
      const latlon = {
        lat: pos.coords.latitude,
        lon: pos.coords.longitude
      }
      setCoords(latlon)
      // console.log(latlon);
    }
    navigator.geolocation.getCurrentPosition(success)
  }, [])
  return (
    <div className="App">
      <CardsWeather lat={coords?.lat} lon={coords?.lon}></CardsWeather>
    </div>
  )
}

export default App
