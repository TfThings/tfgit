import React from 'react'
import FortMyersAll from '../StoredJsons/FortMyersAll.json'
import FortMyersBeachAll from '../StoredJsons/FortMyersBeachAll.json'
import CapeCoralAll from '../StoredJsons/CapeCoralAll.json'
import NaplesAll from '../StoredJsons/NaplesAll.json'
import EsteroAll from '../StoredJsons/EsteroAll.json'


const SiteMapGen = () => {

    var ss = ""

    var ob = {}

    const GetLinks = (collection) => {
        var cityName = collection.Attractions[0].city_name

        collection.Attractions.map((place, i) => {
            const datString ="-c:"+cityName+"-s:"+"Attractions"+"-i:"+i
            const urlS = "https://www.thingsflorida.com/things/"+cityName+"/"+place.name+place.address+"="+datString
            const f = urlS.split(' ').join('%20');
            ss = ss + 
            "<url>" +
            "<loc>" + f + "</loc>" +
            "<lastmod>2022-10-23T23:12:38+00:00</lastmod>" +
            "<changefreq>monthly</changefreq>" +
            "<priority>0.7</priority>" + 
            "</url>"
        })

        // collection.Restaurants.map((place, i) => {
        //     const datString ="-c:"+cityName+"-s:"+"Restaurants"+"-i:"+i
        //     const urlS = "https://www.thingsflorida.com/things/"+cityName+"/"+place.name+place.address+"="+datString
        //     const f = urlS.split(' ').join('%20');
        //     ss = ss + " <url> <loc>" + f + "</loc> <lastmod>2022-10-23T23:12:38+00:00</lastmod> <changefreq>monthly</changefreq> <priority>0.7</priority> </url> "
        // })
        
    }

  return (
    <>
    {GetLinks(FortMyersAll)}
    {GetLinks(CapeCoralAll)}
    {GetLinks(NaplesAll)}
    {GetLinks(EsteroAll)}
    {console.log(FortMyersAll)}
    </>
  )
}

export default SiteMapGen