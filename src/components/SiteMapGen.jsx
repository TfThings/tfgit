import React from 'react'
import FortMyersAll from '../StoredJsons/FortMyersAll.json'
import FortMyersBeachAll from '../StoredJsons/FortMyersBeachAll.json'
import CapeCoralAll from '../StoredJsons/CapeCoralAll.json'
import NaplesAll from '../StoredJsons/NaplesAll.json'
import EsteroAll from '../StoredJsons/EsteroAll.json'


const SiteMapGen = () => {

    var ss = ""

    const GetLinks = ({subCollection}) => {
        var cityName = subCollection[0].city_name

        return(
        subCollection.map((place, i) => {
          if(place && place.location_id != "34230" && place.photo && place.description != "")
          {
            const datString ="-c:"+cityName+"-s:"+subCollection[0].collection_type+"-i:"+i
            const urlS = "https://www.thingsflorida.com/things/"+cityName+"/"+place.name+"?"+datString
            const f = urlS.split(' ').join('%20');
            ss = f
            return(
              <>
              <div>
              <p>{"<url>"}</p>
              <p>{"<loc>" + ss + "</loc>"}</p>
              <p>{"<lastmod>" + "2022-11-11T15:12:38+00:00" + "</lastmod>"}</p>
              <p>{"<changefreq>" + "monthly" + "</changefreq>"}</p>
              <p>{"<priority>" + "0.7" + "</priority>"}</p>
              <p>{"</url>"}</p>
              </div>
              </>
            )
          }
        })
        )
    }

  return (
    <>
    <div>
      <GetLinks subCollection={FortMyersAll.Attractions}/>
      <GetLinks subCollection={FortMyersAll.Restaurants}/>
      <GetLinks subCollection={CapeCoralAll.Attractions}/>
      <GetLinks subCollection={CapeCoralAll.Restaurants}/>
      <GetLinks subCollection={NaplesAll.Attractions}/>
      <GetLinks subCollection={NaplesAll.Restaurants}/>
      <GetLinks subCollection={EsteroAll.Attractions}/>
      <GetLinks subCollection={EsteroAll.Restaurants}/>
    </div>
    </>
  )
}

export default SiteMapGen