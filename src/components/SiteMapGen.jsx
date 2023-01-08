import React from 'react'
import FortMyersAll from '../StoredJsons/FortMyersAll.json'
import FortMyersBeachAll from '../StoredJsons/FortMyersBeachAll.json'
import CapeCoralAll from '../StoredJsons/CapeCoralAll.json'
import NaplesAll from '../StoredJsons/NaplesAll.json'
import EsteroAll from '../StoredJsons/EsteroAll.json'
import FortMyersBus from '../StoredJsons/FortMyersBus.json'


const SiteMapGen = () => {

    var ss = ""

    const GetLinks = ({subCollection, cityName, priority}) => {

      var suf = cityName == "Services" ? "https://www.thingsflorida.com/Services/" : "https://www.thingsflorida.com/things/"

      var subCollectionName = cityName == "Services" ? subCollection[0].collectionParentName : subCollection[0].collection_type
        return(
        subCollection.map((place, i) => {
          if(place && place.location_id != "34230" && place.photo && place.description != "")
          {
            const datString ="-"+cityName+"-"+subCollectionName+"-"+i+"-"
            const urlS = cityName == "Services" ? suf+place.name+"?"+datString : suf+cityName+"/"+place.name+"?"+datString
            const f = urlS.split(' ').join('%20');
            const ps = place.photo.images.large.url;
            const pd = place.description;
            ss = f
            return(
              <>
              <div>
              <p>{"<url>"}</p>
              <p>{"<loc>" + ss + "</loc>"}</p>
              <p>{"<lastmod>" + "2023-01-07T15:12:35+00:00" + "</lastmod>"}</p>
              <p>{"<changefreq>" + "monthly" + "</changefreq>"}</p>
              <p>{"<priority>" + priority + "</priority>"}</p>
              <p>{'<image:image>'}</p>
              <p>{'<image:loc>' + ps + '</image:loc>'}</p>
              <p>{'<image:title>' + pd + '</image:title>'}</p>
              <p>{'</image:image>'}</p>
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
      <GetLinks subCollection={FortMyersBus.Roofing} cityName="Services" priority="0.8"/>
      <GetLinks subCollection={FortMyersBus.Fencing} cityName="Services" priority="0.8"/>
      <GetLinks subCollection={FortMyersBus.Poolcage} cityName="Services" priority="0.8"/>
      <GetLinks subCollection={FortMyersBus.PoolCleaning} cityName="Services" priority="0.8"/>
      <GetLinks subCollection={FortMyersBus.Pavers} cityName="Services" priority="0.8"/>
      {/* <GetLinks subCollection={FortMyersAll.Attractions} cityName={FortMyersAll.Attractions[0].collectionParentName} priority="0.7"/>
      <GetLinks subCollection={FortMyersAll.Restaurants} cityName={FortMyersAll.Restaurants[0].collectionParentName} priority="0.7"/> */}
      {/* <GetLinks subCollection={CapeCoralAll.Attractions} cityName={CapeCoralAll.Attractions[0].collectionParentName} priority="0.7"/>
      <GetLinks subCollection={CapeCoralAll.Restaurants} cityName={CapeCoralAll.Restaurants[0].collectionParentName} priority="0.7"/> */}
      {/* <GetLinks subCollection={NaplesAll.Attractions} cityName={NaplesAll.Attractions[0].collectionParentName} priority="0.7"/>
      <GetLinks subCollection={NaplesAll.Restaurants} cityName={NaplesAll.Restaurants[0].collectionParentName} priority="0.7"/> */}
      {/* <GetLinks subCollection={EsteroAll.Attractions} cityName={EsteroAll.Attractions[0].collectionParentName} priority="0.7"/>
      <GetLinks subCollection={EsteroAll.Restaurants} cityName={EsteroAll.Restaurants[0].collectionParentName} priority="0.7"/> */}
    </div>
    </>
  )
}

export default SiteMapGen