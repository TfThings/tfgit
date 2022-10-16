import React from 'react'
import './Thingstodo.css'
import SearchHeader from './SearchHeader'
import FortMyersAll from '../StoredJsons/FortMyersAll.json'
import CapeCoralAll from '../StoredJsons/CapeCoralAll.json'
import NaplesAll from '../StoredJsons/NaplesAll.json'
import EsteroAll from '../StoredJsons/EsteroAll.json'
import CardArray from './CardArray'


const Thingstodo = ({setPlace, setCity}) => {
    return (
    <div className='thingsmain'>
        <SearchHeader/>
        <div className='contents'>
            <CardArray cityCollection={FortMyersAll} twoColumn={false} setPlace={setPlace} setCity={setCity} headerString="Top Things in" link={true}/>
            {/* <CardArray cityCollection={FortMyersBeachAll} twoColumn={false} setPlace={setPlace} setCity={setCity} headerString="Top Things in" link={true}/> */}
            <CardArray cityCollection={CapeCoralAll} twoColumn={false} setPlace={setPlace} setCity={setCity} headerString="Top Things in" link={true}/>
            <CardArray cityCollection={NaplesAll} twoColumn={false} setPlace={setPlace} setCity={setCity} headerString="Top Things in" link={true}/>
            <CardArray cityCollection={EsteroAll} twoColumn={false} setPlace={setPlace} setCity={setCity} headerString="Top Things in" link={true}/>        
        </div>
    </div>
  )
}

export default Thingstodo