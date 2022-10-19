import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'
import './CardArray.css'

const CardArray = ({cityCollection, twoColumn, setPlace, setCity, rests, headerString, link}) => {

    const [displayCount, setCount] = useState(5)

    const cityName = cityCollection.Attractions[0].city_name

    const subCollection = rests ? cityCollection.Restaurants : cityCollection.Attractions

    const showMoreClick = () => {
        setCount(displayCount + 4 <= subCollection.length ? displayCount + 20 : subCollection.length)
    }

    const viewCityClick = (city) => {
       
        {setCity(city)}
        localStorage.setItem("cityToShowString", cityName)
     }

  return (
    <div className='container'>
                <div className='heading'>{headerString} {cityName}</div>
                <ul className='itemlist'>
                    {(subCollection).slice(0 ,displayCount).map((place, i) => {
                       return(
                       <Card twoColumn={twoColumn} place={place} subCollection={rests ? "Restaurants" : "Attractions"} cityName={cityName} key={i} index= {i} setPlace={setPlace} setCity={setCity}/>
                    )}) }
                </ul>
               
               {link ? <Link to={"/thingsin/"+cityCollection.Attractions[1].address_obj.city}> <button className='more' onClick={() => {viewCityClick(cityName)}}>
                VIEW ALL {rests ? "RESTAURANTS" : "THINGS"} IN {cityName}
                </button></Link> :
                 <button className='more' onClick={() => {showMoreClick()}}>
                VIEW MORE {rests ? "RESTAURANTS" : "THINGS"} IN {cityName}
                </button>
                }
            </div>
  )
}

export default CardArray